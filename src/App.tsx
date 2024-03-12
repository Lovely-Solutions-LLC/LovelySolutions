import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Apps />
      <Contact />
    </main>
  );
}
