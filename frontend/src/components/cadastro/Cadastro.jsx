import React, { useState } from 'react';
import axios from 'axios'; // Importa a biblioteca axios

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
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <label>Usuario</label>
        <input
          type="text"
          value={nomeUsuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="usuario"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />

        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="senha"
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
