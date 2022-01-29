import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "./MobNavbarItem.module.css";
function MobNavbarItem({ val, setOpen, sublist, setPage, page, setTemp }) {
  const [active, setActive] = useState(false);
  const subitems = useRef(null);
  const [height, setHeight] = useState("0px");

  const handleClick = () => {
    setPage != undefined && setPage(val);
    setTemp != undefined && setTemp(false);
    setActive(!active);
    setHeight(!active ? subitems.current.scrollHeight + "px" : "0px");
  };
  return (
    <>
      {val ?
        <div className={styles.container} id='itemContainer'>
          <p
            className={
              `navItem ${styles.title + " " + ((active || page == val) && styles.active)}`
            }
            onClick={handleClick}
          >
            {val}
          </p>
          <div
            ref={subitems}
            style={{ maxHeight: height }}
            className={styles.subitemContainer}
          >
            {sublist.map((item, index) => (
              <Link href={item.route} key={index} passHref>
                <p
                  className={styles.subitem}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
        : <div className={styles.container}>
          {sublist.map((item, index) => (
            <Link href={item.route} key={index} passHref>
              <p
                className={`navItem ${styles.title}`}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>

      }
    </>
  );
}

export default MobNavbarItem;
