import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/button/Button";

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.heroDetails}>
          <span className={styles.heroIntroText}>
            HEY THERE, THIS IS VINCENT
          </span>
          <h1 className={styles.heroHeading}>
            I’m an <span className={styles.coloredText}>UXUI Designer</span> &{" "}
            <span className={styles.coloredText}>Project Manager</span>
          </h1>
          <span className={styles.heroDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </span>
          <Button
            color={"gradient"}
            text={"RECENT WORK"}
            link={"/#sideProject"}
          />
          <div className={styles.social}>
            <span className={styles.socialText}>Check Out My</span>
            <div className={`${styles.socialLogo}`}>
              <Image src="behance.svg" width={32} height={32} alt="behance" />
            </div>
            <div className={styles.socialLogo}>
              <Image src="dribbble.svg" width={32} height={32} alt="dribbble" />
            </div>
            <div className={styles.socialLogo}>
              <Image
                src="instagram.svg"
                width={32}
                height={32}
                alt="instagram"
              />
            </div>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <Image
            src="star.svg"
            alt="star"
            width={120}
            height={120}
            className={`${styles.starImg} ${styles.starPulse}`}
          />
          <Image
            src="heroImg.svg"
            width={450}
            height={500}
            className={styles.heroImg}
          />
          <Image
            alt="3d_instagram_logo"
            src="3d_instagram.svg"
            width={80}
            height={80}
            className={`${styles.instgramImg} ${styles.iconFloatingOne}`}
          />
          <Image
            alt="3d_code"
            src="3d_code.svg"
            width={120}
            height={120}
            className={`${styles.codeImg} ${styles.iconFloatingTwo}`}
          />
          <Image
            alt="3d_beer"
            src="3d_beer.svg"
            width={60}
            height={60}
            className={`${styles.beerImg} ${styles.iconFloatingThree}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
