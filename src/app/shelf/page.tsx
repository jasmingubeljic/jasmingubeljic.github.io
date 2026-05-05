import Link from "next/link";
import styles from "./page.module.css";

export default function Articles() {
  return (
    <>
      <ul className={styles.ul}>
        <li>
          <Link
            href="/shelf/debounce-function-issue-in-useEffect"
            className={styles.link}
          >
            Debounce Function Issue in useEffect
          </Link>
        </li>
        <li>
          <Link
            href="/shelf/accessing-localhost-from-different-devices"
            className={styles.link}
          >
            Accessing Localhost from Different Devices
          </Link>
        </li>
        <li>
          <Link href="/shelf/push-footer-to-the-bottom" className={styles.link}>
            Push Footer to the Bottom
          </Link>
        </li>
      </ul>
    </>
  );
}
