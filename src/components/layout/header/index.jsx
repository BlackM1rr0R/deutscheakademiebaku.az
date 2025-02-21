import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper/index";

import { Sling as Hamburger } from "hamburger-react";
import ScreenPhoto from '../../../assets/images/screen.png'
import DabLogo1 from '../../../assets/images/delogo1.png'

import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <Wrapper>
    <div className={styles.background}>
        <div className={styles.control}>
          <Link to={"/"} className={styles.images}>
        
            <img src={DabLogo1} alt="" />
          </Link>
          <div className={styles.services}>
            <Link to={"/course"}>Kurslarımız</Link>
            <Link to={"/service"}>Xidmətlərimiz</Link>
            <Link to={"/about"}>Haqqımızda</Link>
        
            <Link to={"/contact"}>Əlaqə</Link>
          </div>
       
          <Link className={styles.buttonClass}>Sosialda Biz</Link>
          <div className={styles.hamburger}>
            <Hamburger
              size={22}
              distance="lg"
              toggled={isMenuOpen}
              toggle={toggleMenu}
            />
          </div>
        </div>
        {isMenuOpen && (
          <div className={styles.overlay}>
            <div className={styles.services}>
            <Link to={"/course"}>Kurslarımız</Link>
            <Link to={"/service"}>Xidmətlərimiz</Link>
            <Link to={"/about"}>Haqqımızda</Link>
            <Link to={"/contact"}>Əlaqə</Link>
            </div>
            <Link className={styles.buttonClass}>Sosialda Biz</Link>
          </div>
        )}
         
    </div>
      </Wrapper>
  );
};

export default React.memo(Header);
