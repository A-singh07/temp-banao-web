import React from 'react'
import Image from 'next/dist/client/image'
import styles from './About.module.css'
import Arrow from "../../../public/assets/images/arrow-right-small.svg";
import AboutImg from '../../../public/assets/images/old-about.png'

const About = ({ data }) => {
  // console.log(data);
  return (
    <section className={styles.aboutContainer} id='about'>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutHeading}>
            {data.heading}
          </h2>
          <div className={styles.aboutDescription}>
            {
              data.description.map((desc, index) => (
                <p className={styles.aboutPara} key={index}>{desc}</p>
              ))
            }
          </div>
          {/* <span className={styles.aboutLink}>{data.link}<Image width={24} height={24} layout='intrinsic' src={Arrow.src} alt="" /></span> */}
        </div>
        <div className={styles.aboutImage}>
          {
            data.data.map((item, i) => (
              <div key={i} className={`${styles.aboutBox} ${item.color ? styles.colorBg : ''}`}>
                {
                  item.color ?
                    (
                      <Image height={48} width={48} layout='intrinsic' src={item.img.src} alt="" />
                    ) : ('')
                }
                <p className={`${styles.boxData} ${item.color ? styles.whiteText : styles.colorText}`}>
                  {item.number}
                </p>
                <p className={`${styles.boxDescription} ${item.color ? styles.whiteText : ''}`}>
                  {item.text}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About
