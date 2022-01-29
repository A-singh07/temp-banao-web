import React from "react";
import Image from 'next/dist/client/image'
import styles from "./CarouselItem.module.css";

function CarouselItem({ logo, title, para }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.logo} width={48} height={48} layout='intrinsic' src={logo} alt=""></Image>
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.details}>{para}</p>
    </div>
  );
}

export default CarouselItem;
