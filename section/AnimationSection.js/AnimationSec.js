import React, { useState, useEffect } from 'react'
import Image from 'next/dist/client/image'
import arrowWhite from '../../public/assets/images/arrow-right-white.svg'
import styles from './AnimationSec.module.css'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

//Images
import sec1Phone1 from '../../public/assets/images/animation/sec1_phone1.png'
import sec1Phone2 from '../../public/assets/images/animation/sec1_phone2.png'
import sec2Tab from '../../public/assets/images/animation/happymind_tab.png'
import sec3Tab from '../../public/assets/images/animation/sec3_tab.png'
import sec4Tab from '../../public/assets/images/animation/whiteboard_tab.png'
import sec5Tab from '../../public/assets/images/animation/sec5_tab.png'
import sec6Tab from '../../public/assets/images/animation/sec6_tab.png'

const AnimationSec = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const animationData = [
    {
      extraClasses: '',
      websiteName: 'Across the globe',
      websiteDesc: 'Connect to like-minded people based on your interests.',
      websiteList: [
        '- Social media platform',
        '- Real time chat',
        '- Job application',
        '- Payment Gateway'
      ],
      websiteAchievement: [
        {
          AchieveNumber: '2M+',
          AchieveName: 'Active Users',
        },
        {
          AchieveNumber: '1M+',
          AchieveName: 'Funding Raised',
        },
      ],
      websiteLink: 'https://play.google.com/store/apps/details?id=com.ATG.World',
      LinkText: 'View App',
      bgColor: 'linear-gradient(270deg, #2F6CE5 0%, rgba(47, 108, 229, 0.7) 100%)',
      phoneAnimation: true,
      phones: [sec1Phone1, sec1Phone2],
      tabAnimation: false,
      tabs: '',
    },
    {
      extraClasses: '',
      websiteName: 'HAPPImynd',
      websiteDesc: 'Healthy mind is the key to a Healthy and HappiLife.',
      websiteList: [
        '- Mindfulness platform',
        '- Automated assessment reports, Calendar Blocking',
        '- Complex mindfulness algorithms',
        '- Bitrix CRM integration, Payment gateway integration'
      ],
      websiteAchievement: [
        {
          AchieveNumber: '2.4M',
          AchieveName: 'Active Users',
        },
        {
          AchieveNumber: '20K',
          AchieveName: 'New monthly users',
        },
      ],
      websiteLink: 'https://happimynd.com/',
      LinkText: 'View Website',
      bgColor: 'linear-gradient(90deg, rgba(60, 146, 198, 0.7) 0%, #3C92C6 100%)',
      phoneAnimation: false,
      phones: [],
      tabAnimation: true,
      tabs: sec2Tab,
    },
    {
      extraClasses: '',
      websiteName: 'Jackett / Edtech Website',
      websiteDesc: 'Smart assessment platform for teachers',
      websiteList: [
        '- OCR for math formula digitization',
        '- Class & subject-based assessment creation',
        '- Worksheet creation',
        '- Results & insights',
        '- Full-fledged resource bank',
      ],
      websiteAchievement: [
        {
          AchieveNumber: '',
          AchieveName: '',
        },
        {
          AchieveNumber: '',
          AchieveName: '',
        },
      ],
      websiteLink: 'https://tryjackett.com/',
      LinkText: 'View Website',
      bgColor: 'linear-gradient(270deg, #5C7FDD 0%, rgba(92, 127, 221, 0.7) 100%)',
      phoneAnimation: false,
      phones: [],
      tabAnimation: true,
      tabs: sec3Tab,
    },
    {
      extraClasses: '',
      websiteName: 'Whiteboard / Android TV',
      websiteDesc: 'Interactive WhiteBoard for all kind of needs.',
      websiteList: [
        '- All kinds of pen types, different size and style.',
        '- Customizable shapes and colors.',
        '- Equipped with different math tools.',
        '- Multi-paging support',
        '- Importing and exporting on a click.',
        '- Handwriting recognition',
      ],
      websiteAchievement: [
        {
          AchieveNumber: '',
          AchieveName: '',
        },
        {
          AchieveNumber: '',
          AchieveName: '',
        },
      ],
      websiteLink: '#',
      LinkText: 'Case Study',
      bgColor: 'linear-gradient(270deg, #E31C19 0%, rgba(227, 28, 25, 0.7) 100%)',
      phoneAnimation: false,
      phones: [],
      tabAnimation: true,
      tabs: sec4Tab,
    },
    {
      extraClasses: '',
      websiteName: 'Across the globe',
      websiteDesc: 'Connect to like-minded people based on your interests.',
      websiteList: [
        '- Social media platform',
        '- Real time chat',
        '- Job application',
        '- Payment Gateway'
      ],
      websiteAchievement: [
        {
          AchieveNumber: '2M+',
          AchieveName: 'Active Users',
        },
        {
          AchieveNumber: '1M+',
          AchieveName: 'Funding Raised',
        },
      ],
      websiteLink: 'https://www.atg.world/',
      LinkText: 'View Website',
      bgColor: 'linear-gradient(270deg, #2F6CE5 0%, rgba(47, 108, 229, 0.7) 100%)',
      phoneAnimation: false,
      phones: [],
      tabAnimation: true,
      tabs: sec5Tab,
    },
    {
      extraClasses: 'colorChange',
      websiteName: 'Wallrus',
      websiteDesc: 'B2B E-commerce platform',
      websiteList: [
        '- Connects artists to interior decorators and their firms.',
        '- Helps budding artists connect with interior decorators',
        '- Helps artists monetize their artwork',
        '- Behance is the major competitor',
        '- On Demand based platform focussed on privacy.',
      ],
      websiteAchievement: [
        {
          AchieveNumber: '2M+',
          AchieveName: 'Active Users',
        },
        {
          AchieveNumber: '1M+',
          AchieveName: 'Funding Raised',
        },
      ],
      websiteLink: '#',
      LinkText: 'Coming Soon',
      bgColor: 'linear-gradient(270deg, #FADD4B 0%, rgba(250, 221, 75, 0.7) 100%)',
      phoneAnimation: false,
      phones: [],
      tabAnimation: true,
      tabs: sec6Tab,
    },
  ]

  let backgrounds = []
  const websiteNameList = []
  const websiteDescList = []
  const websiteFeatureList = []
  const websiteAchieveList = []
  const websiteLinkList = []

  animationData.forEach((data) => {
    let propertiesBgColor = ''
    propertiesBgColor = data.bgColor
    backgrounds.push(propertiesBgColor)

    let propertiesName = { wname: '', eClasses: '' }
    propertiesName.wname = data.websiteName
    propertiesName.eClasses = data.extraClasses
    websiteNameList.push(propertiesName)

    let propertiesDesc = { wDesc: '', eClasses: '' }
    propertiesDesc.wDesc = data.websiteDesc
    propertiesDesc.eClasses = data.extraClasses
    websiteDescList.push(propertiesDesc)

    let propertiesList = { wList: '', eClasses: '' }
    propertiesList.wList = data.websiteList
    propertiesList.eClasses = data.extraClasses
    websiteFeatureList.push(propertiesList)

    let propertiesAchieve = { wAchieve: '', eClasses: '' }
    propertiesAchieve.wAchieve = data.websiteAchievement
    propertiesAchieve.eClasses = data.extraClasses
    websiteAchieveList.push(propertiesAchieve)

    let propertiesLink = { wLinkText: '', wLink: '', eClasses: '' }
    propertiesLink.wLinkText = data.LinkText
    propertiesLink.wLink = data.websiteLink
    propertiesLink.eClasses = data.extraClasses
    websiteLinkList.push(propertiesLink)
  })


  useEffect(() => {
    const skipButton = document.querySelector('.skip')

    ScrollTrigger.matchMedia({
      '(min-width:750px) and (max-width: 1799px)': function () {

        //Pin Container
        let pins = gsap.utils.toArray('.pin')

        pins.forEach((pin, i) => {

          ScrollTrigger.create({
            trigger: '.image-part',
            pin: pin,
            pinSpacing: false,
            start: () => "-30px 15%",
            end: "+=4560 80%",
          });
        })

        //Change Colors
        let bgColortl = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-1`,
            start: 'top 15%',
            end: "+=760",
            toggleClass: { targets: '.panel', className: styles.bgColor1 },
          }
        })
        let bgColort2 = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-2`,
            start: 'top 15%',
            end: "+=760",
            toggleClass: { targets: '.panel', className: styles.bgColor2 },
          }
        })
        let bgColort3 = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-3`,
            start: 'top 15%',
            end: "+=760",
            toggleClass: { targets: '.panel', className: styles.bgColor3 },
          }
        })
        let bgColort4 = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-4`,
            start: 'top 15%',
            end: "+=760",
            toggleClass: { targets: '.panel', className: styles.bgColor4 },
          }
        })
        let bgColort5 = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-5`,
            start: 'top 15%',
            end: "+=760",
            toggleClass: { targets: '.panel', className: styles.bgColor5 },
          }
        })

        //Animate Text
        //Website Names
        let wbName1 = gsap.utils.toArray('.websitename')

        wbName1.forEach(function (name, i) {
          var tlName_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=760 15%",
              toggleClass: { targets: name, className: styles.websiteNameActive },
            }
          })
        })


        //Website Desc
        let webDesc1 = gsap.utils.toArray('.websiteDesc')
        let webDesc2 = gsap.utils.toArray('.websiteDesc:not(:last-of-type)')

        webDesc1.forEach(function (desc, i) {
          var tlDesc_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=760 15%",
              toggleClass: { targets: desc, className: styles.websiteDescStep1 },
            }
          })
        })

        webDesc2.forEach(function (desc, i) {
          var tlDesc_2 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i + 1}`,
              start: 'top 15%',
              end: "+=760 15%",
              toggleClass: { targets: desc, className: styles.websiteDescStep2 },
            }
          })
        })

        //Website List
        let wbList_1 = gsap.utils.toArray('.websiteList')
        let wbList_2 = gsap.utils.toArray('.websiteList:not(:last-of-type)')
        wbList_1.forEach(function (list, i) {
          var tlList_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=880 15%",
              toggleClass: { targets: list, className: styles.webListStep1 },
            }
          })
        })

        wbList_2.forEach(function (list, i) {
          var tlList_2 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i + 1}`,
              start: 'top 15%',
              end: "+=880 15%",
              toggleClass: { targets: list, className: styles.webListStep2 },
            }
          })
        })

        //Website Link
        let webLink1 = gsap.utils.toArray('.websiteLink')

        webLink1.forEach(function (link, i) {
          var tlLink_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=760 15%",
              transformOrigin: '-100% 0%',
              toggleClass: { targets: link, className: styles.webLinkActive },
            }
          })
        })

        // Website Achievement
        let wbAchieve1 = gsap.utils.toArray('.websiteAchieve')
        let wbAchieve2 = gsap.utils.toArray('.websiteAchieve:not(:last-of-type)')

        wbAchieve1.forEach(function (ach, i) {
          var tlAch_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=760 15%",
              toggleClass: { targets: ach, className: styles.webAchStep1 },
            }
          })
        })

        wbAchieve2.forEach(function (ach, i) {
          var tlAch_2 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i + 1}`,
              start: 'top 15%',
              end: "+=760 15%",
              toggleClass: { targets: ach, className: styles.webAchStep2 },
            }
          })
        })

        //DotNav Update
        var dots = gsap.utils.toArray('.dot')

        dots.forEach((dot, i) => {
          var tlDots = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=760 15%",
              toggleClass: { targets: dot, className: styles.dotSelected }
            }
          })
        })

        // Animate Images
        var tlImages1 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-0',
            start: 'top 15%',
            end: "+=760 15%",
            toggleClass: { targets: '.sec1Phone1', className: styles.sec1Phone1Active },
          }
        })

        var tlImages2 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-0',
            start: 'top 15%',
            end: "+=760 15%",
            toggleClass: { targets: '.sec1Phone2', className: styles.sec1Phone2Active },
          }
        })

        var tlImages3 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-1',
            start: 'top 15%',
            end: "+=760 15%",
            toggleClass: { targets: '.sec2Tab', className: styles.sec2TabActive },
          }
        })

        var tlImages4 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-2',
            start: 'top 15%',
            end: "+=760 15%",
            toggleClass: { targets: '.sec3Tab', className: styles.sec3TabActive },
          }
        })

        var tlImages5 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-3',
            start: 'top 15%',
            end: "+=760 15%",
            toggleClass: { targets: '.sec4Tab', className: styles.sec4TabActive },
          }
        })

        var tlImages6 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-4',
            start: 'top 15%',
            end: "+=760 15%",
            toggleClass: { targets: '.sec5Tab', className: styles.sec5TabActive },
          }
        })

        var tlImages7 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-5',
            start: 'top 15%',
            end: "+=760 15%",
            toggleClass: { targets: '.sec6Tab', className: styles.sec6TabActive },
          }
        })

        skipButton.addEventListener('click', (e) => {
          e.preventDefault();
          gsap.to(window, { scrollTo: { y: '.animation-end', offsetY: 10 } })
        })

      },

      '(min-width:1800px)': function () {
        let bgColortl = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-1`,
            start: 'top 15%',
            end: "+=880",
            toggleClass: { targets: '.panel', className: styles.bgColor1 },
          }
        })
        let bgColort2 = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-2`,
            start: 'top 15%',
            end: "+=880",
            toggleClass: { targets: '.panel', className: styles.bgColor2 },
          }
        })
        let bgColort3 = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-3`,
            start: 'top 15%',
            end: "+=880",
            toggleClass: { targets: '.panel', className: styles.bgColor3 },
          }
        })
        let bgColort4 = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-4`,
            start: 'top 15%',
            end: "+=880",
            toggleClass: { targets: '.panel', className: styles.bgColor4 },
          }
        })
        let bgColort5 = gsap.timeline({
          scrollTrigger: {
            trigger: `.image-wrapper-5`,
            start: 'top 15%',
            end: "+=880",
            toggleClass: { targets: '.panel', className: styles.bgColor5 },
          }
        })

        //Pin Container
        let pins = gsap.utils.toArray('.pin')

        pins.forEach((pin, i) => {

          ScrollTrigger.create({
            trigger: '.image-part',
            pin: pin,
            pinSpacing: false,
            start: () => "-30px 15%",
            end: "+=5280 70%",
          });
        })

        //Animate Text
        //Website Names
        let wbName1 = gsap.utils.toArray('.websitename')

        wbName1.forEach(function (name, i) {
          var tlName_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=870 15%",
              toggleClass: { targets: name, className: styles.websiteNameActive },
            }
          })
        })


        //Website Desc
        let webDesc1 = gsap.utils.toArray('.websiteDesc')
        let webDesc2 = gsap.utils.toArray('.websiteDesc:not(:last-of-type)')

        webDesc1.forEach(function (desc, i) {
          var tlDesc_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=880 15%",
              toggleClass: { targets: desc, className: styles.websiteDescStep1 },
            }
          })
        })

        webDesc2.forEach(function (desc, i) {
          var tlDesc_2 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i + 1}`,
              start: 'top 15%',
              end: "+=880 15%",
              toggleClass: { targets: desc, className: styles.websiteDescStep2 },
            }
          })
        })

        //Website List
        let wbList_1 = gsap.utils.toArray('.websiteList')
        let wbList_2 = gsap.utils.toArray('.websiteList:not(:last-of-type)')
        wbList_1.forEach(function (list, i) {
          var tlList_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=880 15%",
              toggleClass: { targets: list, className: styles.webListStep1 },
            }
          })
        })

        wbList_2.forEach(function (list, i) {
          var tlList_2 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i + 1}`,
              start: 'top 15%',
              end: "+=880 15%",
              toggleClass: { targets: list, className: styles.webListStep2 },
            }
          })
        })

        //Website Link
        let webLink1 = gsap.utils.toArray('.websiteLink')

        webLink1.forEach(function (link, i) {
          var tlLink_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=880 15%",
              transformOrigin: '-100% 0%',
              toggleClass: { targets: link, className: styles.webLinkActive },
            }
          })
        })

        // Website Achievement
        let wbAchieve1 = gsap.utils.toArray('.websiteAchieve')
        let wbAchieve2 = gsap.utils.toArray('.websiteAchieve:not(:last-of-type)')

        wbAchieve1.forEach(function (ach, i) {
          var tlAch_1 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=880 15%",
              toggleClass: { targets: ach, className: styles.webAchStep1 },
            }
          })
        })

        wbAchieve2.forEach(function (ach, i) {
          var tlAch_2 = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i + 1}`,
              start: 'top 15%',
              end: "+=880 15%",
              toggleClass: { targets: ach, className: styles.webAchStep2 },
            }
          })
        })

        //DotNav Update

        var dots = gsap.utils.toArray('.dot')

        dots.forEach((dot, i) => {
          var tlDots = gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${i}`,
              start: 'top 15%',
              end: "+=880 15%",
              toggleClass: { targets: dot, className: styles.dotSelected }
            }
          })
        })

        // Animate Images

        var tlImages1 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-0',
            start: 'top 15%',
            end: "+=880 15%",
            toggleClass: { targets: '.sec1Phone1', className: styles.sec1Phone1Active },
          }
        })

        var tlImages2 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-0',
            start: 'top 15%',
            end: "+=880 15%",
            toggleClass: { targets: '.sec1Phone2', className: styles.sec1Phone2Active },
          }
        })

        var tlImages3 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-1',
            start: 'top 15%',
            end: "+=880 15%",
            toggleClass: { targets: '.sec2Tab', className: styles.sec2TabActive },
          }
        })

        var tlImages4 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-2',
            start: 'top 15%',
            end: "+=880 15%",
            toggleClass: { targets: '.sec3Tab', className: styles.sec3TabActive },
          }
        })

        var tlImages5 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-3',
            start: 'top 15%',
            end: "+=880 15%",
            toggleClass: { targets: '.sec4Tab', className: styles.sec4TabActive },
          }
        })

        var tlImages6 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-4',
            start: 'top 15%',
            end: "+=880 15%",
            toggleClass: { targets: '.sec5Tab', className: styles.sec5TabActive },
          }
        })

        var tlImages7 = gsap.timeline({
          scrollTrigger: {
            trigger: '.image-wrapper-5',
            start: 'top 15%',
            end: 'bottom 15%',
            endTrigger: 'html',
            toggleClass: { targets: '.sec6Tab', className: styles.sec6TabActive },
          }
        })

        skipButton.addEventListener('click', (e) => {
          e.preventDefault();
          gsap.to(window, { scrollTo: { y: '.animation-end', offsetY: 10 } })
        })
      }
    })
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [])


  return (
    <>

      {
        animationData.map((d, index) => (
          <section className={`${styles.animationMobContainer}`} style={{ background: d.bgColor }} key={index}>
            <div className={`${styles.mobWrapper}`}>
              <div className={`${styles.mobImageContianer}`}>
                {
                  d.phoneAnimation ? (
                    <>
                      {
                        d.phones.map((item, index) => (
                          <div className={styles.mobPhone} key={index}>
                            <Image height={300} width={250} src={item.src} layout='intrinsic' alt='' />
                          </div>
                        ))
                      }
                    </>
                  ) : ('')
                }
                {
                  d.tabAnimation ? (
                    <Image src={d.tabs} height={260} width={330} layout='intrinsic' alt='' />
                  ) : ('')
                }
              </div>
              <div className={`${styles.mobContentWrapper}`}>
                <div className={`${styles.websitenameContainer}`}>
                  <p className={`${styles.websiteName} ${d.extraClasses === 'colorChange' ? styles.textColorBlack : ''}`}>{d.websiteName}</p>
                </div>
                <div className={`${styles.websiteDescContainer}`}>
                  <h4 className={`${styles.websiteDesc} ${d.extraClasses === 'colorChange' ? styles.textColorBlack : ''}`}>{d.websiteDesc}</h4>
                </div>
                <div className={`${styles.websiteListContainer} `}>
                  <ol className={`${styles.websiteList}`}>
                    {
                      d.websiteList.map((item, index) => (
                        <li className={`${styles.weblistItem} ${d.extraClasses === 'colorChange' ? styles.textColorgrey : ''}`} key={index}>{item}</li>
                      ))
                    }
                  </ol>
                </div>
                <div className={`${styles.achivementContainer}`}>
                  {
                    d.websiteAchievement.map((item, idx) => (
                      <div className={`${styles.achieveBox}`} key={idx}>
                        <p className={`${styles.achieveNumber} ${d.extraClasses === 'colorChange' ? styles.textColorBlack : ''}`}>{item.AchieveNumber}</p>
                        <p className={`${styles.achieveName} ${d.extraClasses === 'colorChange' ? styles.textColorgrey : ''}`}>{item.AchieveName}</p>
                      </div>
                    ))
                  }
                </div>
                {
                  d.LinkText !== '' ? (
                    <a href={d.websiteLink}>
                      <div className={`${styles.linkContainer}`}>
                        <p className={`${styles.linkText} ${d.extraClasses === 'colorChange' ? styles.textColorBlack : ''}`}>{d.LinkText}</p>
                        <span className={`linkArrow ${d.extraClasses === 'colorChange' ? styles.colorInvert : null}`}><Image width={24} height={24} layout='intrinsic' src={arrowWhite.src} alt="" /></span>
                      </div>
                    </a>
                  ) : ('')
                }
              </div>
            </div>
          </section>
        ))
      }

      <section className={`panel ${styles.animationDeskContainer}`}>
        <div className={`${styles.animationWrapper}`}>
          <div className={`pin  ${styles.contentPart}`}>
            <div className={`wbNameContainer  ${styles.websitenameContainer}`}>
              {
                websiteNameList.map((item, index) => (
                  <p className={`websitename ${styles.websiteName} ${item.eClasses === 'colorChange' ? (styles.textColorBlack) : ''} ${item.eClasses === 'colorChange' ? (styles.mxh65) : ''}`} key={index}>
                    {item.wname}
                  </p>
                ))
              }
            </div>
            <div className={`wbDescContainer  ${styles.websiteDescContainer}`}>
              {
                websiteDescList.map((item, index) => (
                  <h4 className={`websiteDesc ${styles.websiteDesc} ${item.eClasses === 'colorChange' ? styles.textColorBlack : ''}`} key={index}>
                    {item.wDesc}
                  </h4>
                ))
              }
            </div>
            <div className={` ${styles.websiteListContainer}`}>
              {
                websiteFeatureList.map((item, index) => (
                  <ol className={`websiteList ${styles.websiteList}`} key={index}>
                    {
                      item.wList.map((it, index) => (
                        <li className={`${styles.weblistItem} ${item.eClasses === 'colorChange' ? styles.textColorgrey : styles.textColorWhite}`} key={index}>
                          {it}
                        </li>
                      ))
                    }
                  </ol>
                ))
              }
            </div>
            <div className={` ${styles.achivementContainer}`}>
              {
                websiteAchieveList.map((item, index) => (
                  <div className={`websiteAchieve ${styles.websiteAchieve} ${item.eClasses === 'colorChange' ? styles.textColorgrey : styles.textColorWhite}`} key={index}>
                    {
                      item.wAchieve.map((it, index) => (
                        <div className={styles.achieveBox} key={index}>
                          <p className={`${styles.achieveNumber} ${item.eClasses === 'colorChange' ? styles.textColorBlack : ''}`}>{it.AchieveNumber}</p>
                          <p className={`${styles.achieveName} ${item.eClasses === 'colorChange' ? styles.textColorgrey : ''}`}>{it.AchieveName}</p>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
            <div className={` ${styles.linkContainer}`}>
              {
                websiteLinkList.map((item, index) => (
                  <a href={item.wLink} key={index}>
                    <div className={`websiteLink ${styles.websiteLink}`}>
                      <p className={`${styles.linkText} ${item.eClasses === 'colorChange' ? styles.textColorBlack : ''}`} >
                        {item.wLinkText}
                      </p>
                      {
                        item.wLinkText !== '' ? (
                          <div className={`linkArrow ${item.eClasses === 'colorChange' ? styles.colorInvert : null}`}>
                            <Image width={24} height={24} layout='intrinsic' src={arrowWhite.src} alt="" />
                          </div>
                        ) : ('')
                      }
                    </div>
                  </a>
                ))
              }
            </div>
          </div>
          <div className={`image-part pin ${styles.imagePart}`}>
            <div className={`image-wrapper-0 ${styles.imageWrapper}`}>
              <div className={`sec1Phone1 ${styles.sec1Phone1}`}>
                <Image width={450} height={600} layout='intrinsic' src={sec1Phone1.src} alt="" />
              </div>
              <div className={`sec1Phone2 ${styles.sec1Phone2}`}>
                <Image width={450} height={700} layout='intrinsic' src={sec1Phone2.src} alt="" />
              </div>
            </div>
            <div className={`image-wrapper-1  ${styles.imageWrapper}`}>
              <div className={`sec2Tab tabImages ${styles.sec2Tab}`}>
                <Image width={620} height={480} layout='intrinsic' src={sec2Tab.src} alt="" />
              </div>
            </div>
            <div className={`image-wrapper-2 ${styles.imageWrapper}`}>
              <div className={`sec3Tab tabImages ${styles.sec3Tab}`}>
                <Image width={620} height={480} layout='intrinsic' src={sec3Tab.src} alt="" />
              </div>
            </div>
            <div className={`image-wrapper-3 ${styles.imageWrapper}`}>
              <div className={`sec4Tab tabImages ${styles.sec4Tab}`}>
                <Image width={620} height={480} layout='intrinsic' src={sec4Tab.src} alt="" />
              </div>
            </div>
            <div className={`image-wrapper-4 ${styles.imageWrapper}`}>
              <div className={`sec5Tab tabImages ${styles.sec5Tab}`}>
                <Image width={620} height={480} layout='intrinsic' src={sec5Tab.src} alt="" />
              </div>
            </div>
            <div className={`image-wrapper-5 ${styles.imageWrapper}`}>
              <div className={`sec6Tab tabImages ${styles.sec6Tab}`}>
                <Image width={620} height={480} layout='intrinsic' src={sec6Tab.src} alt="" />
              </div>
            </div>
          </div>
          <div className={`NavPin pin`}>
            <div className={`animationNav ${styles.animationNav}`}>
              <p className={`skip ${styles.skipButton}`}>Skip</p>
              <div className={`dottNav ${styles.dotNavContainer}`}>
                {
                  animationData.map((item, i) => (
                    <div className={`dot ${styles.dot}`} key={i}></div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`animation-end`}></section>
    </>
  )
}

export default AnimationSec
