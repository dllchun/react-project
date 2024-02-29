import styles from "./textlabel.module.css";
import React from "react";
import Image from "next/image";

const TextLabel = () => {
  return (
    <section className={styles.textLabel}>
      <div className={styles.container}>
        <p className={styles.loopText}>
          Coding • UX • Design • Data • Product •
        </p>
        <p className={styles.loopText}>
          Coding • UX • Design • Data • Product •
        </p>
        <p className={styles.loopText}>
          Coding • UX • Design • Data • Product •
        </p>
      </div>
    </section>
  );
};

export default TextLabel;
