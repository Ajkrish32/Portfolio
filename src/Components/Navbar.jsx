import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="name">Shri Krishna Ajay P</div>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            {["home", "about", "projects", "experience", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={activeSection === item ? "active" : ""}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {["home", "about", "projects", "experience", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={activeSection === item ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
