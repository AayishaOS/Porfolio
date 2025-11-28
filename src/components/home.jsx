import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../css/home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>
          Hi, I'm Aayisha O S
        </h1>
        <h2>
          I'm a{" "}
          <span className="typewriter">
            <Typewriter
              words={["Software Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p>
         I’m a Master’s student in Software Application Development, passionate about building real-world, impactful applications using modern technologies.
        </p> 
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Home;
