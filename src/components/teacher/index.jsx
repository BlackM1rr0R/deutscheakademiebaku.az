import React from 'react'
import styles from './index.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Teacher1 from '../../assets/images/teacher1.png'
import Teacher2 from '../../assets/images/teacher2.png'
import Teacher3 from '../../assets/images/teacher3.png'
import { Pagination, Scrollbar,Autoplay } from 'swiper/modules';
const Teacher = () => {
    const data = [
        {
            img: Teacher2,
            title: "Samir Abdullayev",
            language: "Alman Dili"
        },
        {
            img: Teacher2,
            title: "Samir Abdullayev",
            language: "Alman Dili"
        },
        {
            img: Teacher3,
            title: "Samir Abdullayev",
            language: "Alman Dili"
        },
        {
            img: Teacher3,
            title: "Samir Abdullayev",
            language: "Alman Dili"
        },
        {
            img: Teacher3,
            title: "Samir Abdullayev",
            language: "Alman Dili"
        },
        {
            img: Teacher3,
            title: "Samir Abdullayev",
            language: "Alman Dili"
        },
    ]
    return (
        <div className={styles.background}>
            <h4 className={styles.teacher}>Müəllimlərimiz ilə <h4 className={styles.german}>Alman dilini</h4> <h4 className={styles.learn}>öyrənə bilərsiniz!</h4></h4>
            <div className={styles.control}>
                <Swiper
                   modules={[Pagination,Autoplay]}
                   className={styles.price}
                   spaceBetween={20}
                   slidesPerView={3}
                   autoplay={{ delay: 2000, disableOnInteraction: false }}
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