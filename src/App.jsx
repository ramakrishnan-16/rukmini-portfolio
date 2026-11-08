import React from "react";
import Navbar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import WorkMoto from "./sections/WorkMoto";
import Projects from "./sections/Projects";
import BTS from "./sections/BTS";
import Brands from "./sections/Brands";
// import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="workmoto"><WorkMoto /></section>
      <section id="projects"><Projects /></section>
      <section id="bts"><BTS /></section>
      <section id="brands"><Brands /></section>
      {/* <section id="blogs"><Blogs /></section> */}
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;