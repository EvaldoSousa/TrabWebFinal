// Instituicao.jsx

import React from 'react';
import styles from './Instituicao.module.css';

const Instituicao = ({ titulo, quemSomos, oQueFazemos, porqueFazemos, ondeFazemos, contato, fotoSrc, fotoAlt }) => {
  return (
    <div className={styles.container}>
      
      <div className={styles.tituLogo}>
        <h1 className={styles.titulo}>{titulo}</h1>

        <div className={styles.logoContainer}>
            <img src={fotoSrc} alt={fotoAlt} className={styles.logo} />
        </div>
      </div>
      {/* Parágrafos abaixo */}
      <div className={styles.paragrafo}>
        <h2>Quem Somos</h2>
        <p>{quemSomos}</p>
      </div>

      <div className={styles.paragrafo}>
        <h2>O Que Fazemos</h2>
        <p>{oQueFazemos}</p>
      </div>

      <div className={styles.paragrafo}>
        <h2>Porque Fazemos</h2>
        <p>{porqueFazemos}</p>
      </div>

      <div className={styles.paragrafo}>
        <h2>Onde Fazemos</h2>
        <p>{ondeFazemos}</p>
      </div>

      <div className={styles.paragrafo}>
        <h2>Contato</h2>
        <p>{contato}</p>
      </div>
        <button>Quero doar</button>
    </div>
  );
};

export default Instituicao;
