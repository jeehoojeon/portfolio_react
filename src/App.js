import "./assets/css/reset.css";
import "./assets/css/main_style.css";
import "./assets/css/font.css";

import FullGnb from "./components/FullGnb";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import School from "./components/School";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Final from "./components/Final";

function App() {
  return (
    <div className="wrap">
      <FullGnb />
      <Main />
      <AboutMe />
      <School />
      <Projects />
      <Skills />
      <Contact />
      <Final />
    </div>
  );
}

export default App;