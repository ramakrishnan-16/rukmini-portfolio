
import React from "react";
import "./Style.css";

const Brands = () => {
  const brands = [
    { name: "LULU", color: "#E53935" },
    { name: "GOLD WINNER", color: "#F4C430" },
    { name: "AJMI", color: "#43A047" },
    { name: "EASTERN", color: "#FF7043" },
  ];

  return (
    <section id="brands" className="brands-section py-5">
      <div className="container-fluid text-center">

        <h2 className="brands-heading fw-bold mb-5">
          BRANDS WORKED WITH
        </h2>

        <div className="brands-marquee">
          <div className="brands-track">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                className="brand-name"
                key={index}
                style={{ color: brand.color }}
              >
                {brand.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;
