import React, { useState } from 'react'
import styles from './index.module.css'
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
const Scroll = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
      <>
   
      <div className={styles.background}>
        <div className={styles.header}>
          <h2>Uğurlarımız haqqında</h2>
        </div>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className={styles.control}>
            <div className={styles.border1}>
              <div className={styles.bordertext1}>
                <h2>{counterOn && <CountUp duration={4} delay={0} end={4} />}</h2>
                <p>İllik Professionallıq</p>
              </div>
            </div>
            <div className={styles.border2}>
              <div className={styles.bordertext2}>
                <h2>{counterOn && <CountUp duration={4} delay={0} end={450} />}+</h2>
                <p>Tələbələrimiz</p>
              </div>
            </div>
            <div className={styles.border3}>
              <div className={styles.bordertext3}>
                <h2>{counterOn && <CountUp duration={4} delay={0} end={242} />}+</h2>
                <p>Qəbulumuz</p>
              </div>
            </div>
            <div className={styles.border4}>
              <div className={styles.bordertext4}>
                <h2>{counterOn && <CountUp duration={4} delay={0} end={2} />}+</h2>
                <p>Adresslərimiz</p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      </>
  
    );
}

export default Scroll