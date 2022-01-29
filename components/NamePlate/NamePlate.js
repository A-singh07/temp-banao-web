import React from "react";
import Image from 'next/dist/client/image'
import styles from "./NamePlate.module.css";

function NamePlate({ active = false, setActive = null, data }) {
  return (
    <div
      onClick={() => {
        setActive(data.val);
      }}
      className={styles.namePlate + " " + (active == data.val && styles.active)}
    >

      <Image width={56} height={56} layout='intrinsic' src={data.src} alt='' />

      <div className={styles.info}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.work}>{data.work}</p>
      </div>
    </div>
  );
}

export default NamePlate;
