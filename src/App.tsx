import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Apps />
      <div className={styles.bottom}>
        <Contact />
        <Legal />
      </div>
    </main>
  );
}
