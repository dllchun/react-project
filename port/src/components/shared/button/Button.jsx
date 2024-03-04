import Image from "next/image";
import styles from "./button.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

const Button = ({ text, link, color, logo }) => {
  return (
    <button
      className={`${
        color === "gradient" ? `${styles.btn} ${styles.gradient}` : styles.btn
      }`}
    >
      <FontAwesomeIcon icon={logo === "github" ? faCode : faLink} />
      <Link href={link}>{text}</Link>
    </button>
  );
};

export default Button;
