import React from 'react'
import styles from './index.module.css'
import ScreenPhoto from '../../assets/images/screen.png'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <div className={styles.controlSide}>
            <div className={styles.leftSide}>
                <h2>A <h3>unique</h3> approach to learning foreign languages online</h2>
                <p>Learn at your own pace,with lifetime access on mobile and desktop</p>
                <Link>Əlaqə saxla</Link>
            </div>
            <div className={styles.rightSide}>
                <img src={ScreenPhoto} alt="" />
            </div>
        </div>
    )
}

export default Main