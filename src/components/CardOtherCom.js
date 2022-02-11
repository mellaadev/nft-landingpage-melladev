import React from 'react'
import styles from '../styles/CardOtherCom.module.css'

const CardOtherCom = () => {
  return (
    <div className={styles.cardothercom}>
      <div className={styles.cardothercom__cardcontent}>
        <div className={styles.cardothercom__flex}>
          <img src='/img/eth.svg' alt='ETH Icon' className={styles.cardothercom__image}/>
          <h2 className={styles.cardothercom__heading}>An NFT like no other</h2>
          <p className={styles.cardothercom__text}>Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.</p>
          <p className={styles.cardothercom__text}>Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release of our new NFT.</p>
        </div>
      </div>
      
      <div className={styles.cardothercom__cardcontent2}>
        <div className={styles.cardothercom__flex}>
          <img src='/img/eth2.svg' alt='ETH Icon' className={styles.cardothercom__image}/>
          <h2 className={styles.cardothercom__heading}>An NFT like no other</h2>
          <p className={styles.cardothercom__text}>Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.</p>
          <p className={styles.cardothercom__text}>Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release of our new NFT.</p>
        </div>
      </div>
    </div>
  )
}

export default CardOtherCom