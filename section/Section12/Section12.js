import React from "react";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import styles from "./Section12.module.css";

function Section12({ data }) {

  return (
    <div className={styles.container}>
      <p className={styles.title}>Related Projects</p>
      <div className={styles.thumbnails}>
        {
          data.map((item, index) => (
            <Thumbnail src={item.src} title={item.title} key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default Section12;
