import React from "react";
import profile from "../assets/images/profile.jpg";
import "./Style.css";

const Home = () => {

  return (
    <section id="home" className="home-section d-flex align-items-center justify-content-center text-white">
      <div className="container home-container d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        {/* Left Text Section */}
        <div className="home-text" style={{ flex: 1 }}>
          <h1 className="home-name fw-bold ms-5 mb-3">Rukmini Pillai</h1>
          <p className="home-role lead ms-5">
            Assistant Art Director {/* Production Designer / Assistant Creative Director / Copy Writer */}
          </p>
          <a href="#about" className="btn btn-danger home-btn ms-5 px-4 py-2 fw-medium">About Me</a>
        </div>

        {/* Right Image Section */}
        <div className="home-image-wrapper d-flex justify-content-center pe-2 justify-content-md-end" style={{ flex: 1 }}>
          <img
            src={profile}
            alt="Rukmini"
            className="home-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;