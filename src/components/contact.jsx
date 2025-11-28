import React, { useState } from "react";
import "../css/contact.css";

function Contact() {
  const [success, setSuccess] = useState(false);

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Feel free to reach out through this form. I will get back to you soon!
      </p>

      <div className="form-container">
        <form
          action="https://formspree.io/f/mnnklqal"
          method="POST"
          className="contact-form"
          onSubmit={() => setSuccess(true)}
        >
          <div className="input-group">
            <label>Your Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="input-group">
            <label>Your Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="input-group">
            <label>Your Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>

          {success && (
            <p className="success-msg">Message sent successfully ✔</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
