import React from "react";
import Image from 'next/dist/client/image'
import styles from "./Card2.module.css";

function Card2({ image, title, description, list }) {
  return (
    <div className={styles.Card2}>
      {
        image !== null ? (
          <Image width={36} height={36} layout='intrinsic' src={image} alt=""></Image>
        ) : ('')
      }
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {
          list && (
            <ol className={styles.listContainer}>
              {
                list.map((item, index) => (
                  <li key={index} className={styles.listItem}>{item}</li>
                ))
              }
            </ol>
          )
        }
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Card2;
