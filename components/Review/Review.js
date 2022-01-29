import React from "react";
import Image from 'next/dist/client/image'
import styles from "./Review.module.css";
import img from "../../public/assets/images/star.svg";
function Review({ review }) {
  const stars = [];
  for (let i = 0; i < review.star; i++) {
    stars.push(<Image width={20} height={20} layout='intrinsic' src={img.src} alt="" key={i} />);
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>{review.title}</p>
      <div className={styles.rating}>
        {stars.map((item) => {
          return item;
        })}
      </div>
      <p className={styles.comment}>{review.comment}</p>
    </div>
  );
}

export default Review;
