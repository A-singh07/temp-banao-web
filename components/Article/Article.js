import React from "react";
import styles from "./Article.module.css";
function Article({ title, writer, date, para, para_list }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.source}>
        By <span>{writer}</span> | {date}
      </p>
      <div className={styles.para_container}>
        {
          para.map((item, index) => (
            <p className={styles.context} key={index}>{item}</p>
          ))
        }
      </div>
      {
        para_list && (
          <ol className={styles.list_container}>
            {para_list.map((item, index) => (
              <li key={index} className={styles.list_item}>{item}</li>
            ))
            }
          </ol>
        )
      }
    </div>
  );
}

export default Article;
