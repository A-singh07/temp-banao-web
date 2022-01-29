import React from "react";
import Image from 'next/image'
import AchievementIcon from "../../components/AchievementIcon/AchievementIcon";
import Article from "../../components/Article/Article";
import styles from "./Section9.module.css";
import Icon1 from "../../public/assets/images/achievement-logo-1.svg";

function Section9({ article, download_data }) {

  return (
    <div className={styles.container}>
      <>
        <Image width={1440} height={480} layout='responsive' src={article.articleBanner} alt='ATG Case Study Banner'></Image>
      </>
      <div className={styles.temp}>
        <div className={styles.article}>
          <Article
            title={article.title}
            writer={article.writer}
            date={article.date}
            para={article.para}
            para_list={article.para_list}
          />
        </div>
        <div className={styles.achievement}>
          <p className={styles.achievementTitle}>Achievements</p>
          <div className={styles.achievementIcons}>
            {download_data.map((item, index) => (
              <AchievementIcon
                key={index}
                icon={item.icon}
                downloads={item.downloads}
                platform={item.platform}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section9;
