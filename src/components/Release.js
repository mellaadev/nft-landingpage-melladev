import React from 'react'
import ReleaseText from './ReleaseText'
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
            <div className={styles.releasecard}>
                <img src='/img/nft5.png' alt='NFT' className={styles.releasecard__image}/>

                <div className={styles.releasecard__texts}>
                    <div className={styles.releasecard__first}>
                        <p className={styles.releasecard__series}>Gloop Series</p>
                        <p className={styles.releasecard__bid}>Top Bid</p>
                    </div>

                    <div className={styles.releasecard__second}>
                        <p className={styles.releasecard__name}>Lady</p>
                        <div className={styles.releasecard__price}>
                            <img src='/img/eth.svg' alt='ETH' className={styles.releasecard__ethicon}/>
                            <p className={styles.releasecard__pricetext}>3.95 ETH</p>
                        </div>
                    </div>

                    <div className={styles.releasecard__third}>
                        <p className={styles.releasecard__id}>#1094</p>
                        <p className={styles.releasecard__timeleft}>2 days left</p>
                    </div>
                </div>
            </div>

            <div className={styles.release__secondtext}>
                <ReleaseText />
            </div>

            <div className={styles.release__circle2}>{/* Esto es un circulo */}</div>
        </div>
    </div>
  )
}

export default Release