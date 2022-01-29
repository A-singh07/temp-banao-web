import React from "react";
import Image from 'next/dist/client/image'
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Section14.module.css";
import ListItem from "../../components/ListItem/ListItem";
import Icon from "../../public/assets/images/check.svg";
import Mail from "../../public/assets/images/Mail.svg";
import Phone from "../../public/assets/images/Phone.svg";
import Pattern from "../../public/assets/images/FormPattern.svg";
function Section14({ data }) {

  const title = "Let's Build Something Great Together.";
  const subtitle =
    " Here is what you will get for submitting your contact details.";
  const contact = {
    mail: { logo: Mail.src, title: "Hello@Banao.tech", route: 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@banao.tech' },
    phone: { logo: Phone.src, title: "+91-99000-36467", route: 'tel:+91-99000-36467' },
  };
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <p className={styles.title}>{title} <span>&#129309;</span></p>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.list}>
          {data.map((item, index) => {
            return <ListItem key={index} logo={item.logo} title={item.title} />;
          })}
        </div>
        <div className={styles.contact}>
          <ListItem logo={contact.mail.logo} title={contact.mail.title} route={contact.mail.route} />
          <ListItem logo={contact.phone.logo} title={contact.phone.title} route={contact.phone.route} />
        </div>
      </div>
      <div className={styles.formContainer}>
        <Image width={132} height={132} layout='intrinsic' src={Pattern.src} alt=''></Image>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Section14;
