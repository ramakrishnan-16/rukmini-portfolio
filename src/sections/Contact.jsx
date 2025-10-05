import React from "react";
import "./Style.css";

const Contact = () => {

  const socialLinks = {
    LinkedIn: "https://www.linkedin.com/in/rukmini-689437288",
    Instagram: "https://www.instagram.com/___.rukmini.__",
  };

  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Get in Touch</h2>
        <p className="mb-5 text-white">
          I’m always open to new projects, collaborations.
        </p>

        <div className="row text-center">
          
          {/* Email */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Email</h5>
            <p>
              <a
                href="mailto:rukminishankari07@gmail.com"
                className="link fw-medium text-decoration-none"
              >
                rukminishankari07@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Social</h5>
            <ul className="list-unstyled">
              {Object.entries(socialLinks).map(([social, url]) => (
                <li key={social} className="mb-2">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {["Home", "About", "Projects", "Blogs", "Contact"].map((link) => (
                <li key={link} className="mb-2">
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;