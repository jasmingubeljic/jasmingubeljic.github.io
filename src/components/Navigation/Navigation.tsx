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
          <Link
            className={styles.link}
            href="https://cbkailgmuybhqfwzlsyy.supabase.co/storage/v1/object/public/portfolio//Jasmin-G-Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            resume
          </Link>
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
