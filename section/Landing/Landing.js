import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Shapes from "../../components/Shapes/Shapes";
import styles from "./Landing.module.css";
function Landing({ data, showModal, setShowModal, home }) {
  return (
    <div className={styles.container}>
      <Shapes />
      <Navbar home={home} />
      <Hero
        title={data.title}
        para={data.para}
        button={data.button}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default Landing;
