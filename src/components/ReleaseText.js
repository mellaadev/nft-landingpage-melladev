import React from 'react'
import styles from '../styles/ReleaseText.module.css'

const ReleaseText = () => {
  return (
    <div className={styles.releasetext}>
        <h2 className={styles.releasetext__heading}>Initial Release 4/11</h2>
        <div className={styles.releasetext__texts}>
          <p className={styles.releasetext__text}>We have released four limited edition NFTs early which can be bid on via <span  className={styles.releasetext__textmod}>OpenSea</span>.</p>
          <p  className={styles.releasetext__text}>These will be the only four of these NFTs we ever make, so be sure not to miss out!</p>
          <p  className={styles.releasetext__text}>50% of proceeds go to charity.</p>
          <p  className={styles.releasetext__check}>Check them out</p>
        </div>
    </div>
  )
}

export default ReleaseText