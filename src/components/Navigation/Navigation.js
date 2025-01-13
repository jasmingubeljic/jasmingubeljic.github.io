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
        {/* <li className={styles.list}>
          <Link className={styles.link} href="#" aria-disabled="true">
            portfolio
          </Link>
        </li> */}
        <li className={styles.list}>
          <Link
            className={styles.link}
            href="/shelf"
            // locale={false}
          >
            shelf
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            className={styles.link}
            href="/assets/Jasmin-G-Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            // locale={false}
          >
            resume
          </Link>
        </li>
        {/* <li>
              <a className={styles["menu-link"]} href="">
                contact
              </a>
            </li> */}
      </ul>
    </nav>
  );
}
