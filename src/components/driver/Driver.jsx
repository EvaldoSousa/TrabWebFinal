import React from 'react'
import styles from './Driver.module.css';
import Drive from '../../images/Component 4flor.png'
import { Link } from 'react-router-dom';

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={Drive} alt="/" />
        </div>
        <div>
          <h2>Realize uma ação que pode <span>mudar a vida de alguem</span></h2>
          <Link to='instituicoes'>
            <button>Conhecer</button>
          </Link>
        </div>
    </div>
  )
}

export default Driver