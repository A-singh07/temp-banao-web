import React from "react";
import styles from "./FooterList.module.css";
function FooterList({ title, list }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
