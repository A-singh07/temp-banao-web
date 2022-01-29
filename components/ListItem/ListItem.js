import React from "react";
import Image from 'next/dist/client/image'
import styles from "./ListItem.module.css";
function ListItem({ logo, title, route }) {
  return (
    <a href={route} className={styles.item}>
      <Image width={36} height={36} layout='intrinsic' src={logo} alt=""></Image>
      <p>{title}</p>
    </a>
  );
}

export default ListItem;
