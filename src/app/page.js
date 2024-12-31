import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link
                className={styles["menu-link"]}
                href="/assets/Jasmin-G-Resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
                locale={false}
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
        <h1 className={styles["name-heading"]}>
          Jasmin <span className={styles["last-name"]}>Gubeljić</span>
        </h1>
        <h2 className={styles["profession-heading"]}>full-stack developer</h2>
      </header>
      <main>
        <p className={styles["about-me"]}>
          I am nearing the completion of my portfolio, and in the meantime, I
          invite you to explore some of my repositories. For a remarkable
          front-end showcase, I suggest taking a look at a{" "}
          <a
            href="https://github.com/jasmingubeljic/estore-client"
            target="_blank"
            className={styles["repository-link"]}
          >
            shop project
          </a>{" "}
          built with React. Additionally, my{" "}
          <a
            href="https://github.com/jasmingubeljic/estore-client"
            target="_blank"
            className={styles["repository-link"]}
          >
            Movimentum
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/jasmingubeljic/estore-client"
            target="_blank"
            className={styles["repository-link"]}
          >
            Stoille
          </a>{" "}
          projects highlight my proficiency in Vanilla CSS and Vanilla JS. If
          you have an interest in back-end development, you will also find a{" "}
          <a
            href="https://github.com/jasmingubeljic/estore-server"
            target="_blank"
            className={styles["repository-link"]}
          >
            Node JS
          </a>{" "}
          project available for your review.
        </p>
      </main>
      <footer>
        <ul>
          <li>jasmin.g@tutanota.com</li>
        </ul>
      </footer>
    </>
  );
}
