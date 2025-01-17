import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import Logo1 from "../../assets/images/logo1.png"
import Logo2 from "../../assets/images/logo2.png"
import Logo3 from "../../assets/images/logo3.png"
const Hero = () => {
    const data=[
        {
            img:Logo1,
            title:"Danışıq klubu",
            description:"Həftədə 2 dəfə danışıq klubları."
        },
        {
            img:Logo2,
            title:"Müsahibəyə hazırlıq",
            description:"Müəllim tərəfindən müsahibələrə hazırlıq."
        },
        {
            img:Logo3,
            title:"Sənədlərin yığımı Klubu",
            description:"Komandamız tərəfindən sənədlərin yığımı."
        },
    ]
    return (
        <div className={styles.background}>
            <div className={styles.header}>

              <h2>Bizim dəyərlərimiz</h2>  
             
            </div>
                <div className={styles.datas}>
                    {data.map((item,index)=>(
                        <div key={index} className={styles.card}>
                            <img src={item.img} alt="logo" className={styles.logo}/>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <Link to="/about" className={styles.link}>Daha ətraflı</Link>  
                        </div>  
                   ))}
                </div>
        </div>
    )
}

export default Hero