import { useEffect, useState } from "react";
import styles from "../styles/components/navbar.module.css";

type NavbarProps = {
  openLegal: () => void;
  closeLegal: () => void;
};

export default function Navbar({ openLegal, closeLegal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function checkScroll() {
      setIsOpen(window.scrollY < 60);
    }

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles.open : styles.closed}`}
    >
      <nav>
        <ul className={styles.ul}>
          <div className={styles.left}>
            <li>
              <a href="#" onClick={closeLegal}>
                <img className={styles.logo} src="/logo_1.png" alt="" />
              </a>
            </li>
          </div>
          <div className={styles.right}>
            <li>
              <a href="#" onClick={closeLegal}>
                Home
              </a>
            </li>
            <li>
              <a href="#apps" onClick={closeLegal}>
                Apps
              </a>
            </li>
            <li>
              <a href="#" onClick={openLegal}>Legal</a>
            </li>
            <li>
              <a href="#contact" onClick={closeLegal}>
                Contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
