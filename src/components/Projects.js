import React from "react";
import { motion } from "framer-motion";
import "./Projects.css"; // Ensure you have a corresponding CSS file

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-box">
        <ul className="projects-list">
          <li className="projects-item">
            <h3>
              1.
              <a href="https://github.com/sakibtamim/pizza-menu-react">
                Pizza Menu React
              </a>
            </h3>
            <p>
              Pizza Menu application built with React, allowing customers to
              choose pizzas from a menu that grays out items when out of stock
              and enables online ordering.
            </p>
          </li>
          <li className="projects-item">
            <h3>
              2.
              <a href="https://github.com/sakibtamim/infinity-scroll">
                Infinity Scroll
              </a>
            </h3>
            <p>
              An infinite scrolling application using the Unsplash API, allowing
              users to browse and load images continuously without the need for
              page refresh.
            </p>
          </li>
          <li className="projects-item">
            <h3>
              3.
              <a href="https://github.com/sakibtamim/light-dark-mode">
                Light & Dark Mode
              </a>
            </h3>
            <p>
              A light/dark mode toggle feature that lets users switch themes,
              with their choice saved and applied even after a refresh.
            </p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Projects;
