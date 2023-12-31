import React, { useState } from 'react';
import axios from 'axios'; // Importa a biblioteca axios
import { Link } from 'react-router-dom';
import styles from './Login.module.css'

const Login = () => {
  const [usuarioEmail, setUsuarioEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Faz a chamada à API usando axios
      const response = await axios.post('http://localhost:3001/login', { email: usuarioEmail, senha });
      const token = response.data.token;
      window.location.href = "/";
      // Armazena o token no localStorage
      localStorage.setItem('token', token);

      // Faça algo com o token, como redirecionar para outra página
      // Exemplo: history.push('/dashboard');
    } catch (error) {
      console.error('Erro no login:', error);
      // Trate os erros, por exemplo, exibindo uma mensagem de erro para o usuário
      alert('Usuário/email ou senha incorretos. Tente novamente.');
    }
  };

  return (
      <div className={styles.driver}>
        <div className={styles.left}>
          <form onSubmit={handleLogin} className={styles.barraLogin}>
            <h1>Login</h1>
                <label className={styles.nome}>Usuario/email</label>
                <input
                    type="email"
                    value={usuarioEmail}
                    onChange={(e) => setUsuarioEmail(e.target.value)}
                    placeholder="email"
                    required
                />

                <label className={styles.senha}>Senha</label>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="senha"
                    required
                />

                <button type="submit" className={styles.botaoL}>
                    Entrar
                </button>
            </form>
        </div>
    </div>
  );
};

export default Login;
