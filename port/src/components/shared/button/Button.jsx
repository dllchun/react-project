import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <button className={styles.btn}>
      <Link href={link}>{text}</Link>
    </button>
  );
};

export default Button;
