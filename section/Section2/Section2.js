import React from "react";
import Section2_2 from "../../components/Desktop2/Section2_2/Section2_2";
import Section2_1 from "../../components/Desktop2/Section2_1/Section2_1";
import styles from "./Section2.module.css";
function Section2({ data, setShowModal }) {
  const { data_1, data_2 } = data;

  return (
    <div className={styles.Desktop2}>
      <Section2_1
        title={data_1.title}
        description={data_1.description}
        link={data_1.link}
        setShowModal={setShowModal}
      />
      <Section2_2 data={data_2} />
    </div>
  );
}

export default Section2;
