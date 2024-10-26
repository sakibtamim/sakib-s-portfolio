import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("about"); // Default active link

  const handleScroll = () => {
    const sections = [
      "about",
      "skills",
      "experience",
      "projects",
      "volunteer",
      "contact",
    ];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionOffsetTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;

        if (
          scrollPosition >= sectionOffsetTop &&
          scrollPosition < sectionOffsetTop + sectionHeight
        ) {
          setActiveLink(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          {[
            "about",
            "skills",
            "experience",
            "projects",
            "volunteer",
            "contact",
          ].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={activeLink === link ? "active" : ""}
                onClick={() => setActiveLink(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}{" "}
                {/* Capitalizes the first letter */}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
