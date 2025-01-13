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

      {/* <Link href="/shelf/link-2">link 2</Link> */}
    </>
  );
}
