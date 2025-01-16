import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper/index";


import { Link } from "react-router-dom";
const Footer = () => {
  return (
          <Wrapper>
    <div className={styles.background}>
        <div className={styles.control}>
          <div className={styles.line1}>
           
            <h2>DEUTSCHE AKADEMIE BAKU</h2>
            <p>
              Alman dilini bizim ilə öyrənin.
            </p>
          </div>
          <div className={styles.line2}>
            <h2>Səhifələr</h2>
            <ul>
              <Link to={"/"}>Ana Səhifə</Link>
              <Link to={"/idiopatik"}>Kurslarımız</Link>
              <Link to={"/kifoz"}>Xidmətlərimiz</Link>
              <Link to={"/about"}>Haqqımızda</Link>
              <Link to={"/gallery"}>Əlaqə</Link>
              <Link to={"/contact"}>Sosialda Biz</Link>
            </ul>
          </div>
          <div className={styles.line2}>
            <h2>Xidmətlər</h2>
            <ul>
              <Link to={"/details/15"}>İş vizası</Link>
              <Link to={"/details/16"}>Ausbildung</Link>
              <Link to={"/details/17"}>Təhsil vizası</Link>
              <Link to={"/details/18"}>Turist vizası</Link>
               <Link to={"/serumlar"}>Visa dəstəyi</Link>
              <Link to={"/details/19"}>SSS</Link>

            </ul>
          </div>
          <div className={styles.line3}>
            <h2>Ünvan</h2>
            <ul>
              <li>Kesle qesebesi</li>
              <a href="tel:0552 518 96 54">0507487048</a>

            </ul>
            
          </div>
        </div>
    </div>
      </Wrapper>
  );
};

export default React.memo(Footer);
