import React, { useState } from 'react';
import styles from './Flor.module.css';
import Drive from '../../images/Component 4flor.png'


const Flor = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // Redirecionar se o usuário estiver logado
      // Pode redirecionar ou executar qualquer outra lógica desejada
      alert('Você está sendo redirecionado...');
    } else {
      // Exibir mensagem se o usuário não estiver logado
      setShowMessage(true);
    }
  };
  return (
    <div className={styles.flor}>
        <div className={styles.left}>
            <img src={Drive} alt="/" />
        </div>
        <div>
          <h2>Realize uma ação que pode <span>mudar a vida de alguem</span></h2>
          <button onClick={handleButtonClick}>Conhecer</button>
      {showMessage && (
        <span>Você precisa estar logado para fazer isso.</span>
      )}
        </div>
    </div>
  )
}

export default Flor