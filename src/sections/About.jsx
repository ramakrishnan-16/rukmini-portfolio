import React from "react";
import "./Style.css";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container about-container p-5 mt-5">
        <h2 className="about-heading mb-4 text-center fw-bold">About Me</h2>
        <p className="about-text">
          I am Rukmini, destined for a creative journey. I graduated with a bachelor's degree in History from Maharajas College in Ernakulam and completed a Postgraduate Diploma in Television Journalism from Kerala Media Academy in Kakkanad.
        </p>
        <p className="about-text">
          I write creatively, including short verses, blogs, and stories. I started working on TVCs and social media advertisements as an Assistant Art Director and currently work as a Copywriter for a Kochi-based digital marketing company.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <a href="#contact" className="btn btn-danger about-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default About;