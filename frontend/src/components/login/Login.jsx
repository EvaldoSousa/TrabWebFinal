import React, { useState } from 'react';
import styles from './Login.module.css'; // Substitua pelo caminho real do seu arquivo CSS
import Logo from '../../images/logo.png';

const Login = () => {
  const [usuarioEmail, setUsuarioEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(
      (usuario) => (usuario.email === usuarioEmail || usuario.usuario === usuarioEmail) && usuario.senha === senha
    );

    if (usuarioEncontrado) {
      alert("Login bem-sucedido!");
      // Redireciona o usuário para a página "pagina-logada.html" após o login
      window.location.href = "/";
    } else {
      alert("Usuário/email ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <div className={`${styles.logo} ${styles.logo6}`}></div>
      </div>
      <div>
        <h1>Login</h1>
        <form className={styles.barraLogin} onSubmit={handleLogin}>
          <label className={styles.nome}><h4>Usuario/email</h4></label>
          <div className={styles.barraNome}>
            <input
              className={`${styles.pesquisa} ${styles.pesquisa1}`}
              type="email"
              value={usuarioEmail}
              onChange={(e) => setUsuarioEmail(e.target.value)}
              placeholder="email"
              required
            />
          </div>
          <label className={styles.senha}><h4>Senha</h4></label>
          <div className={styles.barraSenha}>
            <input
              className={`${styles.pesquisa} ${styles.pesquisa1}`}
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="senha"
              required
            />
          </div>
          <button className={`${styles.botaoL} ${styles.botaoL1}`} type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
