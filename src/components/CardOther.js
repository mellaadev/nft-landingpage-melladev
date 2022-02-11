import React from 'react'
import CardOtherCom from './CardOtherCom'
import styles from '../styles/CardOther.module.css'

const CardOther = () => {
  return (
    <div className={`contenedor ${styles.cardother}`}>
        <CardOtherCom />
    </div>
  )
}

export default CardOther