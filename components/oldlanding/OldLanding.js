import React, { useState } from 'react'
import NavBar from '../../components/Navbar/Navbar'
import About from '../oldlanding/oldaboutus/About'
import Hero from '../oldlanding/oldHero/Hero'
import Services from './oldservices/Services'
import oldBulb from '../../public/assets/images/old-bulb.svg'
import oldWeb from '../../public/assets/images/old-web.svg'
import oldApp from '../../public/assets/images/old-app.svg'
import oldComp from '../../public/assets/images/old-comp.svg'
import oldMarketing from '../../public/assets/images/old-marketing.svg'
import oldBrain from '../../public/assets/images/old-brain.svg'
import oldCloud from '../../public/assets/images/old-cloud.svg'
import oldTools from '../../public/assets/images/old-tools.svg'
import StartNowBanner from '../../section/StartNowBanner/StartNowBanner'
import Section17 from '../../section/Section17/Section17'
import Footer from '../../section/Footer/Footer'
import TestimonySection from './oldtestimony/TestimonySection'
import user1 from '../../public/assets/images/testimonials/Vikash_Srivastava_Almabetter.jpeg'
import user2 from '../../public/assets/images/testimonials/Jabez_Zinabu_Leapifytalk.jpeg'
import user3 from '../../public/assets/images/testimonials/Tenul_Singh_Servii.jpeg'
import user4 from '../../public/assets/images/testimonials/Sahil_Wadhwa_Baba_Chatkora.png'
import user5 from '../../public/assets/images/testimonials/Shaurya_Malhotra_Ether.png'
import user6 from '../../public/assets/images/testimonials/Vinod_Rajpal_Whiteboard.png'
import user7 from '../../public/assets/images/testimonials/Rachiket_Arya_Jackett.png'
import user8 from '../../public/assets/images/testimonials/Dr_Chet_Trivedy_WCT.jpeg'
import user9 from '../../public/assets/images/testimonials/Parth_Sethia_OlineO.jpeg'
import user10 from '../../public/assets/images/testimonials/Ravi_Kant_Happimynd.png'
import user11 from '../../public/assets/images/testimonials/Sri_Aditya_The_Wallrus_Company.png'
import ModalForm from './ModalForm/ModalForm'
import whiteApp from '../../public/assets/images/white-app.svg'
import whiteComp from '../../public/assets/images/white-comp.svg'
import whiteStar from '../../public/assets/images/white-star.svg'
import whiteClient from '../../public/assets/images/white-client.png'
import AnimationSec from '../../section/AnimationSection.js/AnimationSec'

