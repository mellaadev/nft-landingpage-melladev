import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={`contenedor ${styles.header}`}>
        <div className={styles.barra}>
            <div className={styles.barra__logo}>
                <a href='/'>
                  <img src='/img/logo.svg' alt='Logo NFTLANDING'/>
                </a>
            </div>

            <nav className={styles.navegacion}>
                <a href='#!' className={styles.navegacion__enlace}>Features</a>
                <a href='#!' className={styles.navegacion__enlace}>About</a>
                <a href='#!' className={styles.navegacion__enlace}>Launch</a>
                <a href='#!' className={`${styles.navegacion__enlace} ${styles.navegacion__enlacemod}`}>Sign Up</a>
            </nav>

            <img src='/img/menu.svg' className={styles.barra__hamburger} alt='Hamburguer Menu'/>
        </div>
    </header>
  )
}

export default Header