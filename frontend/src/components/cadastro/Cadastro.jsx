import React, { useState } from 'react';
import styles from './Cadastro.module.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';


// const Cadastro = () => {


//   return (
//     <div className={styles.caixaLogin}>

//       <form className={styles.barraLogin} onSubmit={handleCadastro}>
//       <div className={styles.titulo}>
//       <img src={Logo} alt='Logo' />
//         <h3>Cadastro</h3>
//       </div>
// 	        <label className={styles.nome}>
//           <h4>Usuario</h4>
//         </label>
//         <div className={styles.barraNome}>
//           <input
//             className={`${styles.pesquisa} ${styles.pesquisa1}`}
//             type="text"
//             value={usuario}
//             onChange={(e) => setUsuario(e.target.value)}
//             placeholder="usuario"
//             required
//           />
//         </div>
//         <label className={styles.Email}>
//           <h4>email</h4>
//         </label>
//         <div className={styles.barraEmail}>
//           <input
//             className={`${styles.pesquisa} ${styles.pesquisa1}`}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="email"
//             required
//           />
//         </div>
//         <label className={styles.senha}>
//           <h4>Senha</h4>
//         </label>
//         <div className={styles.barraSenha}>
//           <input
//             className={`${styles.pesquisa} ${styles.pesquisa1}`}
//             type="password"
//             value={senha}
//             onChange={(e) => setSenha(e.target.value)}
//             placeholder="senha"
//             required
//           />
//         </div>
//         <button className={`${styles.botaoL} ${styles.botaoL1}`} type="submit">
//           Cadastrar
//         </button>
//         <Link to="telaLogin" className={styles.irLogin}>
//           <h6>ir para login</h6>
//         </Link>
//       </form>
      
//     </div>
//   );
  
  
// }

// export default Cadastro;