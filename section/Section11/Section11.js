import React from "react";
import Image from 'next/dist/client/image'
import Work from "../../components/Work/Work";
import styles from "./Section11.module.css";


function Section11({ work_data, images }) {

  return (
    <div className={styles.container}>
      <div className={styles.work}>
        <Work
          title={work_data.title}
          subtitle={work_data.subtitle}
          para={work_data.para}
        />
      </div>
      <div className={styles.figure}>
        <Image width={260} height={462} layout='intrinsic' src={images ? images[1] : ''} alt=''></Image>
        <Image width={260} height={462} layout='intrinsic' src={images ? images[0] : ''} alt=''></Image>
      </div>
    </div>
  );
}

export default Section11;
