
import React from "react";
import "./Style.css";

const WorkMoto = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container about-container p-5 mt-5">

        <h2 className="about-heading mb-4 text-center fw-bold">
          I CAN HELP YOU IN
        </h2>

        <h5>ART DIRECTION</h5>
        <p className="about-text mb-5">
          Set design, prop styling, and visual concept development -
          building the world a shoot lives in, from recce and colour
          palette to every frame.
        </p>

        <h5>ON-SET COORDINATION</h5>
        <p className="about-text">
          Bridging the creative and technical sides of a shoot -
          working closely with directors, food stylists and brand teams
          to keep vision and execution aligned from prep to final frame.
        </p>

        <div className="d-flex justify-content-center mt-4">
          <a href="#contact" className="btn btn-danger about-btn">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default WorkMoto;