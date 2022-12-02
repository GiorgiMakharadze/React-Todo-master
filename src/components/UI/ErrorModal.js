import React from "react";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
