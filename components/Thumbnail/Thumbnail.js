import React from "react";
import Image from 'next/dist/client/image'
import styles from "./Thumbnail.module.css";
function Thumbnail({ src, title, addition, textLeft }) {
  return (
    <div className={styles.container}>
      <Image height={300} width={300} layout='intrinsic' src={src} alt=''></Image>
      <p className={`${styles.title} ${textLeft ? styles.text_left : ''}`}>{title}</p>
      <p className={styles.addition}>{addition}</p>
    </div>
  );
}

export default Thumbnail;
