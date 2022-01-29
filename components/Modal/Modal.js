import React from "react";
import styles from "./Modal.module.css";
import ModalItem from "../ModalItem/ModalItem";

function Modal({ data, subactive, setSubactive }) {
  return (
    <div className={styles.modalContainer}>
      {data.map((item, index) => {
        return (
          <ModalItem
            key={index}
            title={item.title}
            data={item.data}
            subactive={subactive}
            setSubactive={setSubactive}
          />
        );
      })}
    </div>
  );
}

export default Modal;
