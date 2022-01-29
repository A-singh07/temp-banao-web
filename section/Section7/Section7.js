import React from "react";
import Counts from "../../components/Counts/Counts";
import Work from "../../components/Work/Work";
import styles from "./Section7.module.css";

function Section7({ work_data, counts_data }) {
  const { list } = work_data;

  return (
    <div className={styles.container}>
      <Work
        title={work_data.title}
        subtitle={work_data.subtitle}
        para={work_data.para}
        sec7_list={work_data.sec7_list}
      />
      {work_data.list && (
        <div className={styles.list_container}>
          <p className={styles.list_heading}>{list.list_heading}</p>
          <ol className={styles.list_wrapper}>
            {list.list_item.map((item, index) => (
              <li key={index} className={styles.list_item}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      )}
      {counts_data && (
        <div className={styles.counts}>
          {counts_data.map((item, index) => {
            return (
              <Counts
                key={index}
                downloads={item.downloads}
                category={item.category}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Section7;
