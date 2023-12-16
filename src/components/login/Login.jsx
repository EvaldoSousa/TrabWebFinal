import React from 'react';

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();

    const usuarioEmail = event.target.querySelector(".barraNome input").value;
    const senha = event.target.querySelector(".barraSenha input").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find((usuario) => {
      return (usuario.email === usuarioEmail || usuario.usuario === usuarioEmail) && usuario.senha === senha;
    });

    if (usuarioEncontrado) {
      alert("Login bem-sucedido!");
      // Redireciona o usuário para a página "pagina-logada.html" após o login
      window.location.href = "/";
    } else {
      alert("Usuário/email ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <div className="caixaLogin">
        <h1>Login</h1>
      <div className="logo logo6"></div>
      <form className="barraLogin" onSubmit={handleLogin}>
        <label className="nome"><h4>Usuario/email</h4></label>
        <div className="barraNome">
          <input className="pesquisa pesquisa1" type="email" name="" placeholder="email" required />
        </div>
        <label className="senha"><h4>Senha</h4></label>
        <div className="barraSenha">
          <input className="pesquisa pesquisa1" type="password" name="" placeholder="senha" required />
        </div>
        <button className="botaoL botaoL1" type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;