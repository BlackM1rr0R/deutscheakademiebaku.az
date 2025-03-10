import React from 'react'
import styles from './index.module.css'
import StudentsPhoto from "../../assets/images/students.png"
import TofigViza from "../../assets/images/tofigviza.jpeg"
import NiyaziViza from "../../assets/images/niyaziviza.jpeg"
import SamayaViza from "../../assets/images/samayaviza.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
const Students = () => {
    const data = [
        {
            img: TofigViza,
            title: "Tofig Abdullayev",
            stuffe: "B2 course student",
            desc: "Deutsche Akademie Baku sayəsində Almaniyada Ausbildung tapdım və orada işləyirəm. Alman dili biliklərim və peşə təlimim mənə iş mühitinə tez uyğunlaşmağa və uğurla çalışmağa imkan verdi. Ausbildung zamanı əldə etdiyim biliklər və təlimçilərin dəstəyi mənim karyeramın bu mərhələsinə çatmağımda əvəzsiz oldu. Bu imkana görə Deutsche Akademie Baku'ya sonsuz təşəkkürlər!"
        },
        {
            img: NiyaziViza,
            title: "Niyazi Pirəliyev",
            stuffe: "B1 course student",
            desc: "Bu kursu çox bəyəndim. Müəllimlər hər bir tələbəyə dəyər verərək, onların inkişafına xüsusi diqqət ayırdılar. Alman dili təhsilimi burada tamamladım və nəticələrdən çox məmnun qaldım. Hazırda Almaniyada LKW Fahrer olaraq işləyirəm və bu uğurumda kursun rolu böyükdür. Kursa göstərdikləri dəstəyə görə təşəkkür edirəm."
        },
        {
            img: SamayaViza,
            title: "Fərəcova Səmayə",
            stuffe: "B2 course student",
            desc: "İlk öncə burada Alman dili öyrəndim və dil biliyimi çox yaxşı səviyyəyə gətirdim. Müəllimlər hər bir tələbəyə xüsusi diqqət yetirərək, onların inkişafına dəstək oldular. Daha sonra şirkət məni Almaniyaya Studienvorbereitung və Sprachkurse proqramlarına göndərdi. Bu uğurumda kursun rolu çox böyükdür. Hər şey üçün kursa təşəkkür edirəm!"
        }
    
    ]
    return (
        <div className={styles.background}>
            <div className={styles.header}>

                <h1>TOP STUDIYING</h1>
                <h2>Viza və Sertifikat alan tələbələrimizin sözləri</h2>
            </div>
            <div className={styles.control}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    className={styles.price}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
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