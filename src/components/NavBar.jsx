import React, { useEffect, useState } from "react";
import "../sections/Style.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const handleScroll = () => {
      const scrollPos = window.scrollY + 80;
      let currentSection = sections[0].id;

      sections.forEach((section) => {
        if (scrollPos >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);

      const titleMap = {
        home: "Rukmini | Home",
        about: "Rukmini | About",
        projects: "Rukmini | Projects",
        blogs: "Rukmini | Blogs",
        contact: "Rukmini | Contact",
      };

      document.title = titleMap[currentSection] || "Rukmini | Portfolio";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = ["Home", "About", "Projects", "Blogs", "Contact"];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false);
      setActiveSection(id);
      document.title = `Rukmini | ${id.charAt(0).toUpperCase() + id.slice(1)}`;
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
        <div className="container">
          <a className="nav-link navbar-brand fw-bold" href="#home">
            Rukmini Pillai
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => {
                const id = item.toLowerCase();
                return (
                  <li className="nav-item" key={id}>
                    <a
                      className={`nav-link fw-medium px-3 btn ${
                        activeSection === id ? "text-danger active-underline" : " "
                      }`}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(id);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar d-lg-none ${sidebarOpen ? "open" : ""}`}>
        <div className="text-end p-3">
          <button onClick={() => setSidebarOpen(false)}>×</button>
        </div>
        <ul className="list-unstyled text-center mt-4">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={id} className="my-3">
                <a
                  href={`#${id}`}
                  className={`fw-bold fs-5 ${
                    activeSection === id ? "text-danger" : "text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(id);
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;