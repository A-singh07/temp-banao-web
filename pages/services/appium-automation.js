import React, { useState } from 'react'
import Head from "next/head";
import { appiumAutomationData } from '../../data/services'
import Landing from '../../section/Landing/Landing'
import Section2 from '../../section/Section2/Section2'
import Section3 from '../../section/Section3/Section3'
import Section4 from '../../section/Section4/Section4'
import Section6 from '../../section/Section6/Section6'
import Section13 from '../../section/Section13/Section13'
import Section15 from '../../section/Section15/Section15'
import Section16 from '../../section/Section16/Section16'
import Section17 from '../../section/Section17/Section17'
import Footer from '../../section/Footer/Footer'
import StartNowBanner from '../../section/StartNowBanner/StartNowBanner'
import Section7 from '../../section/Section7/Section7'
import ModalForm from '../../components/oldlanding/ModalForm/ModalForm';
import AnimationSec from '../../section/AnimationSection.js/AnimationSec';

const Appiumautomation = () => {
  const {
    hero_data,
    section7_1,
    section7_2,
    benefits_data,
    services_data,
    section4,
    testimony_data,
    counts_data,
    blogs_data,
    faq_data,
  } = appiumAutomationData

  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Head>
        <title>Appium Automation | Banao Technologies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content='Hire Appium developers from a top DevOps services company providing full Appium automation testing for Android, iOS and cross-platform mobile applications.'
        />
        <meta name="keywords" content="Appium Automation, Appium Automation Compnay, Appium Automation agency, Appium Automation Compnay in India"></meta>
      </Head>
      <Landing data={hero_data}
        setShowModal={setShowModal}
        home={true}
      />
      <Section7 work_data={section7_1} />
      <Section2 data={services_data}
        setShowModal={setShowModal} />
      <Section3 data={benefits_data}
        setShowModal={setShowModal}
      />
      <Section7 work_data={section7_2} />
      <Section4 data={section4} />
      <AnimationSec />
      <Section6 section_heading={'Testimonials'} data={testimony_data} />
      <Section13 data={counts_data} />
      {/* <Section15 data={blogs_data} /> */}
      <StartNowBanner
        setShowModal={setShowModal}
      />
      <Section16 data={faq_data} />
      <Section17 />
      <Footer />
      {showModal && <ModalForm showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

export default Appiumautomation
