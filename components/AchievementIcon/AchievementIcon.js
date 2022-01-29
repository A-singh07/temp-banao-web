import React from "react";
import Image from 'next/dist/client/image'
import styles from "./AchievementIcon.module.css";
function AchievementIcon({ icon, downloads, platform }) {
  return (
    <div className={styles.container}>
      <>
        <Image width={56} height={56} layout='intrinsic' src={icon} alt=""></Image>
      </>
      <p>{downloads}</p>
      <p>{platform}</p>
    </div>
  );
}

export default AchievementIcon;
