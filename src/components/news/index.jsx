import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './index.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper/modules';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expanded, setExpanded] = useState({}); // Açıklamaları kontrol etmek için state

    const API_URL = "https://gnews.io/api/v4/top-headlines?country=de&category=general&apikey=cd1bc6a2c84774feda51205d5b32855c";

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(API_URL);
                console.log(response.data);

                setArticles(response.data.articles || []);
                setLoading(false);
            } catch (error) {
                console.error("API Hatası:", error);
                setError("Haberler yüklenirken hata oluştu!");
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    // Açıklama aç/kapat fonksiyonu
    const toggleExpand = (index) => {
        setExpanded(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
       <div className={styles.background}>

    
         <h1>Neue Nachrichten</h1>
      
        <div className={styles['news-container']}>
           

            {loading && <p className={styles.loading}>Yükleniyor...</p>}
            {error && <p className={styles.error}>{error}</p>}

            {!loading && !error && articles.length > 0 ? (
                <Swiper
                    modules={[Pagination, Autoplay]}
                    className={styles.price}
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { spaceBetween: 10, slidesPerView: 1.3 },
                        768: { spaceBetween: 15, slidesPerView: 2.5 },
                        992: { spaceBetween: 20, slidesPerView: 3.5 },
                    }}
                >
                    {articles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles['swiper-slide']}>
                                <h3 className={styles.title}>{article.title}</h3>
                                <p className={`${styles.description} ${expanded[index] ? styles.expanded : ''}`}>
                                    {article.description}
                                </p>
                                {article.description && article.description.length > 100 && (
                                    <button className={styles.readMore} onClick={() => toggleExpand(index)}>
                                        {expanded[index] ? "Weniger lesen" : "Mehr lesen"}
                                    </button>
                                )}
                                <img
                                    src={article.image || "placeholder_image_url.jpg"}
                                    alt={article.title}
                                />
                                <p className={styles.source}>
                                    <strong>Kanale:</strong> {article.source?.name || "Kaynak Yok"}
                                </p>
                                <p className={styles.date}>
                                    <strong>Datum:</strong> {new Date(article.publishedAt || article.pubDate).toLocaleString()}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                !loading && <p>Haber bulunamadı.</p>
            )}
        </div>
        </div>
     
    );
};

export default News;
