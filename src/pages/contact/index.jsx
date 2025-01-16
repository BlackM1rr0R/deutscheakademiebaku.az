import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { Helmet } from "react-helmet-async";

const Contact = () => {

  const sections = [
    { title: "Bizim ilə əlaqə", description: "Working Hours: 9AM - 6PM" },
    { title: "Email", description: "hello@gmail.com, fax@gmail.com" },
    { title: "Phone", description: "+994507487048" }
  ];

  return (
    <>
      <Helmet>
        <title>Bizim ilə əlaqə | DEUTSCHE Akademie Baku</title>
        <meta
          name="description"
          content="ETERNAL Sağlık Hizmetleri ile iletişime geçmek için iletişim bilgilerimizi ve formumuzu kullanabilirsiniz."
        />
        <meta
          name="keywords"
          content="İletişim, ETERNAL Sağlık Hizmetleri, İletişim Formu, Sağlık Hizmetleri, Bize Ulaşın"
        />
        <link rel="canonical" href="https://www.eternal.com/iletisim" />
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d72032.50768923576!2d37.835549!3d55.653933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab6f25a8fc615%3A0x4002efd7d787ef83!2sRynok%20Sadovod!5e0!3m2!1str!2saz!4v1718706271950!5m2!1str!2saz"
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
