import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { Helmet } from "react-helmet-async";
import Deutsche1 from "../../assets/images/deutsche1.png"
import Deutsche2 from "../../assets/images/deutsche2.png"
import Deutsche4 from "../../assets/images/deutsche4.png"
import Deutsche5 from "../../assets/images/deutsche5.png"
const About = () => {
  return (
    <>
     <Helmet>
        <title>Haqqımızda | Deutsche Akademie Baku </title>
        <meta
          name="description"
          content="Deutsche Akademie Baku haqqında məlumatlar."
        />
        <meta
          name="keywords"
          content="Haqqımızda, Deutsche Akademie Baku"
        />
        <link rel="canonical" href="https://www.eternal.com/hakkimizda" />
      </Helmet>
      <Wrapper>
        <div className={styles.aboutText}>
          <h2>Haqqımızda</h2>
        </div>
        <div className={styles.background}>
          <div className={styles.control}>
            <div className={styles.leftside}>
              <div className={styles.header}>
                <h2><h1>DAB</h1> İle Tanış Olun</h2>
              </div>
              <div className={styles.profilpicture}>
                <img src={Deutsche1} alt="" />
              </div>
              <div className={styles.experience}>
                <h2>Hədəflərimiz</h2>
                <p>
                Biz, Deutsche Akademie Baku olaraq, Alman dili kursları və viza dəstəyi xidmətləri təqdim edirik. Komandamız, təcrübəli müəllimlər və məsləhətçilərdən ibarətdir, hər biri öz sahəsində ixtisaslaşmışdır. Məqsədimiz, tələbələrimizin dil öyrənmə prosesini sürətləndirmək və vizalarla bağlı bütün prosedurlarını asanlaşdırmaqdır.
                </p>
              </div>
            </div>
            <div className={styles.rightside}>
              <div className={styles.education}>
                <h2>Məmnunniyətimiz</h2>
                <p>

                Bizim üçün ən önəmli prioritet tələbələrimizin məmnuniyyətidir. Deutsche Akademie Baku olaraq, göstərdiyimiz xidmətlərin keyfiyyətini və tələbələrimizin əldə etdiyi nəticələri davamlı olaraq izləyirik. Məqsədimiz, hər bir tələbəmizin dil öyrənmə prosesində özünü rahat və dəstəkli hiss etməsini təmin etməkdir.
                </p>
              </div>
              <div className={styles.diplom}>
                <h2>Güvənliyimiz</h2>
                <p>
                Bizim üçün məmnuniyyət qədər vacib olan digər bir amil güvəndir. Deutsche Akademie Baku olaraq, tələbələrimizin və müştərilərimizin bizə etibar etməsi üçün hər zaman güvənli və şəffaf xidmət göstəririk. Tədris prosesindən tutmuş viza dəstəyi xidmətlərinə qədər hər mərhələdə təhlükəsizlik və etibarlılığı təmin etmək bizim əsas vəzifələrimizdəndir.
                </p>
              </div>
              <div className={styles.sertifikat}>
                <img src={Deutsche2} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.workPerson}>
            <div className={styles.controlWorkPerson}>
              <div className={styles.leftWork}>
                <h1>Deutsche Akademie Baku İdarə Heyəti</h1>
                <h2>Gücümüzün,xidmətlərimizə bənzərsiz dəyər qatan əməkdaşlarımızdan gəldiyini bilirik. Lider komandamız, Alman dili tədrisi və viza dəstəyi sahəsində keyfiyyəti və əlçatanlığı artırmaq üçün strateji addımlar ataraq, tələbələrimizin ehtiyaclarına ən yaxşı şəkildə cavab verməyi hədəfləyir. Əməkdaşlarımızın fədakar səyləri və peşəkar təcrübələri sayəsində tələbələrimizə ən yaxşı təhsil və dəstək xidmətlərini təqdim edirik.</h2>
              </div>
              <div className={styles.rightWork}>
                <div className={styles.controlRightWork}>
                  {/* <img src={DoctorPhoto1} alt="" /> */}
                  <div className={styles.nameRight}>
                    <h2>Sənani B.</h2>
                    <h3>CEO</h3>

                  </div>
                </div>
                <hr />
                <div className={styles.controlRightWork}>
                  {/* <img src={DoctorPhoto} alt="" /> */}
                  <div className={styles.nameRight}>
                    <h2>Elçin A.</h2>
                    <h3>CEO Köməkçisi</h3>

                  </div>
                </div>
                <hr />
                <div className={styles.controlRightWork}>
                  {/* <img src={DoctorPhoto2} alt="" /> */}
                  <div className={styles.nameRight}>
                    <h2>Tofiq A.</h2>
                    <h3>İcraçı Direktor</h3>

                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <img src={Deutsche4} alt="" />
            <img src={Deutsche5} alt="" />
          </div>
          <div className={styles.hospitalText}>
            <h2>Sizləri Almanyada ixtisaslı bir fərd olarağ görmək üçün buradayıq.</h2>
        
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default React.memo(About);
