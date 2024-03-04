"use client";

import DemoCarousel from "../carousel/Carousel";
import styles from "./sideproject.module.css";
import React from "react";
import { useRouter } from "next/navigation";

const SideProject = () => {
  const router = useRouter();
  return (
    <section id="side-project" className={styles.sideProject}>
      <div className={styles.container}>
        <h2 className={styles.header}>HERE’S MY SIDE PROJECT</h2>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <DemoCarousel router={router} />
          </div>
          <div className={styles.contentRight}>
            <span className={styles.projectTitle}>Ecommerce Website </span>
            <span className={styles.projectDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideProject;
