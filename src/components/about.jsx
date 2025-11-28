
import "../css/about.css";
import { FiFileText } from "react-icons/fi";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a Master's student in Software Application Development at CUSAT, Kochi. 
          I am passionate about building innovative applications using modern technologies 
          like MERN stack and Android development. I enjoy solving real-world problems 
          through code and continuously learning to enhance my skills.
        </p>
        <p>
          My goal is to deliver solutions that make a difference while growing as a professional 
          in the software development field. I am committed to staying up-to-date with the 
          latest tech trends and applying them effectively in my projects.
        </p>
        <a href="https://drive.google.com/file/d/17AHxGAZsI4tzDjWJgA-kyex6o2mM3FcJ/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="resume-link"><FiFileText /> <span>Resume</span></a>
      </div>
    </section>
  );
}

export default About;
