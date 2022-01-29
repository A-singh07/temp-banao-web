import React from 'react'
import Image from 'next/dist/client/image'
import styles from './Hero.module.css'
import landingBg from '../../../public/assets/images/old-hero-image-1.png';
import heroCircle from '../../../public/assets/images/hero-circle.svg'
import heroArrow from '../../../public/assets/images/hero-arrow.svg'
import Button from '@mui/material/Button';

const Hero = ({ heroText, heroSpan, btnText, setShowModal }) => {
  return (
    <section className={styles.heroContainer} id='heroContainer'>
      <>
        <Image
          src={landingBg}
          alt=''
          layout='responsive'
        >
        </Image>
      </>
      <div className={styles.heroWrapper}>
        <h1 className={styles.heroHeading}>{heroText} <span>{heroSpan}</span></h1>
        <Button variant="contained" disableElevation className={`${styles.heroButton} `} onClick={() => setShowModal(true)}>{btnText}</Button>
        <a href='#about' className={styles.heroDiagram}>
          <Image width={60} height={58} layout='intrinsic' src={heroCircle.src} alt="" />
          <Image height={71} width={10} layout='intrinsic' src={heroArrow.src} alt="" />
        </a>
      </div>
    </section>
  )
}

export default Hero
