import React from "react";
import { motion } from "framer-motion";
import "./Skills.css"; // Ensure you have this CSS file for styles

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 80 },
  { name: "Git", level: 75 },
  { name: "MySQL", level: 70 },
  { name: "MongoDB", level: 65 },
];

const CircularProgress = ({ percentage }) => {
  const radius = 50; // Circle radius
  const stroke = 10; // Stroke width
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#76c7c0" // Progress color
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

const Skills = () => {
  return (
    <motion.section
      className="full-screen"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-container">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
            >
              <CircularProgress percentage={skill.level} />
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
