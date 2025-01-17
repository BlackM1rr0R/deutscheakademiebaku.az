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
            desc: "Bu kursda aldığım təhsil sayəsində Almaniyada iş tapmaqda böyük bir üstünlük qazandım. Alman dili biliklərim və peşə hazırlığım mənə burada iş mühitinə tez uyğunlaşmağa və uğurla çalışmağa imkan verdi. Kursun verdiyi biliklər və müəllimlərin dəstəyi, mənim karyeramın bu mərhələsinə çatmağımda əvəzsiz oldu. İndi Almaniyada işləyirəm və burada qazandığım təcrübə gələcəkdə daha böyük uğurlar üçün bir əsas yaradır. Bu imkana görə kursa sonsuz təşəkkürlər!"
        },
        {
            img: StudentsPhoto,
            title: "Senani Almaniya",
            stuffe: "B2 course student",
            desc: "Bu kursu çox bəyəndim. Müəllimlər hər bir tələbəyə dəyər verərək, onların inkişafına xüsusi diqqət ayırdılar. Alman dili təhsilimi burada tamamladım və nəticələrdən çox məmnun qaldım. Hazırda Almaniyada Ausbildung proqramına qatılmışam və bu uğurumda kursun rolu böyükdür. Kursa göstərdikləri dəstəyə görə təşəkkür edirəm."
        },
        {
            img: StudentsPhoto,
            title: "Senani Almaniya",
            stuffe: "B2 course student",
            desc: "Bu kursu çox bəyəndim. Müəllimlər hər bir tələbəyə dəyər verərək, onların inkişafına xüsusi diqqət ayırdılar. Alman dili təhsilimi burada tamamladım və nəticələrdən çox məmnun qaldım. Hazırda Almaniyada Ausbildung proqramına qatılmışam və bu uğurumda kursun rolu böyükdür. Kursa göstərdikləri dəstəyə görə təşəkkür edirəm."
        },
        {
            img: StudentsPhoto,
            title: "Senani Almaniya",
            stuffe: "B2 course student",
            desc: "Bu kursu çox bəyəndim. Müəllimlər hər bir tələbəyə dəyər verərək, onların inkişafına xüsusi diqqət ayırdılar. Alman dili təhsilimi burada tamamladım və nəticələrdən çox məmnun qaldım. Hazırda Almaniyada Ausbildung proqramına qatılmışam və bu uğurumda kursun rolu böyükdür. Kursa göstərdikləri dəstəyə görə təşəkkür edirəm."
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

                                        <img className={styles.image1} src={item.img} alt="" />
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