import React, { useState } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Faq = () => {
    const [activeTab, setActiveTab] = useState('');

    const handleTabChange = (tab) => {
        setActiveTab((prevTab) => (prevTab === tab ? '' : tab));
    };

    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <h1>ƏLAVƏ SUALLARINIZ</h1>
                <h2>Suallara göz gəzdirin</h2>
            </div>
            <div className={styles.control}>
                <div 
                    onClick={() => handleTabChange('materials')} 
                    className={`${styles.tab} ${activeTab === 'materials' ? styles.activeButton : styles.button}`}
                >
                    <div className={styles.quest}>
                        <h2>Alman dili dərslik pdfləri hardan tapa bilərəm?</h2>
                        <h1>{activeTab === 'materials' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'materials' && 
                    <div className={styles.controlP}>

                    <p className={styles.activeP}>Materiallar haqqında məlumat:</p>
                    <a target='_blank' href='https://disk.yandex.ru/d/-nlGoKSOG9247Q' className={styles.activeP}>Bütün Materiallar</a>
                    </div>
                    }
                </div>

                {/* Other tabs with similar structure */}
                <div 
                    onClick={() => handleTabChange('price')} 
                    className={`${styles.tab} ${activeTab === 'price' ? styles.activeButton : styles.button}`}
                >
                    <div className={styles.quest}>
                        <h2>Kurs və viza qiymətləri</h2>
                        <h1>{activeTab === 'price' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'price' && 
                    <div className={styles.controlP}>

                    <p className={styles.activeP}>Qiymət haqqında məlumat:</p>
                    <Link to={"/course"} className={styles.activeP}>Bütün Xidmətlər</Link>
                    </div>
                    }
                </div>

                <div 
                    onClick={() => handleTabChange('visum')} 
                    className={`${styles.tab} ${activeTab === 'visum' ? styles.activeButton : styles.button}`}
                >
                    <div className={styles.quest}>
                        <h2>Hansı vizalar düzəldilir?</h2>
                        <h1>{activeTab === 'visum' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'visum' && 
                    <div className={styles.controlP}>

                    <p className={styles.activeP}>Viza haqqında məlumat:</p>
                    <Link to={"/service"} className={styles.activeP}>Bütün Vizalar</Link>
                    </div>
                    }
                </div>

                <div 
                    onClick={() => handleTabChange('teacher')} 
                    className={`${styles.tab} ${activeTab === 'teacher' ? styles.activeButton : styles.button}`}
                >
                    <div className={styles.quest}>
                        <h2>Qarantiya verilirmi?</h2>
                        <h1>{activeTab === 'teacher' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'teacher' && 
                    <div className={styles.controlP}>

                    <p className={styles.activeP}>Haqqımızda oxuya bilərsiniz:</p>
                    <Link className={styles.activeP} to={"/about"}>Bütün Məlumatlar</Link>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Faq;
