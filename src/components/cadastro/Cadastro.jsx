import React, { useState } from 'react';

const Cadastro = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (event) => {
    event.preventDefault();

    // Verifica se já existem dados no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se já existe um usuário com o mesmo email cadastrado
    const usuarioExistente = usuarios.find((user) => {
      return user.email === email;
    });

    if (usuarioExistente) {
      alert('Este email já está cadastrado.');
      return;
    }

    // Cria um objeto com os dados do novo usuário
    const novoUsuario = {
      usuario,
      email,
      senha,
    };

    // Adiciona o novo usuário ao array de usuários
    usuarios.push(novoUsuario);

    // Atualiza os dados no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Limpa os campos do formulário após o cadastro
    setUsuario('');
    setEmail('');
    setSenha('');

    // Redireciona o usuário para a página "teLogin.html" após o cadastro bem-sucedido
    window.location.href = 'telaLogin';
  };

  return (
    <div className="caixaLogin">
      <div className="titulo">
        <h2>Cadastro</h2>
      </div>
      <form className="barraLogin" onSubmit={handleCadastro}>
        <label className="nome">
          <h4>Usuario</h4>
        </label>
        <div className="barraNome">
          <input
            className="pesquisa pesquisa1"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="usuario"
            required
          />
        </div>
        <label className="Email">
          <h4>email</h4>
        </label>
        <div className="barraEmail">
          <input
            className="pesquisa pesquisa1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
        </div>
        <label className="senha">
          <h4>Senha</h4>
        </label>
        <div className="barraSenha">
          <input
            className="pesquisa pesquisa1"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="senha"
            required
          />
        </div>
        <button className="botaoL botaoL1" type="submit">
          Cadastrar
        </button>
        <a className="irLogin" href="telaLogin">
          <h6>ir para login</h6>
        </a>
      </form>
    </div>
  );
}

export default Cadastro;