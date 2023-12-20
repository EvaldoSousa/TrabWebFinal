const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const cors = require('cors');
const bodyParser = require('body-parser');
const util = require('util');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'basedado',
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao MySQL');
    }
});

// Função para gerar uma chave secreta aleatória
const generateSecretKey = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(32, (err, buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(buffer.toString('hex'));
            }
        });
    });
};

// Função para realizar consultas SQL usando promessas
const queryAsync = util.promisify(db.query.bind(db));

// Rota para criar um novo usuário
app.post('/signup', async (req, res) => {
    const { nomeUsuario, email, senha } = req.body;

    try {
        // Verifica se o e-mail já está cadastrado
        const checkEmailQuery = 'SELECT * FROM usuario WHERE email = ?';
        const existingUsers = await queryAsync(checkEmailQuery, [email]);

        if (existingUsers.length > 0) {
            // E-mail já cadastrado
            return res.status(400).json({ error: 'E-mail já cadastrado. Tente outro e-mail.' });
        }

        // Se o e-mail não está cadastrado, proceda com a inserção
        const insertUserQuery = 'INSERT INTO usuario (nomeUsuario, email, senha) VALUES (?, ?, ?)';
        await queryAsync(insertUserQuery, [nomeUsuario, email, senha]);

        res.json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

// Rota para realizar o login e obter um token JWT
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const result = await queryAsync('SELECT * FROM usuario WHERE email = ? AND senha = ?', [email, senha]);

        if (result.length > 0) {
            const user = result[0];

            // Gerando uma chave secreta aleatória
            const chaveSecreta = await generateSecretKey();

            // Gerando um token JWT com a biblioteca jsonwebtoken
            const token = jwt.sign({ userId: user.id, email: user.email }, chaveSecreta, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        res.status(500).json({ error: 'Erro ao realizar login' });
    }
});

app.delete('/deleteAccount/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        // Verifica se o usuário existe
        const checkUserQuery = 'SELECT * FROM usuario WHERE id = ?';
        const user = await queryAsync(checkUserQuery, [userId]);

        if (user.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Se o usuário existe, proceda com a exclusão
        const deleteAccountQuery = 'DELETE FROM usuario WHERE id = ?';
        await queryAsync(deleteAccountQuery, [userId]);

        res.json({ message: 'Conta excluída com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir conta:', error);
        res.status(500).json({ error: 'Erro ao excluir conta' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
