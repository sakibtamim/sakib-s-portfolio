import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="experience-heading">Work Experience</h2>
      <div className="experience-box">
        <ul className="experience-list">
          <li className="experience-item">
            <h3>IT Executive</h3>
            <h4>Innoverse Technology</h4>
            <p>2022 - 2024</p>
            <ul>
              <li>
                Boosted sales by actively engaging with customers, identifying
                their needs, and recommending suitable products and services,
                resulting in increased revenue and customer loyalty.
              </li>
              <li>
                Ensured customer satisfaction through friendly and personalized
                service, fostering a positive shopping experience that made
                customers feel valued and appreciated.
              </li>
              <li>
                Managed inventory effectively by monitoring stock levels,
                analyzing sales trends, and implementing reorder processes to
                maintain optimal stock levels and prevent shortages.
              </li>
              <li>
                Addressed customer inquiries with excellent support, providing
                timely and accurate information, resolving issues, and ensuring
                a high level of customer satisfaction.
              </li>
              <li>
                Reviewed sales data to spot trends and improve strategies.
              </li>
              <li>
                Gathered customer feedback to enhance products and services.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Experience;
