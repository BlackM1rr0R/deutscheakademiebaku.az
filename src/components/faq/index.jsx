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
                {/* Tab 1 */}
                <div 
                    onClick={() => handleTabChange('materials')} 
                    className={`${styles.tab} ${activeTab === 'materials' ? styles.activeTab : ''}`}
                >
                    <div className={styles.quest}>
                        <h2>Alman dili dərslik pdfləri hardan tapa bilərəm?</h2>
                        <h1>{activeTab === 'materials' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'materials' && (
                        <div className={styles.content}>
                            <p>Materiallar haqqında məlumat:</p>
                            <a href='https://disk.yandex.ru/d/-nlGoKSOG9247Q' target='_blank' rel='noreferrer'>Bütün Materiallar</a>
                        </div>
                    )}
                </div>

                {/* Tab 2 */}
                <div 
                    onClick={() => handleTabChange('price')} 
                    className={`${styles.tab} ${activeTab === 'price' ? styles.activeTab : ''}`}
                >
                    <div className={styles.quest}>
                        <h2>Kurs və viza qiymətləri</h2>
                        <h1>{activeTab === 'price' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'price' && (
                        <div className={styles.content}>
                            <p>Qiymət haqqında məlumat:</p>
                            <Link to="/course">Bütün Xidmətlər</Link>
                        </div>
                    )}
                </div>

                {/* Tab 3 */}
                <div 
                    onClick={() => handleTabChange('visum')} 
                    className={`${styles.tab} ${activeTab === 'visum' ? styles.activeTab : ''}`}
                >
                    <div className={styles.quest}>
                        <h2>Hansı vizalar düzəldilir?</h2>
                        <h1>{activeTab === 'visum' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'visum' && (
                        <div className={styles.content}>
                            <p>Viza haqqında məlumat:</p>
                            <Link to="/service">Bütün Vizalar</Link>
                        </div>
                    )}
                </div>

                {/* Tab 4 */}
                <div 
                    onClick={() => handleTabChange('teacher')} 
                    className={`${styles.tab} ${activeTab === 'teacher' ? styles.activeTab : ''}`}
                >
                    <div className={styles.quest}>
                        <h2>Qarantiya verilirmi?</h2>
                        <h1>{activeTab === 'teacher' ? '-' : '+'}</h1>
                    </div>
                    {activeTab === 'teacher' && (
                        <div className={styles.content}>
                            <p>Haqqımızda oxuya bilərsiniz:</p>
                            <Link to="/about">Bütün Məlumatlar</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Faq;
