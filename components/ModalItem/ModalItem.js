import React from "react";
import styles from "./ModalItem.module.css";
import Link from "next/link";

function ModalItem({ title, data, subactive, setSubactive }) {

  return (
    <div className={`${styles.modalItemContainer} ${title === 'Extras' ? styles.extras : ''}`}>
      {title ?
        <div className={styles.modalItemHeader}>
          <p
            className={subactive == title ? styles.titleActive : ""}
            onClick={() => setSubactive(title)}
          >
            {title}
          </p>
        </div> : <> </>
      }
      <div className={styles.modalItemContent}>
        <ul>
          {data.map((item, index) => {
            return (
              <Link href={item.route} key={index} passHref>
                <li>{item.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ModalItem;
