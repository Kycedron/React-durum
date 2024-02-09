import React from 'react'

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
      <div className={styles.root}>
          <h1 >
            <span>☹️</span>
            <br />
            Ничего не найденo :((
            </h1>
            <p className={styles.description}>
                к сожалению данная страница не найдена в нашем интернет магазине
                </p>
      </div>
    
  )
}
 
export default NotFoundBlock