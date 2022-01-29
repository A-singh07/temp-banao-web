import React, { useState, useRef } from "react";
import styles from "./QuestionBox.module.css";

function QuestionBox({ question, answer }) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const para = useRef(null);
  const toggleHeight = () => {
    setHeight(!active ? `${para.current.scrollHeight}px` : "0px");
    setActive(!active);
  };
  return (
    <div className={styles.container} onClick={toggleHeight}>
      <p className={styles.question + " " + (active && styles.active)}>
        {question}
      </p>
      <div
        className={
          styles.buttonContainer + " " + (active && styles.activeButton)
        }
      >
        <button className={styles.button}></button>
        {!active && (
          <button className={styles.button}></button>
        )}
      </div>
      <p
        style={{ maxHeight: height, transition: "max-height ease-in 250ms", paddingTop: '4px' }}
        className={styles.answer}
        ref={para}
      >
        {answer}
      </p>
    </div>
  );
}

export default QuestionBox;
