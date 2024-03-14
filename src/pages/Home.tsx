import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import styles from "../styles/home.module.css";

export default function Home() {
  const [scroll, setScroll] = useState(0);
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    function getPageHeight() {
      setPageHeight(window.innerHeight);
    }

    function getScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener("resize", getPageHeight);
    window.addEventListener("scroll", getScroll);

    return () => {
      window.removeEventListener("resize", getPageHeight);
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  function calculateOpacity() {
    if (scroll < 0) return 1;
    if (scroll > (pageHeight / 1.5)) return 0;
    return 1 - scroll / (pageHeight / 1.5);
  }

  return (
    <section className={styles.main} id="home">
      <div
        className={styles.img}
        style={{
          opacity: `${calculateOpacity()}`,
        }}
      />
      <Reveal duration={0.7}>
        <div className={styles["content-container"]}>
          <p className={styles.title}>Lovely Solutions</p>
          <p className={styles.subtitle}>Simple. Safe. Lovely.</p>
          <div className={styles.links}>
            <a href="#apps" className={styles.contact}>
              View Apps
            </a>
            <a href="#contact" className={styles.projects}>
              Contact Us
            </a>
          </div>
        </div>
      </Reveal>
      <div className={styles.right}></div>
    </section>
  );
}
