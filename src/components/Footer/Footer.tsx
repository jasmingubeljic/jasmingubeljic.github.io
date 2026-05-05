import styles from "./Footer.module.css";
import { MdMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="https://linkedin.com/in/jasmin-gubeljic" target="_blank" className={styles.link}>
            <FaLinkedinIn />
          </a>
        </li>
        <li className={styles.li}>
          <a href="mailto: jasmin.g@tutanota.com" className={styles.link}>
            <MdMail />
          </a>
        </li>
        <li className={styles.li}>
          <a href="https://github.com/jasmingubeljic" target="_blank" className={styles.link}>
            <AiOutlineGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}
