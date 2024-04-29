import { useEffect } from "react";
import CourseSection from "./Components/CourseSection";
import FAQSection from "./Components/FAQSection";
import FooterSection from "./Components/FooterSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <CourseSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

export default App;
