import React from "react";
import ListItem from "../../ListItem/ListItem";
import styles from "./Section3_2.module.css";

export default function Section3_2({ data }) {
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return <ListItem key={index} logo={item.logo} title={item.title} />;
      })}
    </div>
  );
}
