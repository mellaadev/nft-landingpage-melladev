import React from 'react'
import styles from '../styles/Brands.module.css'

const Brands = () => {
  return (
    <div className={`contenedor ${styles.brands}`}>
      <div className={styles.brands__grid}>
        <img src='/img/1brands.svg' alt='Brand Logo' />
        <img src='/img/2brands.svg' alt='Brand Logo' />
        <img src='/img/3brands.svg' alt='Brand Logo' />
        <img src='/img/4brands.svg' alt='Brand Logo' />
        <img src='/img/5brands.svg' alt='Brand Logo' />
      </div>
    </div>
  )
}

export default Brands