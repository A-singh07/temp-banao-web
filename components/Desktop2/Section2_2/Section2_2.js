import React from "react";
import Card2 from "./Card2/Card2";
import styles from "./Section2_2.module.css";

export default function Section2_2({ data }) {
  return (
    <div className={styles.Section2}>
      {data.map((item, index) => {
        return (
          <Card2
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            list={item.list}
          />
        );
      })}
      <div className={styles.gradient2} />
    </div>
  );
}
