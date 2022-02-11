import React from 'react'
import styles from '../styles/Upsell.module.css'

const Upsell = () => {
  return (
    <div className='contenedor'>
      <div className={styles.upsell}>
          <div className={styles.upsell__texts}>
              <img src='/img/icon.svg' alt='Icon' className={styles.upsell__icon}/>
              <h2 className={styles.upsell__title}>Free NFT for early birds</h2>
              <p className={styles.upsell__info}>Sign up today and you'll get a free NFT when we launch.</p>
          </div>

          <img src='/img/nftsjuntos.svg' alt='NFT"s' className={styles.upsell__image}/>
      </div>
    </div>
  )
}

export default Upsell