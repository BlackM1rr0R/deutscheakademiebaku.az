import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { Helmet } from "react-helmet-async";

const Contact = () => {

  const sections = [
    { title: "Bizim ilə əlaqə", description: "İş saatları: 09:00 - 18:00" },
    { title: "Email", description: "deutscheakademiebaku@gmail.com" },
    { title: "Telefon", description: "AZE:+994993020102, DE:+491777464647" }
  ];

  return (
    <>
      <Helmet>
        <title>Bizim ilə əlaqə | DEUTSCHE Akademie Baku</title>
        <meta
          name="description"
          content="Elaqe ucun biz."
        />
        <meta
          name="keywords"
          content="Bizim ile elaqe saxlayin"
        />
        
      </Helmet>

      <Wrapper>
        <div className={styles.background}>
          <div className={styles.headerContact}>
            <h2>Əlaqə</h2>
          </div>
          <div className={styles.control}>
            <div className={styles.leftside}>
              {sections.map((section, index) => (
                <div key={index} className={`${styles.border} ${styles.contactSection}`}>
                  <div className={styles.contact}>
                    {/* Add appropriate icons based on the section */}
                  </div>
                  <div className={styles.contactadress}>
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.rightside}>
              <iframe
                className={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6076.443355934593!2d49.83290587690272!3d40.403939674404974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030878a4e451229%3A0x5db5f75494a57d6!2s50C%20Mammad%20Araz%2C%20Baku!5e0!3m2!1str!2saz!4v1741616885596!5m2!1str!2saz"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default React.memo(Contact);
