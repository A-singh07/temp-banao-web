import React from "react";
import styles from "./Section3_1.module.css";

function Section3_1({ title, description, sub_description, setShowModal }) {
  const handleClick = () => {
    setShowModal(true)
  }
  return (
    <div className={styles.section1}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.data}>
        {description}
      </p>
      <div className={styles.description} onClick={() => handleClick()}>
        <p>{sub_description}</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 14H21"
            stroke="#FB610B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 7L23 14L16 21"
            stroke="#FB610B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Section3_1;
