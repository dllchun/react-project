import DemoCarousel from "../carousel/Carousel";
import styles from "./sideproject.module.css";
import React from "react";

const SideProject = () => {
  return (
    <section id="sideProject" className={styles.sideProject}>
      <div className={styles.container}>
        <h2 className={styles.header}>HERE’S MY SIDE PROJECT</h2>

        <DemoCarousel />
      </div>
    </section>
  );
};

export default SideProject;
