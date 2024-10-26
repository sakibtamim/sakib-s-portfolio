import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Volunteer.css";
import ImageModal from "./ImageModal"; // Import the modal component

const Volunteer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <motion.section
      id="volunteer"
      className="volunteer-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="volunteer-heading">Volunteer Contributions</h2>
      <ul className="volunteer-list">
        <li className="volunteer-item">
          <div
            className="volunteer-image-container"
            onClick={() =>
              handleImageClick(
                `${process.env.PUBLIC_URL}/images/basissoftexpo.JPG`
              )
            }
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/basissoftexpo.JPG`}
              alt="BASIS SoftExpo"
              className="volunteer-image"
            />
          </div>
          <div className="volunteer-details">
            <h3>BASIS SoftExpo, Dhaka</h3>
            <p>Mar 2017 - Mar 2018</p>
            <ul>
              <li>
                Increased attendee satisfaction by 20% through effective
                feedback and improvements.
              </li>
              <li>
                Coordinated logistics for workshops, ensuring smooth scheduling
                and resource allocation.
              </li>
              <li>
                Led on-site activities with volunteers, enhancing team
                efficiency through training and role management.
              </li>
              <li>
                Created promotional materials that boosted event attendance and
                engagement.
              </li>
              <li>
                Facilitated communication among team members to streamline
                operations and foster attendee interaction.
              </li>
            </ul>
          </div>
        </li>
        <li className="volunteer-item">
          <div
            className="volunteer-image-container"
            onClick={() =>
              handleImageClick(`${process.env.PUBLIC_URL}/images/blood.jpg`)
            }
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/blood.JPG`}
              alt="Blood+"
              className="volunteer-image"
            />
          </div>
          <div className="volunteer-details">
            <h3>Blood+</h3>
            <p>Mar 2017 - Apr 2021</p>
            <ul>
              <li>Promoted awareness of blood donation in the community.</li>
              <li>
                Organized blood donation drives to encourage participation.
              </li>
              <li>Engaged with local people to support donation efforts.</li>
              <li>
                Worked with healthcare professionals to ensure safe donations.
              </li>
              <li>
                Developed outreach materials to educate and motivate potential
                donors.
              </li>
            </ul>
          </div>
        </li>
        <li className="volunteer-item">
          <div
            className="volunteer-image-container"
            onClick={() =>
              handleImageClick(`${process.env.PUBLIC_URL}/images/itgeeks.JPG`)
            }
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/itgeeks.JPG`}
              alt="IT Geeks"
              className="volunteer-image"
            />
          </div>
          <div className="volunteer-details">
            <h3>IT Geeks</h3>
            <p>Feb 2017 - Aug 2019</p>
            <ul>
              <li>
                Supported educational workshops, assisting facilitators in
                delivering technical content.
              </li>
              <li>
                Contributed to training sessions by preparing materials and
                coordinating logistics.
              </li>
              <li>
                Helped organize events, ensuring smooth operations and timely
                execution.
              </li>
              <li>
                Engaged with students to promote active participation and
                enhance their learning experience.
              </li>
              <li>
                Collaborated with team members to foster a positive and
                interactive environment.
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </motion.section>
  );
};

export default Volunteer;
