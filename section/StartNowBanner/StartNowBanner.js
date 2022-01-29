import React from "react";
import styles from "./StartNowBanner.module.css";
import Button from '@mui/material/Button';

function StartNowBanner({ setShowModal }) {
  const data = {
    title:
      "Join 500+ growing businesses that use Banao to build their brands",
    button: "Get started now",
  };

  const handleClick = () => {
    setShowModal(true)
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>{data.title}</p>
      <Button variant="contained" disableElevation className={styles.button} onClick={() => handleClick()}>{data.button}</Button>
    </div>
  );
}

export default StartNowBanner;
