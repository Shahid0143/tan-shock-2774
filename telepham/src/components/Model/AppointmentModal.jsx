import React from "react";

const AppointmentModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>Book an Appointment</h2>
        {/* Add your appointment form here */}
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AppointmentModal;
