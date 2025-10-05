import React, { useEffect, useState } from "react";
import "./Style.css";

// Videos
import Video1 from "../assets/videos/ajmi-kaima-rice.mp4";
import Video2 from "../assets/videos/ajmi-palappam-podi.mp4";
import Video3 from "../assets/videos/goldwinner-oil.mp4";
import Video4 from "../assets/videos/lulu-coconut-oil.mp4";
import Video5 from "../assets/videos/lulu-eid.mp4";
import Video6 from "../assets/videos/lulu-jack-fruit.mp4";
import Video7 from "../assets/videos/lulu-mango-mania.mp4";
import Video8 from "../assets/videos/lulu-vishu1.mp4";
import Video9 from "../assets/videos/lulu-vishu2.mp4";
import Video10 from "../assets/videos/lulu-world-food1.mp4";
import Video11 from "../assets/videos/lulu-world-food2.mp4";
import Video12 from "../assets/videos/lulu-world-food3.mp4";
import Video13 from "../assets/videos/malayoram-coconut-oil.mp4";
import Video14 from "../assets/videos/social-media-video1.mp4";
import Video15 from "../assets/videos/social-media-video2.mp4";
import Video16 from "../assets/videos/social-media-video3.mp4";
import Video17 from "../assets/videos/social-media-video4.mp4";
import Video18 from "../assets/videos/social-media-video5.mp4";
import Video19 from "../assets/videos/social-media-video6.mp4";
import Video20 from "../assets/videos/social-media-video7.mp4";

// Images
import image1  from "../assets/images/posters/image1.jpg";
import image2  from "../assets/images/posters/image2.jpg";
import image3  from "../assets/images/posters/image3.jpg";
import image4  from "../assets/images/posters/image4.jpg";
import image5  from "../assets/images/posters/image5.jpg";
import image6  from "../assets/images/posters/image6.jpg";
import image7  from "../assets/images/posters/image7.jpg";
import image8  from "../assets/images/posters/image8.jpg";
import image9  from "../assets/images/posters/image9.jpg";
import image10 from "../assets/images/posters/image10.jpg";
import image11 from "../assets/images/posters/image11.jpg";
import image12 from "../assets/images/posters/image12.jpg";
import image13 from "../assets/images/posters/image13.jpg";
import image14 from "../assets/images/posters/image14.jpg";
import image15 from "../assets/images/posters/image15.jpg";
import image16 from "../assets/images/posters/image16.jpg";
import image17 from "../assets/images/posters/image17.jpg";
import image18 from "../assets/images/posters/image18.jpg";
import image19 from "../assets/images/posters/image19.jpg";
import image20 from "../assets/images/posters/image20.jpg";
import image21 from "../assets/images/posters/image21.jpg";
import image22 from "../assets/images/posters/image22.jpg";

