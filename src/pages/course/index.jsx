import React from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/UI/wrapper'
import WorkIcon from '../../assets/images/workicon.png'
import StudentIcon from '../../assets/images/studenticon.png'
import AusbildungIcon from '../../assets/images/ausbildungicon.png'
import FamilyIcon from '../../assets/images/familyicon.png'
import Weiterbildung from '../../assets/images/weiterbildungicon.png'
import TouristIcon from '../../assets/images/tourist.png'
import APlus from '../../assets/images/a+.png'
import BPlus from '../../assets/images/b+.png'
import CPlus from '../../assets/images/c+.png'
import { VerifiedIcon } from '../../icons'
import { Helmet } from 'react-helmet-async'
const Course = () => {
    const data=[
        {
            img:APlus,
            title:"A1-A2 Səviyyə",
            service:"Dərsliklər kurs tərəfindən hədiyyə",
            interview:"Yeni başlayanlar üçün dərsliklər",
            dokument:"Ali Təhsilli müəllimlərimiz ilə 4 ay",
            support:"Online və Offline dərslər",
            hous:"Grup və Fərdi dərslər",
            price:"200 Azn",
        },
        {
            img:BPlus,
            title:"B1-B2 Səviyyə",
            service:"Dərsliklər kurs tərəfindən hədiyyə",
            interview:"Orta səviyyə üçün mükəmməl dərsliklər",
            dokument:"Ali Təhsilli müəllimlərimiz ilə 5 ay",
            support:"Online və Offline dərslər",
            hous:"Grup və Fərdi dərslər",
            price:"300 Azn",
        },
        {
            img:CPlus,
            title:"C1-C2 Səviyyə",
            service:"Dərsliklər kurs tərəfindən hədiyyə",
            interview:"Almanca əla danışanlar üçün dərsliklər",
            dokument:"Ali Təhsilli müəllimlərimiz ilə 5 ay",
            support:"Online və Offline dərslər",
            hous:"Grup və Fərdi dərslər",
            price:"400 Azn",
        },
        {
            img:WorkIcon,
            title:"İş Vizası",
            service:"Müqavilənin alınması",
            interview:"İş yeri ilə müsahibə",
            dokument:"Sənədlərin yığılması",
            support:"Viza dəstəyi",
            hous:"Ev ilə təmin olunma",
            price:"2500 Euro",
        },
        {
            img:StudentIcon,
            title:"Təhsil Vizası",
            service:"Müqavilənin alınması",
            interview:"Universitet ilə müsahibə",
            dokument:"Sənədlərin yığılması",
            support:"Viza dəstəyi",
            hous:"Ev ilə təmin olunma yoxdur.",
            price:"1500 Euro",
        },
        {
            img:AusbildungIcon,
            title:"Ausbildung Vizası",
            service:"Müqavilənin alınması",
            interview:"Ausbildung şirkəti ilə müsahibə",
            dokument:"Sənədlərin yığılması",
            support:"Viza dəstəyi",
            hous:"Ev ilə təmin olunma",
            price:"1500 Euro",
        },
        {
            img:FamilyIcon,
            title:"Ailə Birləşimi Vizası",
            service:"Sertifikatın alınması",
            interview:"Almaniya ilə razılıq",
            dokument:"Sənədlərin yığılması",
            support:"Viza dəstəyi",
            hous:"Ev ilə təmin olunma yoxdur.",
            price:"1700 Euro",
        },
        {
            img:Weiterbildung,
            title:"Praktikant Vizası",
            service:"Müqavilənin alınması",
            interview:"Praktikum şirkəti ilə müsahibə",
            dokument:"Sənədlərin yığılması",
            support:"Viza dəstəyi",
            hous:"Ev ilə təmin olunma",
            price:"2000 Euro",
        },
        {
            img:TouristIcon,
            title:"Turist Vizası",
            service:"Səfirliyə hazırlıq",
            interview:"Schengen vizanın alınmağı",
            dokument:"Sənədlərin yığılması",
            support:"Viza dəstəyi",
            hous:"Ev ilə təmin olunma yoxdur.",
            price:"500 Euro",
        },
    ]
  return (
    <>
         <Helmet>
            <title>Kurslarımız | Deutsche Akademie Baku </title>
            <meta
              name="description"
              content="Deutsche Akademie Baku kursları haqqında məlumatlar."
            />
            <meta
              name="keywords"
              content="Kurslarımız, Deutsche Akademie Baku"
            />
            <link rel="canonical" href="https://www.eternal.com/hakkimizda" />
          </Helmet>
    <div className={styles.background}>
            <Wrapper>
                <div className={styles.control}>
                    {data?.map((item,index)=>(
                        <div key={index} className={styles.controlBorder}>

                            <img src={item.img} alt="" />
                            <h1>{item.title}</h1>
                            <h2><VerifiedIcon/>{item.interview}</h2>
                            <h2><VerifiedIcon/>{item.service}</h2>
                            <h2><VerifiedIcon/>{item.dokument}</h2>
                            <h2><VerifiedIcon/>{item.support}</h2>
                            <h2><VerifiedIcon/>{item.hous}</h2>
                            <button>{item.price}</button>
                        </div>
                    ))}
                  
                </div>
            </Wrapper>
    </div>
    </>

  )
}

export default Course