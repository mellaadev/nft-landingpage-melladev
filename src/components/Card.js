import React from 'react'
import styles from '../styles/Card.module.css'

const Card = ({ nombre, infoBgColor, imgPath }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={imgPath} alt={nombre}/>
      </div>
      <div style={{background: infoBgColor}} className={styles.card__info}>
        <div className={styles.card__layout}>
          <div className={styles.card__first}>
            <p className={styles.card__series}>Gloop Series</p>
            <p className={styles.card__bid}>Top bid</p>
          </div>

          <div className={styles.card__second}>
            <p className={styles.card__title}>{nombre}</p>
            <div className={styles.card__priceinfo}>
              <img src='/img/eth.svg' alt='ETH Icon' className={styles.card__ethicon}/>
              <p className={styles.card__price}>2.99 ETH</p>
            </div>
          </div>

          <div className={styles.card__third}>
            <p className={styles.card__id}>#12983</p>
            <p className={styles.card__timeleft}>1 day left</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card