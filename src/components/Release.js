import React from 'react'
import ReleaseText from './ReleaseText'
import Card from './Card'
import styles from '../styles/Release.module.css'

const Release = () => {
  return (
    <div className={`contenedor ${styles.release}`}>
        <div className={`${styles.release__contentbox} ${styles.release__bgorange}`}>
            
            <div className={styles.release__boximg}>
                <img src='/img/nftgrande.png' alt='NFT' className={styles.release__image}/>
                <div className={styles.release__meta}>
                    <p className={styles.release__series}>Gloop Series</p>
                    <p className={styles.release__name}>Red Man</p>
                    <p className={styles.release__id}>#12983</p>
                </div>
            </div>

            <div className={styles.release__separador}></div>
            

            <div className={styles.release__firstext}>
                <ReleaseText />
            </div>

            <div className={styles.release__circle}>{/* Esto es un circulo */}</div>
        </div>
        
        <div className={`${styles.release__contentbox} ${styles.release__bggreen}`}>
            <div className={styles.release__boxcard}>
                <Card 
                    imgPath='/img/nft5.png'
                    name='Lady'
                    precio={3.95}
                    id={1094}
                    timeLeft='2 days left'
                    bgColor='#111111'
                />
            </div>

            <ReleaseText />
        </div>
    </div>
  )
}

export default Release