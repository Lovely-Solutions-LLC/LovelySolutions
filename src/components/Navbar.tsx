import { useEffect, useState } from "react";
import styles from "../styles/components/navbar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const path = useLocation().pathname;

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
              <a href="/#">
                <img className={styles.logo} src="/logo_1.png" alt="" />
              </a>
            </li>
          </div>
          <div className={styles.right}>
            <li>
              <a href="/#">Home</a>
            </li>
            {!path.includes("/legal") && (
              <>
                <li>
                  <a href="/#apps">Apps</a>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </>
            )}
            {path.includes("/legal") && (
              <>
                <li>
                  <a href="/legal/#pp">Privacy Policy</a>
                </li>
                <li>
                  <a href="/legal/#tos">Terms of Service</a>
                </li>
              </>
            )}
            <li>
              <Link to="/legal">Legal</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
