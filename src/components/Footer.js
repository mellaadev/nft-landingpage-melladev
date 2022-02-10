import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={`contenedor ${styles.footer}`}>
      <div className={styles.footer__moreinfo}>
        <div className={styles.footer__brand}>
          <img src='/img/logo.svg' alt='logo NFTLANDING'/>
          <p className={styles.footer__exclusive}>Exclusive NFT Collection</p>
          <div className={styles.footer__brandrrss}>
            <img src='/img/facebook.svg' alt='facebook'/>
            <img src='/img/twitter.svg' alt='twitter'/>
            <img src='/img/instagram.svg' alt='instagram'/>
            <img src='/img/tiktok.svg' alt='tiktok'/>
          </div>
        </div>
        <div className={styles.footer__blocks}>
          <div className={styles.footer__block}>
            <h3 className={styles.footer__listitle}>About</h3>
            <ul className={styles.footer__list}>
              <li className={styles.footer__listitem}>About</li>
              <li className={styles.footer__listitem}>Terms</li>
              <li className={styles.footer__listitem}>Legal</li>
            </ul>
          </div>

          <div className={styles.footer__block}>
            <h3 className={styles.footer__listitle}>NFT</h3>
            <ul className={styles.footer__list}>
              <li className={styles.footer__listitem}>OpenSea</li>
              <li className={styles.footer__listitem}>Maker</li>
              <li className={styles.footer__listitem}>Learn</li>
            </ul>
          </div>

          <div className={styles.footer__block}>
            <h3 className={styles.footer__listitle}>Contact</h3>
            <ul className={styles.footer__list}>
              <li className={styles.footer__listitem}>Press</li>
              <li className={styles.footer__listitem}>Support</li>
            </ul>
          </div>

          <div className={styles.footer__block}>
            <h3 className={styles.footer__listitle}>Social</h3>
            <ul className={styles.footer__list}>
              <li className={styles.footer__listitem}>Twitter</li>
              <li className={styles.footer__listitem}>Instagram</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer__copycontent}>
        <p className={styles.footer__copy}>&copy; Copyright 2022 NFTLanding</p>
        <p className={styles.footer__launching}>Launching August 2022</p>
      </div>
    </footer>
  )
}

export default Footer