const Projects = () => {
  const categories = ["Assistant to Art Director","Assistant to Creative director","Copywriter","Social media script"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const projects = [
    // Assistant to Art Director
    {
      name: "Ajmi - Kaima rice",
      type: "Social media ad",
      description:
        "Worked for Ajmi Kaima Rice’s social media ad campaign on Ramadan, conceptualizing the visual, styling the product shots, and coordinating with the creative and production teams to highlight the premium quality and authenticity of Kaima rice. Focused on creating eye-catching visuals that resonate with the target audience and engagement across social platforms.",
      video: Video1,
      category: "Assistant to Art Director",
    },
    {
      name: "Ajmi - Palappam podi",
      type: "Social media ad",
      description:
        "Worked for an Easter Special campaign of Ajmi, assisting in conceptualizing and executing festive visuals that capture the spirit of Easter. Coordinated with the creative and production teams on set design, props, and styling to create vibrant, engaging content. Focused on delivering visuals that evoke celebration, joy, and brand connection for the seasonal campaign.",
      video: Video2,
      category: "Assistant to Art Director",
    },
    {
      name: "Gold Winner",
      type: "TVC / Telungu",
      description:
        "Worked as Assistant Art Director for Gold Winner Peanut Oil’s Telugu Kitchen Attire campaign. Assisted in conceptualizing and styling the kitchen setup, props, and character attire to reflect authentic Telugu culinary culture. Collaborated closely with the creative and production teams to ensure the visuals highlighted the product’s premium quality while connecting with the target audience.",
      link: "https://example.com",
      video: Video3,
      category: "Assistant to Art Director",
    },
    {
      name: "Lulu",
      type: "TVC / UAE",
      description:
        "Worked as Assistant Art Director for Lulu Coconut Oil TVC targeting UAE audience. Assisted in conceptualizing and executing the visual style, including set design, props, and product presentation, to highlight the purity of the coconut oil. Collaborated with the creative and production teams to ensure the campaign visuals were vibrant.",
      video: Video4,
      category: "Assistant to Art Director",
    },
    {
      name: "Lulu Ramadan",
      type: "TVC",
      description:
        "Lulu Ramadan TVC, contributing to the visual storytelling and overall creative execution. Assisted in designing sets, selecting props, and coordinating with the production and creative team to ensure the campaign to translated on screen with maintaining brand consistency by engaging the audience.",
      video: Video5,
      category: "Assistant to Art Director",
    },
    {
      name: "Lulu Jackfruit fest",
      type: "Social media ad",
      description:
        "Lulu Jackfruit Fest social media campaign, Conceptualized the perspective of the jackfruit, creatively showcasing a variety of dishes made from it. Assisted in styling, set design, and props to make each preparation visually appealing by highlighting the versatility of jackfruit. Collaborated closely with the creative and production teams to craft engaging content that connects with the audience and celebrates the Jackfruit fest of Lulu.",
      video: Video6,
      category: "Assistant to Art Director",
    },
    {
      name: "Lulu - Mangomania",
      type: "Social media ad",
      description:
        "For Lulu Mangomania (Mango Fest) social media campaign, assisted in conceptualizing and executing the variety and richness of mangoes. Styled the fruit displays, foods, props, and set design to make the content visually appealing. Collaborated with the creative and production teams to produce engaging visuals that capture the essence of the mango festival and connect with the audience.",
      video: Video7,
      category: "Assistant to Art Director",
    },
    {
      name: "Lulu - Vishu Sadhya",
      type: "Social media ad",
      description:
        "Lulu Vishu Sadhya social media campaign, Conceptualized and executed visuals from the monologue of a young boy, highlighting him and the family during the festive feast. Assisted in set design, props, and styling to create an authentic, warm, and engaging depiction of Vishu Sadhya. Collaborated with the creative and production teams to ensure the visuals complemented the narrative and captured the festival mood.",
      video: Video8,
      category: "Assistant to Art Director",
    },
    {
      name: "Lulu - Vishu coupon",
      type: "Social media ad",
      description:
        "Lulu Vishu Coupon social media campaign, Conceptualized and executed visuals from a boy’s perspective as he experiences buying a toy with the Lulu coupon. Assisted in set design, props, and styling to create a playful and engaging storytelling experience. Collaborated with the creative and production teams to ensure the visuals captured the excitement of the moment while highlighting the brand’s festive offer.",
      video: Video9,
      category: "Assistant to Art Director",
    },
    {
      name: "Lulu Food Fest",
      type: "Social media ad",
      description:
        "Worked as Assistant Art Director for Lulu Food Fest social media campaign, which showcased cross-cultural culinary experiences across three unique themes: • First one, focusing on the theme of an Arabic man enjoying Indian cuisine. Assisted in conceptualizing and styling the set, props, and food presentation to authentically capture the cultural and culinary experience. Collaborated with the creative and production teams to ensure the visuals were vibrant, engaging, and highlighted the joy of cross-cultural dining.",
      video: Video10,
      category: "Assistant to Art Director",
    },
    {
      name: "Lulu Food Fest",
      type: "Social media ad",
      description:
        "A social media campaign of Lulu Food fest showcased cross-cultural culinary experiences across three unique themes: • Second, focusing on the theme of an Indian woman enjoying Filipino cuisine. Assisted in conceptualizing and styling the set, props, and food presentation to authentically capture the cultural and culinary experience. Collaborated with the creative and production teams to make engaging visuals that celebrate cross-cultural dining and the joy of discovering new flavors.",
      video: Video11,
      category: "Assistant to Art Director",
    },
    {
      name: "Lulu Food Fest",
      type: "Social media ad",
      description:
        "Lulu social media campaign of Food fest showcased cross-cultural culinary experiences across three unique themes: • Third, focusing on the theme of a Filipino woman experiencing Arabic cuisine, assisted in conceptualizing and styling the set, props, and food presentation to authentically showcase the cultural and culinary experience. Collaborated with the creative and production teams to highlight cross-cultural dining and the excitement of exploring new flavors",
      video: Video12,
      category: "Assistant to Art Director",
    },

    // Assistant to Creative director
    {
      name: "Malayoram Coconut oil",
      type: "TVC",
      description:
        "Worked as Assistant to Creative Director for the Malayoram Coconut Oil campaign. Assisted in recce, shoot planning, and shot divisions, ensuring the execution of the creative vision. Coordinated with the production team to organize locations, props, and setups, while supporting the director in translating concepts into visually appealing content.",
      video: Video13,
      category: "Assistant to Creative director",
    },

    // Copywriter - Images
    { image: image1, category: "Copywriter" },
    { image: image2, category: "Copywriter" },
    { image: image3, category: "Copywriter" },
    { image: image4, category: "Copywriter" },
    { image: image5, category: "Copywriter" },
    { image: image6, category: "Copywriter" },
    { image: image7, category: "Copywriter" },
    { image: image8, category: "Copywriter" },
    { image: image9, category: "Copywriter" },
    { image: image10, category: "Copywriter" },
    { image: image11, category: "Copywriter" },
    { image: image12, category: "Copywriter" },
    { image: image13, category: "Copywriter" },
    { image: image14, category: "Copywriter" },
    { image: image15, category: "Copywriter" },
    { image: image16, category: "Copywriter" },
    { image: image17, category: "Copywriter" },
    { image: image18, category: "Copywriter" },
    { image: image19, category: "Copywriter" },
    { image: image20, category: "Copywriter" },
    { image: image21, category: "Copywriter" },
    { image: image22, category: "Copywriter" },

    // Social media script
    {
      name: "Fly with spouse. Script on Newzealand spouse visa opportunity.",
      type: "",
      description: "",
      video: Video14,
      category: "Social media script",
    },
    {
      name: "Study in Newzealand, How much does it cost?",
      type: "",
      description: "",
      video: Video15,
      category: "Social media script",
    },
    {
      name: "Thrissur Hilite mall hosting the biggest bookfair.",
      type: "",
      description: "",
      video: Video16,
      category: "Social media script",
    },
    {
      name: "Dream of world class education?",
      type: "",
      description: "",
      video: Video17,
      category: "Social media script",
    },
    {
      name: "Why students choose Newzealand for overseas education.",
      type: "",
      description: "",
      video: Video18,
      category: "Social media script",
    },
    {
      name: "Newzealand spouse work visa opportunity.",
      type: "",
      description: "",
      video: Video19,
      category: "Social media script",
    },
    {
      name: "Why study in Newzealand?",
      type: "",
      description: "",
      video: Video20,
      category: "Social media script",
    },
  ];

  return (
  <section id="projects" className="py-5">
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">Table of Contents</h2>

      <ul className="nav justify-content-center mb-5">
        {categories.map((cat) => (
          <li key={cat} className="nav-item">
            <button
              className={`nav-link btn ${
                activeCategory === cat ? "active-underline fw-bold" : "text-white"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      <div className="projects-container">
        {projects
          .filter((p) => p.category === activeCategory)
          .map((project, idx) => (
            <div key={idx} className="card">
              {project.video && (
                <div className="video-container">
                  <video src={project.video} controls controlsList="nodownload"></video>
                </div>
              )}

              {project.image && (
                <div className="protected-media">
                  <img src={project.image} alt="" />
                </div>
              )}

              {project.video && (
                <div className="project-details">
                  <h6>{project.name}</h6>
                  <p className="text-danger">{project.type}</p>
                  <p className="small">{project.description}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  </section>
);
};

export default Projects;