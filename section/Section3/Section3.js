import React from "react";
import styles from "./Section3.module.css";
import Section3_1 from "../../components/Desktop3/Section3_1/Section3_1";
import Section3_2 from "../../components/Desktop3/Section3_2/Section3_2";
import Icon1 from "../../public/assets/images/itemlogo.svg";
import Icon2 from "../../public/assets/images/itemlogo(1).svg";
import Icon3 from "../../public/assets/images/itemlogo(2).svg";
import Icon4 from "../../public/assets/images/itemlogo(3).svg";
import Icon5 from "../../public/assets/images/itemlogo(4).svg";
import Icon6 from "../../public/assets/images/itemlogo(5).svg";
function Section3({ data, reverse = false, setShowModal }) {
  const { data_1, data_2 } = data;
  return (
    <div className={styles.Desktop3 + " " + (reverse && styles.reverse)}>
      <div className={styles.section1}>
        <Section3_1
          title={data_1.title}
          description={data_1.description}
          sub_description={data_1.sub_description}
          setShowModal={setShowModal}
        />
      </div>

      <div className={styles.section2}>
        <Section3_2 data={data_2} />
      </div>
    </div>
  );
}

export default Section3;
