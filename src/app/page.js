import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="glitch-wrapper">
        <h1 className={`${styles["greeting-heading"]} glitch`} data-glitch="Hi">
          Hi
        </h1>
      </div>
      <h2 className={`${styles["profession-heading"]}`}>
        I am Jasmin, a Full-stack developer
      </h2>

      <p className={styles["about-me"]}>
        I help businesses turn their ideas into code 💪🏻
      </p>
    </>
  );
}
