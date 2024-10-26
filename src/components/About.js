import React from "react";
import { motion } from "framer-motion";
import "./About.css"; // Ensure you have this CSS file for styles

const About = () => {
  return (
    <motion.section
      className="full-screen"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        <img src="/sakib.JPG" alt="Profile" className="about-image" />
        <div className="gap"></div>
        <h2 className="name-header">MD NAZMUS SAKIB TAMIM</h2>
        <div className="gap"></div> {/* Added gap for spacing */}
        <div className="about-description">
          <p>
            I am a passionate Frontend Developer with a strong commitment to
            crafting dynamic and user-friendly web applications. With a solid
            foundation in React, JavaScript, HTML, and CSS, I thrive on turning
            complex problems into elegant solutions. My goal is to create
            seamless user experiences that not only meet but exceed
            expectations.
          </p>
          <p>
            I continuously seek opportunities to enhance my skills and stay
            updated with the latest trends in web development. I believe that
            every project is a chance to learn and grow, and I am excited to
            collaborate with forward-thinking teams to bring innovative ideas to
            life.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
