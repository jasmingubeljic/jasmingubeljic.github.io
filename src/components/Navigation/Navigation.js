import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            className={styles["menu-link"]}
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
