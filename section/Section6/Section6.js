import React, { useState } from "react";
import styles from "./Section6.module.css";
import NamePlate from "../../components/NamePlate/NamePlate";
import Review from "../../components/Review/Review";

function Section6({ data, section_heading }) {
  const [active, setActive] = useState(1);

  const getReview = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].val == active) {
        return data[i].review;
      }
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{section_heading}</p>
      <div className={styles.section2}>
        <div className={styles.namePlate}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <NamePlate active={active} setActive={setActive} data={item} />
                <div className={styles.mobileReview}>
                  <Review review={item.review} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.review}>
          <Review review={getReview()} />
        </div>
      </div>
    </div>
  );
}

export default Section6;
