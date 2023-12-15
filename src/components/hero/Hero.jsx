import React from 'react';
import styles from './Hero.module.css';
import Search from './search';

const Hero = () => {
  return (
    <div className={styles.hero}>
          <div className={styles.text_bg}>
            <p>
              <span>Lugares maravilhosos esperando por sua ajuda</span>
          </p>
          </div>
      <Search/>
    </div>
  );
};

export default Hero;
