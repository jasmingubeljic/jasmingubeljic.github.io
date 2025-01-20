import styles from "./page.module.css";

export default function Portfolio() {
  return (
    <>
      <p>
        I am nearing the completion of my portfolio, and in the meantime, I
        invite you to explore some of my repositories. For a glimpse into my
        capabilities, I suggest taking a look at a{" "}
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
        interest in back-end development, you will find a{" "}
        <a
          href="https://github.com/jasmingubeljic/estore-server"
          target="_blank"
          className={styles["repository-link"]}
        >
          eStore
        </a>{" "}
        for your review.
      </p>
    </>
  );
}
