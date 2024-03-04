import Button from "@/components/shared/button/Button";
import styles from "./experience.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.svg";

import React from "react";
import JobCard from "../jobcard/JobCard";

const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2>MY WORK EXPERIENCE</h2>
        <div className={styles.content}>
          <div className={styles.leftInfo}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam{" "}
            </span>
            <Button color={"gradient"} text="My LinkedIn" link="#" />
          </div>
          <div className={styles.rightInfo}>
            <div className={styles.rightInfoContainer}>
              <JobCard
                icon={logo}
                title="Technical Project Manager"
                company="i2 Company Limited"
                date="Jun 22 - Jan 24"
              />
              <JobCard
                icon={logo}
                title="Technical Project Manager"
                company="i2 Company Limited "
                date="Jun 22 - Jan 24"
              />
              <JobCard
                icon={logo}
                title="Technical Project Manager"
                company="i2 Company Limited"
                date="Jun 22 - Jan 24"
              />
            </div>
            <div className={styles.purpleBg}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
