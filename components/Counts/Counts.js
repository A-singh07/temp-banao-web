import React from "react";
import styles from "./Counts.module.css";
function Counts({ downloads, category }) {
  return (
    <div className={styles.container}>
      <p>{downloads}</p>
      <p>{category}</p>
    </div>
  );
}

export default Counts;
