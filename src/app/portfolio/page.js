import styles from "./page.module.css";

export default function Portfolio() {
  return (
    <>
      <p>
        For a glimpse into my capabilities, I suggest taking a look at{" "}
        <a href="https://github.com/jasmingubeljic/jQuiz" target="_blank" className={styles["repository-link"]}>
          jQuiz
        </a>{" "}
        ,{" "}
        <a href="https://github.com/jasmingubeljic/accommodation-filtering" target="_blank" className={styles["repository-link"]}>
          client filtering
        </a>{" "}
        ,{" "}
        <a href="https://github.com/jasmingubeljic/jasmingubeljic.github.io" target="_blank" className={styles["repository-link"]}>
          this.project
        </a>{" "}
        , and{" "}
        <a href="https://github.com/jasmingubeljic/estore-client-ts" target="_blank" className={styles["repository-link"]}>
          eStore (TS)
        </a>{" "}
        -{" "}
        <a href="https://github.com/jasmingubeljic/estore-client" target="_blank" className={styles["repository-link"]}>
          eStore (JS)
        </a>{" "}
        . <br></br>
        <a href="https://github.com/jasmingubeljic/movimentum" target="_blank" className={styles["repository-link"]}>
          Movimentum
        </a>{" "}
        and{" "}
        <a href="https://github.com/jasmingubeljic/stoille" target="_blank" className={styles["repository-link"]}>
          Stoille
        </a>{" "}
        projects highlight my proficiency in Vanilla CSS. If you are interested in back-end development, check out{" "}
        <a href="https://github.com/jasmingubeljic/estore-server" target="_blank" className={styles["repository-link"]}>
          Node.js
        </a>{" "}
        project , and{" "}
        <a href="https://github.com/jasmingubeljic/reservation-stats" target="_blank" className={styles["repository-link"]}>
          reservation stats
        </a>{" "}
        .
      </p>
    </>
  );
}
