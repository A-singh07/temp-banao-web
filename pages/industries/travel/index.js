import React, { useState } from "react";
import Head from "next/head";
import { travelData } from "../../../data/industries-data";
import Landing from "../../../section/Landing/Landing";
import Footer from "../../../section/Footer/Footer";
import Section7 from "../../../section/Section7/Section7";
import Section2 from "../../../section/Section2/Section2";
import Section3 from "../../../section/Section3/Section3";
import Section4 from "../../../section/Section4/Section4";
import Section6 from "../../../section/Section6/Section6";
import Section13 from "../../../section/Section13/Section13";
import Section15 from "../../../section/Section15/Section15";
import Section16 from "../../../section/Section16/Section16";
import Section17 from "../../../section/Section17/Section17";
import StartNowBanner from "../../../section/StartNowBanner/StartNowBanner";
import ModalForm from "../../../components/oldlanding/ModalForm/ModalForm";

function Index() {
  const {
    hero,
    work_data_1,
    section2,
    work_data_2,
    section3_1,
    section3_2,
    section4,
    testimonial,
    counts_data,
    section15,
    section16,
    start_now_banner,
  } = travelData;

  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Head>
        <title>Travel App Development | Banao Technologies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content='Banao is most trusted React Native App Development Company in India. Our team has experience in building world-class highly-sophisticated react native apps'
        />
        <meta name="keywords" content="Real Estate Solutions, Real Estate App, Real Estate Solutions Company, Real Estate Solutions Company in India"></meta>
      </Head>
      <Landing data={hero}
        setShowModal={setShowModal}
        home={true}
      />
      <Section7 work_data={work_data_1} />
      <Section2 data={section2}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Section3 data={section3_1}
        reverse={section3_1.reverse}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Section4 data={section4} />
      <Section6 data={testimonial} section_heading="Testimonials" />
      <Section13 data={counts_data} />
      {/* <Section15 data={section15} /> */}
      <StartNowBanner
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Section16 data={section16} />
      <Section17 />
      <Footer />
      {showModal && <ModalForm showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}

export default Index;
