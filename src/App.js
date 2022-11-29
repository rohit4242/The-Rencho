// import components
import Hero from "./Components/Home/index";
// import Navbar from "./Layouts/Navbar";
import Skills from "./Components/Skills/index";
import Service from "./Components/Services/index";
import Projects from "./Components/Projects/index";
import Testimonials from "./Components/Testimonials/index";
import Hireme from "./Components/Hireme/index";
import Contact from "./Components/Contact/index";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      {/* <Navbar /> */}
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">JOHN ALEX</h6>
        <p>codeaprogram © All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;
