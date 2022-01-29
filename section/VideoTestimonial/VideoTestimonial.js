import React from "react";
import styles from "./VideoTestimonial.module.css";
import VideoNamePlate from "../../components/NamePlate/VideoNamePlate/VideoNamePlate";
import Profile from "../../public/assets/images/profile.jpg";
function VideoTestimonial() {
  const data = {
    src: Profile.src,
    name: "Virat Kohli",
    work: "Captain, RCB",
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>Testimonial</p>
      <div className={styles.review}>
        <div className={styles.namePlate}>
          <VideoNamePlate data={data} />
        </div>
        <div className={styles.videoContainer}>
          <video className={styles.video} controls>
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-night-movement-of-a-main-avenue-of-a-big-city-41161-large.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoTestimonial;
