import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./Pages/Hero";
import About from "./Pages/About.jsx";
import Experience from "./Pages/Experience.jsx";
import Skills from "./Pages/Skills.jsx";
import Projects from "./Pages/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Certificates from "./Pages/Certificates.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
