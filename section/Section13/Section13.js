import React from "react";
import Counts from "../../components/Counts/Counts";
import styles from "./Section13.module.css";

function Section13({ data }) {
  const counts_data = [
    {
      downloads: "200+",
      category: "Team Size",
    },
    {
      downloads: "500+",
      category: "Clients worldwide",
    },
    {
      downloads: "1000+",
      category: "Projects",
    },
  ]
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default Section13;
