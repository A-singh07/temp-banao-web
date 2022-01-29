import React from "react";
import ListItem from "../../components/ListItem/ListItem";
import styles from "./Section10.module.css";

function Section10({ data, reverse }) {

  return (
    <div className={styles.container}>
      <div className={styles.figure}>
        <div className={styles.figure1}>
          <svg
            width="260"
            height="462"
            viewBox="0 0 260 462"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="260" height="462" fill="#C4C4C4" />
          </svg>
        </div>
        <div className={styles.figure2}>
          <svg
            width="260"
            height="462"
            viewBox="0 0 260 462"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="260" height="462" fill="#E2E2E2" />
          </svg>
        </div>
      </div>
      <div className={styles.featureContainer}>
        <p className={styles.title}>Features</p>
        <div className={styles.feature}>
          {data.map((item, index) => {
            return <ListItem key={index} logo={item.logo} title={item.title} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Section10;
