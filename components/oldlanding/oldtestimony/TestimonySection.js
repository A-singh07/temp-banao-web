import React, { useState, useEffect } from 'react'
import Image from 'next/dist/client/image'
import styles from './TestimonialSection.module.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';


const TestimonySection = ({ data }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 705 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const CustomDot = ({
    index,
    onClick,
    active,
  }) => {
    return (
      <li>
        <button
          onClick={e => {
            onClick();
            e.preventDefault();
          }}
          className={`carouselDots ${active ? styles.active : ''}`}
          data-index={index}
        >
        </button>
      </li>
    );
  };

  return (
    <section className={styles.testimonialSectionContainer}>
      <div className={styles.testimonialSectionHeading}>
        <h4>{data.Text}</h4>
        <span>{data.span}</span>
      </div>
      <div className={styles.testimonialCarouselContainer}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          customDot={<CustomDot />}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          arrows={false}
          transitionDuration={100}
        >
          {data.testimonies.map((item, index) => (
            <div key={index} className={styles.testimonyCard}>
              <Image layout='intrinsic' width={96} height={96} src={item.img.src} alt="" />
              <p className={styles.testimonyText}>
                {item.text}
              </p>
              <div className={styles.userInfo}>
                <p className={styles.userName}>
                  {item.username}
                </p>
                <p className={styles.userDes}>
                  {item.userinfo}
                </p>
              </div>
            </div>
          ))
          }
        </Carousel>
      </div>

    </section>
  )
}

export default TestimonySection
