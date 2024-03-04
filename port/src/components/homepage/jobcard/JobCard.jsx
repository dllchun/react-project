import styles from "./jobcard.module.css";
import Image from "next/image";

import React from "react";

const JobCard = ({ icon, title, company, date }) => {
  return (
    <div className={styles.cardItems}>
      <div className={styles.jobCardLeft}>
        <Image src={icon} height={40} width={40} alt="company logo" />
        <div className={styles.jobDetails}>
          <span className={styles.jobTitle}>{title}</span>
          <span className={styles.jobCompany}>{company}</span>
        </div>
      </div>
      <p className={styles.jobDates}>{date}</p>
    </div>
  );
};

export default JobCard;
