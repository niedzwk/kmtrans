import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_section">
      <h2>Kontakt</h2>
      <div className="contact_details">
        <img src="img/social.png" alt="social media" />
        <p>
          <i class="far fa-envelope"></i> majewski.trans@onet.eu
        </p>
        <p>
          <i class="fas fa-mobile-alt"></i> 503-157-035
        </p>
      </div>
    </div>
  );
};

export default Contact;
