import React, { useState } from 'react';
import styles from './index.module.css';

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
                    {activeTab === 'materials' && <p className={styles.activeP}>Materiallar haqqında məlumat:https://disk.yandex.ru/d/vwoHSvQpVHWrNg</p>}
                </div>

                {/* Other tabs with similar structure */}
                <div 
                    onClick={() => handleTabChange('price')} 
                    className={`${styles.tab} ${activeTab === 'price' ? styles.activeButton : styles.button}`}
                >
                    <div className={styles.quest}>
                        <h2>Qiymət</h2>
                        <h1>{activeTab === 'price' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'price' && <p>Qiymət haqqında məlumat</p>}
                </div>

                <div 
                    onClick={() => handleTabChange('visum')} 
                    className={`${styles.tab} ${activeTab === 'visum' ? styles.activeButton : styles.button}`}
                >
                    <div className={styles.quest}>
                        <h2>Viza</h2>
                        <h1>{activeTab === 'visum' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'visum' && <p>Viza haqqında məlumat</p>}
                </div>

                <div 
                    onClick={() => handleTabChange('teacher')} 
                    className={`${styles.tab} ${activeTab === 'teacher' ? styles.activeButton : styles.button}`}
                >
                    <div className={styles.quest}>
                        <h2>Müəllim</h2>
                        <h1>{activeTab === 'teacher' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'teacher' && <p>Müəllim haqqında məlumat</p>}
                </div>
            </div>
        </div>
    );
};

export default Faq;
