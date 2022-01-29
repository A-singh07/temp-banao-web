import React from "react";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import styles from "./Section16.module.css";
import Link from "next/link";

function Section16({ data }) {

  return (
    <div className={styles.container}>
      <p className={styles.title}>Frequently asked questions</p>
      <div className={styles.questions}>
        {data.map((item, index) => {
          return (
            <QuestionBox
              key={index}
              question={item.question}
              answer={item.answer}
            />
          );
        })}
      </div>
      <div className={styles.contact}>
        <p className={styles.contactTitle}>Still, have a question?</p>
        <p className={styles.info}>
          If you cannot find answer to your question in our FAQ, You can always
          <span>
            <Link href='/contact' passHref> contact us</Link>
          </span>
          . We’ll answer to you shortly!
        </p>
      </div>
    </div>
  );
}

export default Section16;
