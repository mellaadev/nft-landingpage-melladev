import React from 'react'
import styles from '../styles/LastNFT.module.css'

const LastNFT = () => {
  return (
    <div className={`contenedor ${styles.lastnft}`}>
        <div className={styles.lastnft__grid}>
            <div className={styles.lastnft__texts}>
                <p className={styles.lastnft__pretitle}>LAUNCHING SOON</p>
                <h2 className={styles.lastnft__heading}>An NFT like no other</h2>
                <p className={styles.lastnft__info}>Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live.</p>
                <a href='#!' className={styles.lastnft__button}>Sign Up</a>
            </div>

            <div className={styles.lastnft__boximg}>
                <img src='/img/nft6.png' alt='NFT Green Girl' className={styles.lastnft__image}/>
                <div className={styles.lastnft__circle}>{/* Esto es un circulo */}</div>
                <div className={styles.lastnft__circle2}>{/* Esto es un circulo */}</div>
            </div>
        </div>
    </div>
  )
}

export default LastNFT