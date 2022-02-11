import React from 'react'
import styles from '../styles/Card.module.css'

const Card = ({ imgPath, name, precio, id, timeLeft, bgColor}) => {
  return (
    <div className={styles.card}>
        <img src={imgPath} alt={name} className={styles.card__image}/>

        <div style={{background: bgColor}} className={styles.card__texts}>
            <div className={styles.card__first}>
                <p className={styles.card__series}>Gloop Series</p>
                <p className={styles.card__bid}>Top Bid</p>
            </div>

            <div className={styles.card__second}>
                <p className={styles.card__name}>{name}</p>
                <div className={styles.card__price}>
                    <img src='/img/eth.svg' alt='ETH' className={styles.card__ethicon}/>
                    <p className={styles.card__pricetext}>{precio} ETH</p>
                </div>
            </div>

            <div className={styles.card__third}>
                <p className={styles.card__id}>#{id}</p>
                <p className={styles.card__timeleft}>{timeLeft}</p>
            </div>
        </div>
    </div>
  )
}

export default Card