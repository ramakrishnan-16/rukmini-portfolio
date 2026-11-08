
import React, { useState, useEffect } from "react";
import "./Style.css";

import BTS1 from "../assets/images/BTS/BTS1.jpg";
import BTS2 from "../assets/images/BTS/BTS2.jpg";
import BTS3 from "../assets/images/BTS/BTS3.mp4";
import BTS4 from "../assets/images/BTS/BTS4.jpg";
import BTS5 from "../assets/images/BTS/BTS5.jpg";
import BTS6 from "../assets/images/BTS/BTS6.jpg";
import BTS7 from "../assets/images/BTS/BTS7.jpg";
import BTS8 from "../assets/images/BTS/BTS8.jpg";

const BTS = () => {
  const media = [
    { src: BTS1, type: "image" },
    { src: BTS2, type: "image" },
    { src: BTS3, type: "video" },
    { src: BTS4, type: "image" },
    { src: BTS5, type: "image" },
    { src: BTS6, type: "image" },
    { src: BTS7, type: "image" },
    { src: BTS8, type: "image" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + media.length) % media.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % media.length
    );
  };

  const currentMedia = media[currentIndex];

  return (
    <section id="bts" className="bts-section py-5">
      <div className="container text-center">

        <h2 className="bts-heading fw-bold mb-4">
          BEHIND THE SCENES
        </h2>

        <div className="bts-carousel">

          {currentMedia.type === "video" ? (
            <video
              key={currentIndex}
              src={currentMedia.src}
              className="bts-image"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              key={currentIndex}
              src={currentMedia.src}
              alt={`Behind the scenes ${currentIndex + 1}`}
              className="bts-image"
            />
          )}

          <button
            className="bts-control bts-prev"
            onClick={prevImage}
            aria-label="Previous media"
          >
            &#10094;
          </button>

          <button
            className="bts-control bts-next"
            onClick={nextImage}
            aria-label="Next media"
          >
            &#10095;
          </button>

        </div>

        <div className="bts-indicators mt-3">
          {media.map((_, index) => (
            <button
              key={index}
              className={`bts-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to media ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BTS;
