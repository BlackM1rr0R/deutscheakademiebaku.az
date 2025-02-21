import React from 'react'
import styles from './index.module.css'
import ScreenPhoto from '../../assets/images/screenphoto3.png'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <div className={styles.controlSide}>
            <div className={styles.leftSide}>
                <h2><h3>Alman</h3>dilini online və offline öyrənməyə unikal yanaşma</h2>
                <p>DAB-ın təhsilli və mükəmməl komandası ilə tez bir zamanda Almanyada yaşıya,işləyə və təhsil ala bilərsiniz</p>
                <a href="tel:+994993020102">Əlaqə saxla</a>

            </div>
            <div className={styles.rightSide}>
                <img src={ScreenPhoto} alt="" />
            </div>
        </div>
    )
}

export default Main