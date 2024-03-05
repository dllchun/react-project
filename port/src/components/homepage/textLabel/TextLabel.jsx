import styles from "./textlabel.module.css";
import React from "react";
import Image from "next/image";

const TextLabel = () => {
  return (
    <section className={styles.textLabel}>
      <div className={styles.container}>
        <p className={styles.loopText}>
          Coding &nbsp; &nbsp;• &nbsp; &nbsp; UX &nbsp; &nbsp; • &nbsp; &nbsp;
          Design &nbsp; &nbsp; • &nbsp; &nbsp; Data &nbsp; &nbsp; • &nbsp;
          &nbsp; Product &nbsp; &nbsp; •
        </p>
        <p className={styles.loopText}>
          Coding &nbsp; &nbsp;• &nbsp; &nbsp; UX &nbsp; &nbsp; • &nbsp; &nbsp;
          Design &nbsp; &nbsp; • &nbsp; &nbsp; Data &nbsp; &nbsp; • &nbsp;
          &nbsp; Product &nbsp; &nbsp; •
        </p>
        <p className={styles.loopText}>
          Coding &nbsp; &nbsp;• &nbsp; &nbsp; UX &nbsp; &nbsp; • &nbsp; &nbsp;
          Design &nbsp; &nbsp; • &nbsp; &nbsp; Data &nbsp; &nbsp; • &nbsp;
          &nbsp; Product &nbsp; &nbsp; •
        </p>
      </div>
    </section>
  );
};

export default TextLabel;
