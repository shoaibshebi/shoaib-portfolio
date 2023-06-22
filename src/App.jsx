import styles from "./styles";
import "./App.css";
import BestChoice from "./components/Projects";
import Hero from "./components/About";
import ExpertOpn from "./components/Testimonials";
import Services from "./components/Services";
import Calculate from "./components/Contact";
import Footer from "./components/Footer";
import DemoProjs from "./components/DemoProjs/DemoProjs";
import ThreeDSection from "./components/ThreeDSection/ThreeDSection";

function App() {
  return (
    <>
      <ThreeDSection />
      <div className={`${styles.paddings} relative w-full inset-0 `}>
        <Hero />
        <DemoProjs />
        <BestChoice />
        <Services />
        <ExpertOpn />
        <Calculate />
      </div>
      <Footer />
    </>
  );
}

export default App;
