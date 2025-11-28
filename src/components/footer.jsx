import React from "react";
import "../css/footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">

        <a
          href="https://www.linkedin.com/in/aayishaos/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/AayishaOS"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/aayisha_sudheer/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaInstagram />
        </a>

      </div>

      <p className="footer-text">© 2025 Aayisha O S. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
