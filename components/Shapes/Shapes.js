import React from "react";
import styles from "./Shapes.module.css";
function Shapes() {
  return (
    <div className={styles.shapesContainer}>
      <div className={styles.shape1} />
      <div className={styles.shape2} />
    </div>
  );
}

export default Shapes;
