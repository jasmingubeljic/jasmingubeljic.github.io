import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="mailto: jasmin.g@tutanota.com" className={styles.link}>
            jasmin.g@tutanota.com
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://linkedin.com/in/jasmin-gubeljic"
            target="_blank"
            className={styles.link}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
