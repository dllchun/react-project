import Link from "next/link";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-regular-svg-icons";

import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../button/Button";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <h2 className={styles.quote}>DONE IS BETTER THAN PERFECT</h2>
          <span className={styles.quoteDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </span>
          <Button text={"CONTACT NOW"} link={"/"} />
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.siteName}>Vincent Cheung</span>
          <span className={styles.reserved}>
            © 2024 Vincent Cheung. All Rights Reserved.{" "}
          </span>
          <div className={styles.logoList}>
            <Link href="/" className={styles.logo}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="/" className={styles.logo}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="/" className={styles.logo}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
