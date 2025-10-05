import React from "react";
import Navbar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="blogs"><Blogs /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;