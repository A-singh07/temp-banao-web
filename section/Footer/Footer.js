import React from "react";
import Image from 'next/dist/client/image'
import Link from "next/link";
import FooterList from "../../components/FooterList/FooterList";
import facebook from "../../public/assets/images/facebook.svg";
import linkedin from "../../public/assets/images/linkedin.svg";
import dribbble from "../../public/assets/images/dribbble.svg";
import behance from "../../public/assets/images/behance.svg";
import Atg from "../../public/assets/images/ATG.svg";
import instagram from "../../public/assets/images/instagram.svg";
import banao from "../../public/assets/images/BanaoLogo.png";
import styles from "./Footer.module.css";
function Footer() {
  const data = [
    {
      title: "About",
      list: ["About Us", "Our team", "Join the Team", "Contact Us"],
    },
    {
      title: "Services",
      list: [
        "iOS app development",
        "Android app development",
        "User interface design",
        "User experience design",
        "Python development",
        "Blockchain development",
        "PHP development",
        "PHP development",
        "Social media marketing",
      ],
    },
    {
      title: "Technologies",
      list: ["Healthcare apps", "Real state apps", "On demand apps", "Event apps"],
    },
    {
      title: "Work",
      list: ["HappiMynd", "Whiteboard", "Across The Globe", "Hooliv"],
    },
    {
      title: "Resources",
      list: ["Blogs", "Portfolio"],
    },
  ];
  const footerSocialLinks = [
    {
      link: 'https://www.atg.world/banao.tech',
      image: Atg.src,
    },
    {
      link: 'https://www.linkedin.com/company/banao-tech/?originalSubdomain=in',
      image: linkedin.src,
    },
    {
      link: 'https://www.instagram.com/banao.tech/?hl=en',
      image: instagram.src,
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Image width={222} height={81} layout='intrinsic' src={banao.src} alt='' />
        <div className={styles.socials}>
          {
            footerSocialLinks.map((item, i) => (
              <div className={styles.footerSocialLinks} key={i}>
                <a href={item.link}>
                  <><Image width={40} height={40} layout='intrinsic' src={item.image} alt=''></Image></>
                </a>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.listContainer}>
        {data.map((item, index) => {
          return <FooterList key={index} title={item.title} list={item.list} />;
        })}
      </div>
      <div className={styles.copyright}>
        <p className={styles.rights}>© 2021 banao-tech. All right reserved.</p>
        <div className={styles.links}>
          <p>Sitemap</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
