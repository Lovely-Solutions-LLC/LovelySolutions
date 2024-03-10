import styles from "../styles/apps.module.css";
import Reveal from "../components/Reveal";

export default function Apps() {
  return (
    <section className={styles.main} id="apps">
      <h1 className={styles.title}>Apps</h1>
      <div className={`${styles.project}`}>
        <div className={styles.imgs}>
          <Reveal from="bottom">
            <img
              className={styles["img-left"]}
              src="/projects/wordCatchingJournalMobile.png"
              alt=""
            />
          </Reveal>
          <Reveal from="right">
            <img
              className={styles["img-right"]}
              src="/projects/wordCatchingJournal.png"
              alt=""
            />
          </Reveal>
        </div>
        <Reveal from="bottom">
          <div className={styles["text-container"]}>
            <h2>Update Templates</h2>
            <ul className={styles.technologies}>
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
              <li>Sit</li>
            </ul>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              facere magnam vel debitis molestias accusantium ab nemo soluta,
              sequi voluptatibus?
            </p>
            <div className={styles.links}>
              <a
                className={styles.link}
                href=""
                target="_blank"
              >
                Install
              </a>
              {/* <a
                className={styles.link}
                href="https://github.com/mlinder10/WordCatchingJournal"
                target="_blank"
              >
                Source (web)
              </a>
              <a
                className={styles.link}
                href="https://github.com/mlinder10/WordCatchingJournalSwift"
                target="_blank"
              >
                Source (iOS)
              </a> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
