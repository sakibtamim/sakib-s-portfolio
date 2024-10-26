import React from "react";
import "./ImageModal.css"; // Make sure to create this CSS file for styling

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Enlarged" className="modal-image" />
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
