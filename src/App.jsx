import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects  from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home"><Home/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Projects/></section>
      <section id="contact"><Contact/></section>

      <Footer></Footer>
    </div>
  );
}

export default App;

