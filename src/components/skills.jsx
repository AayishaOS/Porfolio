import React from "react";
import "../css/skills.css";
import { FiCheckCircle } from "react-icons/fi";

function Skills() {
  const skills = [
    "MERN Stack",
    "Kotlin and Android Development",
    "Java and Spring Boot",
    "MongoDB, MySQL and Firebase",
    "Swift and iOS Development"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2>My Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <FiCheckCircle className="skill-icon" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
