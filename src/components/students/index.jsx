import React from 'react'
import styles from './index.module.css'
import StudentsPhoto from "../../assets/images/students.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
const Students = () => {
    const data = [
        {
            img: StudentsPhoto,
            title: "Senani Almaniya",
            stuffe: "B2 course student",
            desc: "Men bu kursu cox beyendim mellimler cox deyer verdi zad.Almanca oyrendim bitirdim ve cox beyendim.Tesekkur edirem bu kursa,Men bu kursu cox beyendim mellimler cox deyer verdi zad.Almanca oyrendim bitirdim ve cox beyendim.Tesekkur edirem bu kursa,Men bu kursu cox beyendim mellimler cox deyer verdi zad.Almanca oyrendim bitirdim ve cox beyendim.Tesekkur edirem bu kursa"
        },
        {
            img: StudentsPhoto,
            title: "Senani Almaniya",
            stuffe: "B2 course student",
            desc: "Men bu kursu cox beyendim mellimler cox deyer verdi zad.Almanca oyrendim bitirdim ve cox beyendim.Tesekkur edirem bu kursa,Men bu kursu cox beyendim mellimler cox deyer verdi zad.Almanca oyrendim bitirdim ve cox beyendim.Tesekkur edirem bu kursa,Men bu kursu cox beyendim mellimler cox deyer verdi zad.Almanca oyrendim bitirdim ve cox beyendim.Tesekkur edirem bu kursa"
        },
    ]
    return (
        <div className={styles.background}>
            <div className={styles.header}>

                <h1>TOP STUDIYING</h1>
                <h2>Tələbələrimizin sözləri</h2>
            </div>
            <div className={styles.control}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    className={styles.price}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1,
                        },
                        768: {
                            spaceBetween: 15,
                            slidesPerView: 2.5,
                        },
                        992: {
                            spaceBetween: 20,
                            slidesPerView: 1,
                        },
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.border}>
                                <div className={styles.images}>
                                    <div className={styles.leftSide}>

                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className={styles.rightSide}>

                                        <h1>{item.title}</h1>
                                        <h2>{item.stuffe}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Students