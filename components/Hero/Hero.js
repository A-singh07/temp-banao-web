import React from "react";
import styles from "./Hero.module.css";
import Button from '@mui/material/Button';

function Hero({ title, para, button, setShowModal }) {
  return (
    <div id="hero" className={styles.heroContainer}>
      <div className={styles.heroHeader}>
        <h1>{title}</h1>
      </div>
      <p className={styles.heroPara}>
        {para}
      </p>
      <Button variant="contained" disableElevation className={styles.heroButton} onClick={() => setShowModal(true)}>
        {button}
      </Button>
    </div>
  );
}

export default Hero;
