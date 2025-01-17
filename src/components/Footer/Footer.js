import styles from "./Footer.module.css";
import { MdMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a
            href="https://linkedin.com/in/jasmin-gubeljic"
            target="_blank"
            className={styles.link}
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className={styles.li}>
          <a href="mailto: jasmin.g@tutanota.com" className={styles.link}>
            <MdMail />
          </a>
        </li>
      </ul>
    </footer>
  );
}
