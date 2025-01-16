import Link from "next/link";
import styles from "./page.module.css";

export default function Articles() {
  return (
    <>
      <h1>Shelf</h1>

      <Link
        href="/shelf/debounce-function-issue-in-useEffect"
        className={styles.link}
      >
        Debounce Function Issue in useEffect
      </Link>
      <Link
        href="/shelf/accessing-localhost-from-different-devices"
        className={styles.link}
      >
        Accessing Localhost from Different Devices
      </Link>
      <Link href="/shelf/push-footer-to-the-bottom" className={styles.link}>
        Push Footer to the Bottom
      </Link>

      {/* <Link href="/shelf/link-2">link 2</Link> */}
    </>
  );
}
