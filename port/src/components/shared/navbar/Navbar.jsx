import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <Image src="logo.svg" alt="" width={80} height={80} />
        </Link>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <Link href="/design">Design</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="/programming">Programming</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <button className={styles.btn}>
          <Link href="/contact-me">Contact Me</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
