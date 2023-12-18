import React from 'react';
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';


const Search = () => {
    return(
        <form>
        <div className={styles.text}>
          <input
            className={styles.text_input}
            type='text'
            placeholder='Digite aqui'
          />
        </div>
        <div className={styles.search_btn}>
          <AiOutlineSearch size={25} className={styles.icon} />
        </div>
      </form>
    )

}

export default Search;