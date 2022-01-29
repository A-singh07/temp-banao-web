import React from "react";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import styles from "./Section17.module.css";
import City from "../../public/assets/images/City.jpg";
import City2 from "../../public/assets/images/City2.png";
import City3 from "../../public/assets/images/City3.png";
import City4 from "../../public/assets/images/City4.png";
function Section17() {
  const data = [
    {
      src: City.src,
      title: "United Kingdom",
      addition: "Cambridge, UK 60602",
    },
    {
      src: City2.src,
      title: "USA",
      addition: "California, USA 67524",
    },
    {
      src: City3.src,
      title: "India",
      addition: "Bangalore, IN 309827 Chandigarh, IN 308756",
    },
    {
      src: City4.src,
      title: "UAE",
      addition: "Dubai, UAE 309827",
    },
  ];
  return (
    <div className={styles.container}>
      <p className={styles.title}>Where we&apos;re located</p>
      <div className={styles.thumbnails}>
        {data.map((item, index) => (
          <Thumbnail
            key={index}
            src={item.src}
            title={item.title}
            addition={item.addition}
          />
        ))}
      </div>
    </div>
  );
}

export default Section17;