const OldLanding = () => {
  const [showModal, setShowModal] = useState(false)

  const aboutData = {
    heading: 'About Banao',
    description: [
      'Banao is a renowned web and mobile app development company & the best IT Software Solutions provider based in Bangalore and Chandigarh, India & Cambridge, UK, established in 2013. Apart from this, we also have sales offices in California, USA & Dubai, UAE.',
      'A young but highly competitive team in product design, strategy, development, and deployment. We\'re a one - stop shop offering custom solutions for you looking to succeed in your online endeavor.',
    ],
    link: 'Our story',
    data: [
      {
        color: false,
        number: '80%',
        text: 'Return Customers'
      },
      {
        color: true,
        img: whiteApp,
        number: '300+',
        text: 'Mobile Apps'
      },
      {
        color: false,
        number: '100+',
        text: 'Marketing team'
      },
      {
        color: true,
        img: whiteClient,
        number: '500+',
        text: 'Happy Clients'
      },
      {
        color: false,
        number: '7+',
        text: 'Years Since 2013'
      },
      {
        color: true,
        img: whiteComp,
        number: '500',
        text: 'Web Projects'
      },
      {
        color: false,
        number: '25M',
        text: 'App Downloads'
      },
      {
        color: true,
        img: whiteStar,
        number: '5/5',
        text: 'Clutch'
      },
      {
        color: false,
        number: '200+',
        text: 'Dev team'
      },
    ]
  }

  const serviceData = {
    heading: 'Services',
    cardData: [
      {
        image: oldBulb,
        title: 'Discover',
        description: 'We conduct a thorough market research, competitor analysis, target audience, and clients’ requirement.',
      },
      {
        image: oldWeb,
        title: 'Web Development',
        description: 'Design and developing immersive web applications and portals to drive digital transformation.',
      },
      {
        image: oldApp,
        title: 'App Development',
        description: 'We implement functionalities to bring the App into life.',
      },
      {
        image: oldComp,
        title: 'Designing',
        description: 'We create a research-driven design to visualize and dive deep in your industry.',
      },
      {
        image: oldMarketing,
        title: 'Marketing',
        description: 'We constantly measure our efforts to engage new customers, increase ROI, and achieve unique business goals. ',
      },
      {
        image: oldBrain,
        title: 'Artificial intelligence',
        description: 'Redefining speed with precision to maximize enterprise value with AI, ML, and RPA solutions.',
      },
    ],
    hiddenData: [
      {
        image: oldCloud,
        title: 'DevOps',
        description: 'Enabling enterprises to accelerate deployments with our DevOps & Agile consultation solutions.',
      },
      {
        image: oldTools,
        title: 'Maintenance',
        description: 'In case you need to update any functionality or add custom features and conduct a thorough maintenance/',
      },
      {
        image: oldCloud,
        title: 'IoT',
        description: 'Get the guidance you require to take the finest route toward digital transformation, cloud adoption, and sustainable innovation.',
      },
    ],
  }

  const start_now_banner = {
    title: "Join 500+ growing businesses that prefer Banao to build their brands.",
    button: "Request a Quote",
  }

  const testimonyData = {
    Text: 'Clients are talking',
    span: 'and they are happy',
    testimonies: [
      {
        img: user1,
        text: '“Banao Technologies was instrumental in the prompt completion of one of our projects, allowing us to acquire a competitive advantage in the market. The project management, development, and execution were flawless.”',
        username: 'Vikash Srivastava',
        userinfo: ' Co-founder and CTO, Almabetter'
      },
      {
        img: user2,
        text: '“In every regard, Banao did an outstanding job. They helped revamp our website\'s User Interface to meet our needs. When it came to deliveries, they were always on time. We\'re not sure how they do it, but the end product is breathtaking. Their customer service and responsiveness are amazing, and they are really appreciated.”',
        username: 'Jabez Zinabu',
        userinfo: 'CEO, LeapifyTalk'
      },
      {
        img: user3,
        text: '“Banao assisted us with the development of features for our Android app and also built a React Native based Android and iOS app from the bottom up. They also provided free support for the first three months following launch to ensure that issues and updates were appropriately addressed.”',
        username: 'Tenul Singh',
        userinfo: 'Co-founder and CEO, Servii'
      },
      {
        img: user4,
        text: '“We gave our social media marketing to Banao and haven\'t had to worry about a single thing for the past three years. Perfect dedication and execution. Best wishes to the Banao crew.”',
        username: 'Sahil Wadhwa',
        userinfo: 'Co-founder and CMO, Baba Chatkora'
      },
      {
        img: user5,
        text: '“Ether is a social networking app that was brought to life after collaborating with Banao. The development assistance was outstanding. The developer, Sourav, was really helpful in understanding the needs and suggesting better solutions.”',
        username: 'Shaurya Malhotra',
        userinfo: 'Founder, Ether'
      },
      {
        img: user6,
        text: '“Any team would find the Whiteboard App a difficult project to undertake. I\'m glad we went with Banao for the App development, which is currently shipped in our Android TV.”',
        username: 'Vinod Rajpal',
        userinfo: 'Project Manager, Whiteboard App.'
      },
      {
        img: user7,
        text: '“Banao has met all of our project requirements on time.  They are highly recommended because they function as your in-house team.”',
        username: 'Rachiket Arya',
        userinfo: 'Co-founder and CTO, Jackett '
      },
      {
        img: user8,
        text: '“Banao, in my opinion, is deserving of all the accolades it has received so far. I have confidence in this group\'s ability to achieve new heights in the foreseeable future.”',
        username: 'Dr.Chet Trivedy',
        userinfo: 'Chief Medical Advisor, Wildlife Conservation Trust (WCT)'
      },
      {
        img: user9,
        text: '“Banao has extensive experience in creating and developing e-commerce apps. We are looking forward to completing our present four-month engagement and establishing a long-term relationship.”',
        username: 'Parth Sethia',
        userinfo: 'Product Manager, O-line-O'
      },
      {
        img: user10,
        text: '“Banao has helped shape up Happimynd into a creative design and exceptional development. Banao\'s web development technological capabilities are remarkable.”',
        username: 'Ravi Kant',
        userinfo: 'CEO and Co-founder, Happimynd'
      },
      {
        img: user11,
        text: '“Banao Technologies was enthusiastic about the proposal. The efficient team delivered high-quality solutions at a low price. The goal was to design a scalable and flexible minimum viable product (MVP). Working with them is fantastic.”',
        username: 'Sri Aditya',
        userinfo: 'CEO and Co-founder, The Wallrus Company'
      },
    ],
  }
  return (
    <>
      <NavBar whiteNav={true} showModal={showModal} home={false} />
      <Hero
        heroText={'Beautiful web and app'}
        heroSpan={'solutions for our clients'}
        btnText={'Book a free consultation'}
        setShowModal={setShowModal}
      />
      <About data={aboutData} />
      <Services data={serviceData} />
      <AnimationSec />
      <TestimonySection data={testimonyData} />
      <StartNowBanner data={start_now_banner}
        setShowModal={setShowModal}
      />
      <Section17 />
      <Footer />
      {showModal && <ModalForm showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

export default OldLanding
