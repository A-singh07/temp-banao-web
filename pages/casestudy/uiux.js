import React from 'react'
import styles from '../../section/casestudyCSS/casestudy.module.css'
import { uiuxData } from '../../data/casestudy'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../section/Footer/Footer'
import Section9 from '../../section/Section9/Section9'
import Section8 from '../../section/Section8/Section8'
import Section10 from '../../section/Section10/Section10'
import Section11 from '../../section/Section11/Section11'
import Section6 from '../../section/Section6/Section6'
import Section12 from '../../section/Section12/Section12'
import Section13 from '../../section/Section13/Section13'
import Section14 from '../../section/Section14/Section14'
import Section15 from '../../section/Section15/Section15'
import Section16 from '../../section/Section16/Section16'
import Section17 from '../../section/Section17/Section17'
import BigRectangle from '../../public/assets/images/Rectangle 439.png'
import mainScreen from "../../public/assets/images/casestudy/MainScreen.png"
import videoMainScreen from "../../public/assets/images/casestudy/VideoScreen.png"
const uiux = () => {
  const {
    article,
    achievement_data,
    challenge_data,
    techstack_data,
    outcome_data,
    features_data,
    testimony_data,
    related_projects_data,
    counts_data,
    form_data,
    blogs_data,
    faq_data,
  } = uiuxData

  const S11Images = [
    mainScreen.src,
    videoMainScreen.src
  ]

  return (
    <div>
      <NavBar home={true} />
      <Section9 article={article} download_data={achievement_data} />
      <Section8 work_data={challenge_data} />
      <img src={BigRectangle.src} alt="" className={styles.emptyBox} />
      <Section10 data={features_data} />
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

export default uiux
