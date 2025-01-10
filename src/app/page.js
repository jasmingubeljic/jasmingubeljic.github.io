import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <div className="glitch-wrapper">
        <h1 className={`${styles["greeting-heading"]} glitch`} data-glitch="Hi">
          Hi
        </h1>
      </div>
      <h2 className={`${styles["profession-heading"]}`}>
        I am Jasmin, a full-stack developer
      </h2>
      <p className={styles["about-me"]}>
        I am nearing the completion of my portfolio, and in the meantime, I
        invite you to explore some of my repositories. For a glimpse into my
        front-end capabilities, I suggest taking a look at a{" "}
        <a
          href="https://github.com/jasmingubeljic/estore-client"
          target="_blank"
          className={styles["repository-link"]}
        >
          shop
        </a>{" "}
        project built with React,{" "}
        <a
          href="https://github.com/jasmingubeljic/movimentum"
          target="_blank"
          className={styles["repository-link"]}
        >
          Movimentum
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/jasmingubeljic/stoille"
          target="_blank"
          className={styles["repository-link"]}
        >
          Stoille
        </a>{" "}
        projects highlight my proficiency in Vanilla CSS. If you have an
        interest in back-end development, you will also find a{" "}
        <a
          href="https://github.com/jasmingubeljic/estore-server"
          target="_blank"
          className={styles["repository-link"]}
        >
          eStore
        </a>{" "}
        (Node JS) available for your review.
      </p>
    </main>
  );
}
