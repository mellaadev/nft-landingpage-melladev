import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={`contenedor ${styles.hero}`}>
      <div className={styles.hero__grid}>
        <div className={styles.hero__texts}>
            <p className={styles.hero__pretitle}>LAUNCHING SOON</p>
            <h1 className={styles.hero__heading}>An NFT like no other</h1>
            <p className={styles.hero__info}>Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live.</p>
            <a href='#!' className={styles.hero__button}>Sign Up</a>
        </div>

        <div className={styles.hero__nftbox}>
            <img src='/img/nft.svg' alt='NFT' className={styles.hero__nft}/>
        </div>
      </div>
    </div>
  )
}

export default Hero