import React from 'react'
import Logo from '../../images/logo.png'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img src={Logo} alt="" />
            <p>Todos os direitos resevardos</p>
          <div>
            <p>gomescorna@gmail.com</p>
            <p>(94)4002-8922</p>
            <p>Folha 31 Quadra 07 Lote 24 D</p>
          </div>
        </div>

    </div>
  )
}

export default Footer