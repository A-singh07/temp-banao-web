import React from 'react'
import { useState } from 'react'
import Image from 'next/dist/client/image'
import styles from './Services.module.css'
import arrowDownOrange from '../../../public/assets/images/arrow-drop-down.svg'
import arrowDownWhite from '../../../public/assets/images/arrow-drop-down-white.svg'
import Button from '@mui/material/Button';

const Services = ({ data }) => {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className={styles.serviceConatiner}>
      <div className={styles.serviceWrapper}>
        <h3 className={styles.sectionHeading}>{data.heading}</h3>
        <div className={styles.cardContainer}>
          {
            data.cardData.map((item, index) => (
              <div key={index} className={styles.card}>
                <Image width={80} height={80} layout='intrinsic' src={item.image.src} alt="" />
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>
                    {item.title}
                  </h4>
                  <p className={styles.cardDescription}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          }
          {
            showAll ? (
              <>
                {
                  data.hiddenData.map((item, index) => (
                    <div key={index} className={styles.card}>
                      <Image width={80} height={80} layout='intrinsic' src={item.image.src} alt="" />
                      <div className={styles.cardContent}>
                        <h4 className={styles.cardTitle}>
                          {item.title}
                        </h4>
                        <p className={styles.cardDescription}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </>
            ) : ('')
          }
        </div>
        {
          showAll ? ('') : (
            <Button className={styles.moreButton} onClick={() => setShowAll(true)}>
              Show more
              <Image layout='intrinsic' width={28} height={28} src={arrowDownOrange.src} alt="" />
              <Image layout='intrinsic' width={28} height={28} src={arrowDownWhite.src} alt='' />
            </Button>
          )
        }
      </div>
    </section>
  )
}

export default Services
