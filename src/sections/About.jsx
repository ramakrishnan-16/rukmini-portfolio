import React from "react";
import "./Style.css";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container about-container p-5 mt-5">
        <h2 className="about-heading mb-4 text-center fw-bold">ABOUT ME</h2>
        <p className="about-text">
          I'm Rukmini, From Kochi - Kerala. Graduated with a Bachelor's Degree in History from Maharajas College Ernakulam and a Postgraduate Diploma in Television Journalism from Kerala Media Academy  Kakkanad.  
        </p>
        <p className="about-text">
          I give credit to my passion for art. Began working on TVCs and Social Media advertisements as an Assistant Art Director, working for brands Food, also brands across Education.
        </p>Still figuring out the artistic pursuit...
        <div className="d-flex justify-content-center mt-4">
          <a href="#contact" className="btn btn-danger about-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default About;