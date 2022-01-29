import React from "react";
import styles from "./Work.module.css";
function Work({ title, introPara, subtitle, para, sec7_list }) {

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {introPara ?
        <p className={styles.introPara}>{introPara}</p> : null
      }
      <p className={styles.subTitle}>{subtitle}</p>
      {para && para.map((item, index) => {
        return (
          <div className={styles.para} key={index}>
            <p className={styles.paraTitle}>
              {item.title}
            </p>
            <p className={styles.details}>
              {item.text}
            </p>
          </div>
        );
      })}
      {sec7_list && (
        <>
          <p className={styles.listHeading}>{sec7_list.title}</p>
          <div className={styles.listContainer}>
            {
              sec7_list.list.map((row, index) => (
                <div key={index} className={styles.listColumn}>
                  {
                    row.map((item, index) => (
                      <p key={index} className={styles.listItem}>{item}</p>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </>
      )
      }
    </div>
  );
}

export default Work;
