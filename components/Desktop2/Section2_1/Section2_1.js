import React from "react";
import Image from 'next/dist/client/image'
import styles from "./Section2_1.module.css";
import Arrow from "../../../public/assets/images/arrow-right.svg";
function Section2_1({ title, description, link, setShowModal }) {

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <div className={styles.section1}>
      <h3 className={styles.title}>
        {title}
      </h3>
      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
      {link && (
        <div className={styles.link} onClick={() => handleClick()}>
          <p>{link}</p>
          <Image width={24} height={24} layout='intrinsic' src={Arrow.src} alt=''></Image>
        </div>
      )}
    </div>
  );
}

export default Section2_1;
