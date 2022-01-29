import React from "react";
import Counts from "../../components/Counts/Counts";
import Work from "../../components/Work/Work";
import styles from "./Section8.module.css";
function Section8({ work_data }) {

  return (
    <div className={styles.container}>
      <Work
        title={work_data.title}
        introPara={work_data.introPara}
        subtitle={work_data.subtitle}
        para={work_data.para}
      />
    </div>
  );
}

export default Section8;
