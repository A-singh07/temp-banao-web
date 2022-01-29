import { useEffect } from 'react'
import Head from "next/head";
import Router from "next/router"
import Image from "next/image";
import Landing from "../section/Landing/Landing";
import Section6 from "../section/Section6/Section6";
import Section3 from "../section/Section3/Section3";
import Section7 from "../section/Section7/Section7";
import Section9 from "../section/Section9/Section9";
import Section10 from "../section/Section10/Section10";
import Section12 from "../section/Section12/Section12";
import Section13 from "../section/Section13/Section13";
import Section16 from "../section/Section16/Section16";
import Footer from "../section/Footer/Footer";
import Section4 from "../section/Section4/Section4";
import Section15 from "../section/Section15/Section15";
import Section17 from "../section/Section17/Section17";
import Section8 from "../section/Section8/Section8";
import Section11 from "../section/Section11/Section11";
import VideoTestimonial from "../section/VideoTestimonial/VideoTestimonial";
import Section14 from "../section/Section14/Section14";
import Section2 from "../section/Section2/Section2";
import OldLanding from "../components/oldlanding/OldLanding";
import { developmentData } from '../data/casestudy'

export default function Home() {

  // useEffect(() => {
  //   Router.push('/services/reactnative')
  //   // window.location.href = "/services/webdev"
  // })


  return (
    <>
      <Head>
        <title>Banao Technologies | Best Website and App Development agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Best Website and App Development agency. Let's build something great together"
        />
      </Head>
      <OldLanding />
      
      {/* <Landing data={[]} /> */}
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Section6 /> */}
      {/* <VideoTestimonial /> */}
      {/* <Section7 /> */}
      {/* <Section8 /> */}
      {/* <Section9 /> */}

      {/* <Section10 /> */}
      {/* <Section11 /> */}
      {/* <Section12 /> */}
      {/* <Section13 /> */}
      {/* <Section14 data={developmentData.form_data}/> */}
      {/* <Section15 /> */}
      {/* <Section16 /> */}
      {/* <Section17 /> */}
      {/* <Footer /> */}
    </>
  );
}
