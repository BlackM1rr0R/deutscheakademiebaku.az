import React from 'react'
import styles from './index.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Tofig from '../../assets/images/tofig.jpeg'
import Emil from '../../assets/images/emil.jpg'
import Kamran from '../../assets/images/kamran.jpeg'
import Elchin from '../../assets/images/elchin.jpeg'
import Aliya from '../../assets/images/aliya.jpeg'

import { Pagination, Scrollbar,Autoplay } from 'swiper/modules';
const Teacher = () => {
    const data = [
        {
            img: Tofig,
            title: "Tofig Abdullayev",
            language: "İcraçı Direktor"
        },
        {
            img: Kamran,
            title: "Kamran İsmayılzadə",
            language: "Direktor"
        },
        {
            img: Aliya,
            title: "Aliyə Abilova",
            language: "SMM"
        },
        {
            img: Elchin,
            title: "Elçin Abdullayev",
            language: "CEO Köməkçisi"
        },
        {
            img: Emil,
            title: "Emil Əhmədov",
            language: "Mühasibatçı"
        },
    ]
    return (
        <div className={styles.background}>
            <h4 className={styles.teacher}>DAB Ailəsinin <h4 className={styles.german}>Üzvləri ilə</h4> <h4 className={styles.learn}>Tanış olun!</h4></h4>
            <div className={styles.control}>
                <Swiper
                   modules={[Pagination,Autoplay]}
                   className={styles.price}
                   spaceBetween={20}
                   slidesPerView={3}
                   autoplay={{ delay: 4000, disableOnInteraction: false }}
                   pagination={{ clickable: true }}
           
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1.3,
                        },
                        768: {
                            spaceBetween: 15,
                            slidesPerView: 2.5,
                        },
                        992: {
                            spaceBetween: 20,
                            slidesPerView: 3.5,
                        },
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.border}>
                                <div className={styles.images}>
                                    <img src={item.img} alt="" />
                                    <h1>{item.title}</h1>
                                    <h2>{item.language}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Teacher