import React from 'react'
import Card from './Card'
import styles from '../styles/Auction.module.css'

const Auction = () => {
  return (
    <main className={`contenedor ${styles.auction}`}>
        <div className={styles.auction__content}>
          <h2 className={styles.auction__heading}>LE Super Rare Auction</h2>
          <p className={styles.auction__subheading}>We have released four limited edition NFTs early which can be bid on via <span className={styles.auction__subheadingmod}>OpenSea</span>.</p>

          <div className={styles.auction__grid}>
            <Card 
              imgPath='/img/nft1.png'
              name='Purple Man'
              precio={2.99}
              id={12983}
              timeLeft='1 day left'
              bgColor='#EEEEEE'
            />
             <Card 
              imgPath='/img/nft2.png'
              name='Beige'
              precio={2.99}
              id={12983}
              timeLeft='1 day left'
              bgColor='#EEEEEE'
            />
             <Card 
              imgPath='/img/nft3.png'
              name='Red'
              precio={2.99}
              id={12983}
              timeLeft='1 day left'
              bgColor='#EEEEEE'
            />
             <Card 
              imgPath='/img/nft4.png'
              name='Green'
              precio={2.99}
              id={12983}
              timeLeft='1 day left'
              bgColor='#EEEEEE'
            />
          </div>
        </div>
    </main>
  )
}

export default Auction