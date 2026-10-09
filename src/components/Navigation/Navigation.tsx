import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <Link className={styles.link} href="/">
            about
          </Link>
        </li>
        <li className={styles.list}>
          <a
            className={styles.link}
            href="/resume/Jasmin-G-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </li>
        <li className={styles.list}>
          <Link className={styles.link} href="/shelf">
            shelf
          </Link>
        </li>
        <li className={styles.list}>
          <Link className={styles.link} href="/portfolio">
            portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
}
