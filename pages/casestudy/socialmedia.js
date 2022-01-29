import React from 'react'
import styles from '../../section/casestudyCSS/casestudy.module.css'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../section/Footer/Footer'
import { socialmediaData } from '../../data/casestudy'
import Section9 from '../../section/Section9/Section9'
import Section8 from '../../section/Section8/Section8'
import Section2 from '../../section/Section2/Section2'
import Section11 from '../../section/Section11/Section11'
import Section12 from '../../section/Section12/Section12'
import Section13 from '../../section/Section13/Section13'
import Section14 from '../../section/Section14/Section14'
import Section15 from '../../section/Section15/Section15'
import Section16 from '../../section/Section16/Section16'
import Section17 from '../../section/Section17/Section17'
import Section6 from "../../section/Section6/Section6"
import Section7 from '../../section/Section7/Section7'

import beforeImg from "../../public/assets/images/casestudy/HomePageOLD.png"
import nicheBeforeImg from "../../public/assets/images/casestudy/nicehrousp.png"
import homeBeforeImg from "../../public/assets/images/casestudy/Oldhome.png"

import afterImg from "../../public/assets/images/casestudy/HomepageNew.png"
import jobAfterImg from "../../public/assets/images/casestudy/Job.png"
import homeAfterImg from "../../public/assets/images/casestudy/AndroidHome.png"

import mainScreen from "../../public/assets/images/casestudy/MainScreen.png"
import videoMainScreen from "../../public/assets/images/casestudy/VideoScreen.png"

const socialmedia = () => {
  const {
    article,
    achievement_data,
    challenge_data,
    techstack_data,
    planning_data,
    outcome_data,
    testimony_data,
    related_projects_data,
    counts_data,
    form_data,
    blogs_data,
    faq_data,
    winning_formula
  } = socialmediaData

  const S11Images = [
    mainScreen.src,
    videoMainScreen.src
  ]

  return (
    <div>
      <NavBar home={true} />
      <Section9 article={article} download_data={achievement_data} />
      <Section8 work_data={challenge_data} />

      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          <div className={styles.bannerLeft}>
            <img src={beforeImg.src} alt="" className={styles.emptyBox} />
          </div>
          <div className={styles.bannerRight}>
            <img src={nicheBeforeImg.src} alt="" className={styles.bannerRightImg} />
            <img src={homeBeforeImg.src} alt="" className={styles.bannerRightImg} />
          </div>
        </div>
        <p className={styles.bottomtext}>Across the globe before redesign</p>
      </div>

      <Section2 data={techstack_data} />

      <div className={styles.bannerContainer} style={{ background: '#2F6CE5' }}>
        <div className={styles.banner}>
          <div className={styles.bannerLeft}>
            <img src={afterImg.src} alt="" className={styles.emptyBox} />
          </div>
          <div className={styles.bannerRight}>
            <img src={jobAfterImg.src} alt="" className={styles.bannerRightImg} />
            <img src={homeAfterImg.src} alt="" className={styles.bannerRightImg} />
          </div>
        </div>
      </div>
      <Section7 work_data={winning_formula} />
      <Section8 work_data={planning_data} />
      <Section11 work_data={outcome_data} images={S11Images} />
      <Section6 section_heading={'Words by Client'} data={testimony_data} />
      <Section12 data={related_projects_data} />
      <Section13 data={counts_data} />
      <Section14 data={form_data} />
      <Section15 data={blogs_data} />
      <Section16 data={faq_data} />
      <Section17 />
      <Footer />
    </div>
  )
}

export default socialmedia
