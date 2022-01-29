import { React, useRef, useState, useEffect } from "react";
import styles from "./Section4.module.css";
import Image from 'next/dist/client/image'
import Arrow from "../../public/assets/images/CarouselArrow.svg";
import CarouselItem from "../../components/CarouselItem/CarouselItem";

function Section4({ data }) {
  const carousel = useRef(null);
  const carouselItem = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [max, setMax] = useState(0);


  const scrollLeft = () => {
    if (carousel.current) {
      carousel.current.scrollBy({
        left: -carouselItem.current.clientWidth,
        behavior: "smooth",
      });
      setScrollPos(scrollPos - carouselItem.current.clientWidth);
    }
  };
  const scrollRight = () => {
    if (carousel.current) {
      carousel.current.scrollBy({
        left: carouselItem.current.clientWidth,
        behavior: "smooth",
      });
      setScrollPos(carouselItem.current.clientWidth + scrollPos);
    }
  };
  useEffect(() => {
    if (scrollPos < 0) {
      setScrollPos(0);
    }
    if (
      scrollPos >
      (carousel.current.childElementCount - 1) *
      carouselItem.current.clientWidth
    ) {
      setScrollPos(
        (carousel.current.childElementCount - 1) *
        carouselItem.current.clientWidth
      );
    }
    setMax(
      (carousel.current.childElementCount - 1) *
      carouselItem.current.clientWidth
    );
  }, [scrollPos]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Our Process</p>
        <div className={styles.arrowContainer}>
          <div
            className={
              styles.arrowLeft + " " + (scrollPos == 0 && styles.inactive)
            }
            onClick={scrollLeft}
          >
            <Image width={48} height={48} layout='intrinsic' src={Arrow.src} alt=""></Image>
          </div>
          <div
            className={
              styles.arrowRight + " " + (scrollPos == max && styles.inactive)
            }
            onClick={scrollRight}
          >
            <Image width={48} height={48} layout='intrinsic' src={Arrow.src} alt=""></Image>
          </div>
        </div>
      </div>
      <div className={styles.carousel} ref={carousel}>
        {data.map((row, index) => (
          <div
            className={styles.carouselSection}
            ref={carouselItem}
            key={index}
          >
            {row.map((item, index) => (
              <CarouselItem
                key={index}
                logo={item.logo}
                title={item.title}
                para={item.para}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section4;
