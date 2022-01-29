import React from "react";
import Image from 'next/dist/client/image'
import styles from "./VideoNamePlate.module.css";
function VideoNamePlate({ data }) {
  return (
    <div className={styles.container}>
      <Image width={120} height={120} layout='intrinsic' src={data.src} alt=""></Image>
      <div className={styles.details}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.work}>{data.work}</p>
      </div>
    </div>
  );
}

export default VideoNamePlate;
