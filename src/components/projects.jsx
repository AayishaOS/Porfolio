import React from "react";
import "../css/projects.css";

function Projects() {
  const projects = [
    {
      title: "PRODUCT DETAILS APPLICATION",
      description: "A MERN-stack solution for supermarkets enabling efficient product information management through barcode lookup. Our extensive database, updated via Python script and Google API, allows employees to retrieve detailed product information, manage inventory, and sync data to their store's database."
    },
    {
      title: "HALL BOOKING SYSTEM",
      description: "Developed a web-based Hall Booking System using PHP, MySQL, HTML, and CSS to streamline hall bookings within a college. The system enables users to check availability, submit requests, and receive confirmations in real-time, improving administrative efficiency. Received a Certificate of Recognition from the college for this project."
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
