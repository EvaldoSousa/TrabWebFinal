import React, { useState } from 'react';
import axios from 'axios'; // Importa a biblioteca axios
import styles from './Cadastro.module.css'

const Cadastro = () => {
  const [nomeUsuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const handleCadastro = async (event) => {
    event.preventDefault();

    try {
      // Faz a chamada à API usando axios
      await axios.post('http://localhost:3001/signup', { nomeUsuario, email, senha });
      alert('Usuário cadastrado com sucesso!');
      window.location.href = "/telaLogin";
      // Redireciona o usuário para a página de login ou outra página apropriada
    } catch (error) {
      console.error('Erro no cadastro:', error);
      // Trate os erros, por exemplo, exibindo uma mensagem de erro para o usuário
      alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
    }
  };

  return (
    <div className={styles.caixaLogin}>
    <form onSubmit={handleCadastro} className={styles.barraLogin}>
    <h2 className={styles.titulo}>Cadastro</h2>
        <label className={styles.nome}>Usuario</label>
        <input
            type="text"
            value={nomeUsuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="usuario"
            required
        />

        <label className={styles.Email}>Email</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            Cadastrar
        </button>
    </form>
</div>
  );
};

export default Cadastro;
