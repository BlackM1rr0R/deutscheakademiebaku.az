import React from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/UI/wrapper'

const Service = () => {
    return (
        <div className={styles.background}>
            <Wrapper>

                <div className={styles.control}>
                    <div className={styles.headerText}>
                        <h2>
                            <h1>Vizani</h1>Sizə Gətiririk
                        </h2>
                    </div>
                    <div className={styles.boxOne}>
                        <div className={styles.leftBox}>
                            <h1>Xidmətlərimiz</h1>
                            <div className={styles.controlLeftBox}>
                                <div className={styles.leftBoxText}>
                                    <div className={styles.leftBoxHeader}>
                                        <h2>01.</h2>
                                    </div>
                                    <div className={styles.leftBoxBottom}>
                                        <h2>Ausbildung Vizası</h2>
                                        <p>
                                            Almaniyada peşə təhsili almaq istəyən şəxslərə verilir. Bu viza vasitəsilə, namizədlər Almaniyada seçdikləri bir peşə sahəsində həm təcrübi, həm də nəzəri biliklər əldə edə bilərlər. Peşə təhsili proqramları müxtəlif sahələrdə mövcuddur və tələbələrə öz ixtisaslarına uyğun bilik və bacarıqlar qazanmaq imkanı verir.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.leftBoxSvg}>
                                   
                                </div>
                            </div>
                        </div>
                        <div className={styles.controlMiddleBox}>
                            <div className={styles.middleBoxText}>
                                <div className={styles.middleBoxHeader}>
                                    <h2>02.</h2>
                                </div>
                                <div className={styles.middleBoxBottom}>
                                    <h2>İş Vizası</h2>
                                    <p>
                                    Almaniyada peşə təhsili almaq istəyən şəxslərə verilir. Bu viza vasitəsilə, namizədlər Almaniyada seçdikləri bir peşə sahəsində həm təcrübi, həm də nəzəri biliklər əldə edə bilərlər. Peşə təhsili proqramları müxtəlif sahələrdə mövcuddur və tələbələrə öz ixtisaslarına uyğun bilik və bacarıqlar qazanmaq imkanı verir.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.controlRightBox}>
                            <div className={styles.rightBoxText}>
                                <div className={styles.rightBoxHeader}>
                                    <h2>03.</h2>
                                </div>
                                <div className={styles.rightBoxBottom}>
                                    <h2>Təhsil Vizası</h2>
                                    <p>
                                    Almaniyada ali təhsil almaq istəyən xarici tələbələrə verilən viza növüdür. Bu viza, Almaniyanın universitetlərində və digər təhsil müəssisələrində təhsil almaq üçün tələb olunan hüquqi statusu təmin edir. Təhsil vizası ilə tələbələr təhsillərini davam etdirmək və Almaniyada yaşamaq imkanına malik olurlar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxTwo}>
                        <div className={styles.controlForBox}>
                            <div className={styles.forBox}>
                                <div className={styles.forBoxHeader}>
                                    <h2>04.</h2>
                                </div>
                                <div className={styles.forBoxBottom}>
                                    <h2>Ailə Birləşimi Vizası</h2>
                                    <p>
                                    Almaniyada yaşayan bir ailə üzvünün yanına köçmək istəyən xarici vətəndaşlara verilən viza növüdür. Bu viza ailə üzvlərinin birlikdə yaşaması üçün hüquqi zəmin yaradır və onların Almaniyada yaşayaraq ailə həyatlarını davam etdirməsinə imkan verir.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.controlFiveBox}>
                            <div className={styles.fiveBoxText}>
                                <div className={styles.fiveBoxHeader}>
                                    <h2>05.</h2>
                                </div>
                                <div className={styles.fiveBoxBottom}>
                                    <h2>Weiterbildung Vizası</h2>
                                    <p>
                                    Almaniyada peşəkar inkişaf və ya ixtisasartırma kurslarında iştirak etmək istəyən xarici vətəndaşlara verilən viza növüdür. Bu viza, şəxslərin öz sahələrində əlavə bilik və bacarıqlar qazanmasını təmin edir və onların karyera imkanlarını artırır.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.fiveBoxSvg}>
                                {/* <img src={AmbulanceSvg} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxThree}>
                        <div className={styles.controlFiveBox}>
                            <div className={styles.fiveBoxText}>
                                <div className={styles.fiveBoxHeader}>
                                    <h2>06.</h2>
                                </div>
                                <div className={styles.fiveBoxBottom}>
                                    <h2>Turist Vizası</h2>
                                    <p>
                                    Qısa müddətlik səfərlər üçün Almaniyaya səyahət etmək istəyən xarici vətəndaşlara verilən viza növüdür. Bu viza, turistlərə Almaniyanın tarixi yerlərini, mədəniyyətini, təbiətini və şəhərlərini kəşf etmək üçün imkan yaradır.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.fiveBoxSvg}>
                                {/* <img src={Patient} alt="" /> */}
                            </div>
                        </div>
                        <div className={styles.controlForBox}>
                            <div className={styles.forBox}>
                                <div className={styles.forBoxHeader}>
                                    <h2>07.</h2>
                                </div>
                                <div className={styles.forBoxBottom}>
                                    <h2>Şans Kartı Vizası</h2>
                                    <p>
                                    Almaniyada iş imkanlarını araşdırmaq və iş tapmaq istəyən xarici vətəndaşlara verilən xüsusi bir viza növüdür. Bu viza, şəxslərə Almaniyada müəyyən müddət ərzində yaşamaq və iş bazarında uyğun iş tapmaq imkanı verir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

        </div>
    )
}

export default Service