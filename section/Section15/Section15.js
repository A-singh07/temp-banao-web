import React from "react";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import styles from "./Section15.module.css";

function Section15({ data }) {

  return (
    <div className={styles.container}>
      <p className={styles.title}>Latest Blogs</p>
      <div className={styles.thumbnails}>
        {data.map((item, index) => (
          <Thumbnail
            key={index}
            src={item.src}
            title={item.title}
            textLeft={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Section15;
