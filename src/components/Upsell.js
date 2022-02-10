import React from 'react'
import styles from '../styles/Upsell.module.css'
import Card from './Card'

const Upsell = () => {
  return (
    <div className={`contenedor ${styles.upsell}`}>
        <div className={styles.upsell__texts}>
            <img src='/img/icon.svg' alt='Icon' className={styles.upsell__icon}/>
            <h2 className={styles.upsell__title}>Free NFT for early birds</h2>
            <p className={styles.upsell__info}>Sign up today and you'll get a free NFT when we launch.</p>
        </div>

        <div className={styles.upsell__cards}>
            <div className={styles.upsell__card}>
                <Card 
                    nombre='Purple Man'
                    infoBgColor='#EEEEEE'
                    imgPath='/img/nft1.png'
                />
            </div>
            <div className={styles.upsell__card}>
                <Card 
                    nombre='Lady'
                    infoBgColor='#111111'
                    imgPath='/img/nft5.png'
                />
            </div>
        </div>
    </div>
  )
}

export default Upsell