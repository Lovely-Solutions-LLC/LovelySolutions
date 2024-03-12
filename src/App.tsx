import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Legal from "./pages/Legal";

export default function App() {
  const [isShowingLegal, setIsShowingLegal] = useState(false);

  function openLegal() {
    setIsShowingLegal(true);
  }

  function closeLegal() {
    setIsShowingLegal(false)
  }

  return (
    <main>
      <Navbar openLegal={openLegal} closeLegal={closeLegal} />
      {isShowingLegal ? (
        <Legal />
      ) : (
        <div>
          <Home />
          <Apps />
          <Contact />
        </div>
      )}
    </main>
  );
}
