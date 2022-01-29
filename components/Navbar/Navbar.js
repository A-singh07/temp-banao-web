import { React, useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Modal from "../Modal/Modal";
import banao from "../../public/assets/images/BanaoLogo.png";
import PhoneButton from "../../public/assets/images/PhoneButton.svg";
import phoneWhite from '../../public/assets/images/Phone_white.svg'
import Hamburger from "../../public/assets/images/Hamburger.svg";
import Close from "../../public/assets/images/Close.svg";
import IN from "../../public/assets/images/IN.png";
import US from "../../public/assets/images/US.png";
import MobNavbarItem from "../MobNavbarItem/MobNavbarItem";
import Image from 'next/dist/client/image'
import Button from '@mui/material/Button';

function NavBar({ whiteNav, showModal, home }) {
  const [active, setActive] = useState(-1);
  const [open, setOpen] = useState(false);
  const [subactive, setSubactive] = useState("");
  const [temp, setTemp] = useState(false);
  const [navBar, setNavBar] = useState(false)
  //using page variable temporary to access route
  const [page, setPage] = useState("Home");

  const items = [
    {
      key: 2,
      title: "Services",
      sublist: [
        {
          title: "Design",
          data: [
            { key: 1, title: "Graphic Design", route: "/services/graphic-design" },
            { key: 2, title: "User interface design", route: "/services/ui-design" },
            { key: 3, title: "User Experience Design", route: "/services/ux-design" },
            { key: 4, title: "User experience review", route: "/services/ux-review" },
          ],
        },
        {
          title: "Web Development",
          data: [
            { key: 6, title: "Web Development", route: "/services/web-app-development" },
            { key: 6, title: "PHP/Laravel development", route: "/services/php-laravel-development" },
            { key: 7, title: "MEAN stack", route: "/services/mean-stack-development" },
            { key: 8, title: "MERN stack", route: "/services/mern-stack-development" },
            { key: 9, title: "NodeJs development", route: "/services/nodejs-development" },
            { key: 10, title: "Django web development", route: "/services/django-development" },
          ],
        },
        {
          title: "Quality assurance and consulting",
          data: [
            { key: 16, title: "Quality assurance and consulting", route: "/services/quality-assurance" },
            { key: 16, title: "Manual testing", route: "/services/manual-testing" },
            { key: 17, title: "Pixel perfect UI testing", route: "/services/ui-testing" },
            { key: 18, title: "Selenium testing", route: "/services/selenium-testing" },
            { key: 19, title: "Appium Automation", route: "/services/appium-automation" },
          ],
        },
        {
          title: "App Development",
          data: [
            {
              key: 11,
              title: "Progressive web app development",
              route: "/services/pwa-development",
            },
            {
              key: 12,
              title: "React Native app development",
              route: "/services/react-native-development",
            },
            { key: 13, title: "Android app development", route: "/services/android-app-development" },
            {
              key: 14,
              title: "Flutter app development",
              route: "/services/flutter-app-development",
            },
          ],
        },
        {
          title: "DevOps",
          data: [
            { key: 1, title: "DevOps Consulting", route: "/services/devops-consulting" },
            { key: 2, title: "Test Automation in DevOps", route: "" },
            { key: 3, title: "Server monitoring and alerts", route: "" },
            { key: 3, title: "DevOps CI/CD Implementation", route: "" },
          ],
        },
        {
          title: "Marketing",
          data: [
            { key: 31, title: "Digital Marketing", route: "" },
            { key: 32, title: "Telemarketing", route: "" },
            { key: 33, title: "Youth Marketing", route: "" },
            { key: 34, title: "Content Marketing", route: "" },
            { key: 35, title: "Sales Strategy", route: "" },
            { key: 36, title: "Leads Generation", route: "" },
            { key: 37, title: "YouTube Marketing", route: "" },
            { key: 38, title: "Email Marketing", route: "" },
            { key: 39, title: "SMS/WhatsApp Marketing", route: "" },
          ],
        },
        {
          title: "Extras",
          data: [
            { key: 21, title: "AI/ML", route: "/services/ai-ml-development" },
            { key: 22, title: "BlockChain development", route: "/services/blockchain-development" },
          ],

        },
      ],
    },

    {
      key: 3,
      title: "Industries",
      sublist: !open
        ? [
          {
            title: "",
            data: [
              { key: 26, title: "Health", route: "" },
              {
                key: 27,
                title: "On-Demand ",
                route: "",
              },
              { key: 28, title: "Restaurant ", route: "" },
              {
                key: 29,
                title: "Real-Estate",
                route: "",
              },
            ],
          },
          {
            title: "",
            data: [
              { key: 301, title: "Entertainment ", route: "" },
              { key: 30, title: "Finance", route: "" },
              { key: 31, title: "Social networking", route: "" },
              { key: 311, title: "Travel", route: "" },
            ],
          },
          {
            title: "",
            data: [
              { key: 32, title: "eCommerce and mCommerce ", route: "" },
              { key: 33, title: "mLearning ", route: "" },
              { key: 34, title: "Wellness", route: "" },
            ],
          },
        ]
        : [
          {
            title: "",
            data: [{ key: 26, title: "Health", route: "" }]
          },
          {
            title: "",
            data: [{ key: 27, title: "On-Demand ", route: "" }]
          },
          {
            title: "",
            data: [{ key: 28, title: "Restaurant ", route: "" },]
          },
          {
            title: "",
            data: [{ key: 29, title: "Real-Estate", route: "" }]
          },
          {
            title: "",
            data: [{ key: 301, title: "Entertainment ", route: "" },]
          },
          {
            title: "",
            data: [{ key: 30, title: "Finance", route: "" },]
          },
          {
            title: "",
            data: [{ key: 31, title: "Social networking", route: "" },]
          },
          {
            title: "",
            data: [{ key: 311, title: "Travel", route: "" },]
          },
          {
            title: "",
            data: [{ key: 32, title: "eCommerce and mCommerce ", route: "" },]
          },
          {
            title: "",
            data: [{ key: 33, title: "mLearning ", route: "" },]
          },
          {
            title: "",
            data: [{ key: 34, title: "Wellness", route: "" },]
          }
        ]
    },

    {
      key: 4,
      title: "Works",
      sublist: [
        {
          title: "",
          data: [
            { key: 1, title: "HappiMind", route: "/casestudy/development" },
          ],
        },
        {
          title: "",
          data: [
            { key: 1, title: "Across The Globe", route: "/casestudy/socialmedia" }
          ],
        },
        {
          title: "",
          data: [
            { key: 1, title: "UI/UX", route: "/casestudy/uiux" }
          ],
        },
      ],
    },
  ];

  //Change NavBar background on Scroll
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 75) {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
    }
    window.addEventListener('scroll', changeBackground)
    return () => {
      document.removeEventListener('scroll', changeBackground)
    }
  }, [])

  let modalDiv = useRef()
  useEffect(() => {
    let handler = (e) => {
      // if (!modalDiv.current.contains(e.target)) {
      //   setActive(-1)
      // }
      // console.log(e.target.id);
      if (e.target.id !== 'modalDiv' && e.target.id !== 'navItem') {
        setActive(-1)
      }
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener("click", handler)
    }
  }, [])

  return (
    <>
      <div id='navBar' className={`${(styles.navbar)} ${(whiteNav ? (navBar ? (styles.navbarWhite) : ('')) : (styles.navbarWhite))} ${showModal ? styles.pointerNone : ''}`}>
        <div
          className={
            styles.navbarContainer +
            " " +
            (active != -1 && active != 1 && styles.navbarItemActive) +
            " " +
            (open && styles.navbarItemActive)
          }
        >
          <div
            className={styles.logoContainer}
            onClick={() => {
              setPage("Home");
              setActive(-1);
              setOpen(false);
            }}
          >
            <Link href="/" passHref>
              <><Image width={222} height={81} layout='intrinsic' src={banao.src} alt=""></Image></>
            </Link>
          </div>
          <div className={styles.navbarLinks} ref={modalDiv} id='modalDiv'>
            <ul>
              {home && (<li className={`navItem ${active !== -1 ? styles.navbarNotActive : null} ${whiteNav ? '' : styles.navbarNotActive}`}><Link href='/'>Home</Link></li>)}
              <li className={`navItem ${active !== -1 ? styles.navbarNotActive : null} ${whiteNav ? '' : styles.navbarNotActive}`}><Link href='/#about'>About Us</Link></li>
              {items.map((item, index) => {
                return (
                  <li id='navItem'
                    className={`navItem ${active == item.key ? styles.navbarActive : ''} ${active !== -1 ? styles.navbarNotActive : ''} ${whiteNav ? '' : styles.navbarNotActive}`}
                    key={index}
                    onClick={() => {
                      setActive(active != item.key ? item.key : -1);
                    }}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.navbarContact} id='navBarContact'>
            <Button variant="contained" disableElevation className={styles.callButton}>
              <a href="tel:+91-99000-36467">
                <Image width={20} height={20} layout='intrinsic'
                  src={phoneWhite.src}
                  alt=""
                />
              </a>
            </Button>
            <Link href='/contact' passHref>
              <div>
                <Button variant="contained" disableElevation className={`${styles.contactBtn}`}>Contact Us</Button>
              </div>
            </Link>

            <div className={styles.navbarHamburger} id='hamburger'>
              <Image width={24} height={24} layout='intrinsic'
                src={open ? Close.src : Hamburger.src}
                alt=""
                onClick={() => {
                  setOpen(!open);
                  setTemp(true);
                  setPage('Home');
                }}
              ></Image>
            </div>
          </div>
        </div>

        {(active != -1 && active != 1) ?
          <div
            className={
              styles.modalDiv + " " + (active != -1 && active != 1 && styles.active)
            }
          >
            {items.map((item, index) => {
              if (active == item.key) {
                return (
                  <Modal
                    key={index}
                    data={item.sublist}
                    subactive={subactive}
                    setSubactive={setSubactive}
                  />
                );
              }
            })}
          </div> : null
        }

        {open && (
          <div className={styles.mobNavbar} id='modalNav'>
            {page != "Home" && (
              <p
                className={styles.navigation}
                onClick={() => {
                  setTemp(true);
                  setPage('Home');
                }}
              >
                Home &nbsp;
                <span>
                  <svg
                    width="4"
                    height="6"
                    viewBox="0 0 4 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.60875 5.19576L3.33542 3.46909C3.59542 3.20909 3.59542 2.78909 3.33542 2.52909L1.60875 0.802422C1.18875 0.389089 0.46875 0.682422 0.46875 1.27576V4.72242C0.46875 5.32242 1.18875 5.61576 1.60875 5.19576Z"
                      fill="#939CA3"
                    />
                  </svg>
                </span>
                &nbsp;
                {page != "Home" && page}
              </p>
            )}
            <div className={styles.mNavItems}>
              {items.map((item, index) => {
                if (temp) {
                  return (
                    <MobNavbarItem
                      setTemp={setTemp}
                      key={index}
                      val={item.title}
                      setOpen={setOpen}
                      page={page}
                      setPage={setPage}
                      sublist={[]}
                    />
                  );
                } else if (page == item.title) {
                  return item.sublist.map((item, index) => (
                    <MobNavbarItem
                      key={index}
                      val={item.title}
                      setOpen={setOpen}
                      sublist={item.data}
                    />
                  ));
                }
              })}
            </div>
            {temp && (
              <div className={styles.contactParent}>
                <div className={styles.contactContainer}>
                  <Image width={24} height={24} layout='intrinsic' className={styles.contactFlag} src={US.src} alt="" />
                  <a href="tel:+1-310-933-5672">+1-310-933-5672</a>
                </div>
                <div className={styles.contactContainer}>
                  <Image width={24} height={24} layout='intrinsic' className={styles.contactFlag} src={IN.src} alt="" />
                  <a href="tel:+91-99000-36467">+91-99000-36467</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {open && <div className={styles.navBackdrop} id='navbackdrop' onClick={() => { setOpen(false); setTemp(false) }}></div>}
      {active !== -1 ? (<div className={styles.navBackdrop} id='navbackdrop' onClick={() => { setActive(-1) }}></div>) : ('')}
    </>
  );
}

export default NavBar;
