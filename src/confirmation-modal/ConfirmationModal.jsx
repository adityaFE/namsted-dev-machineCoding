import React, { useState } from "react";
import "./styles.css";

function ConfirmationModal() {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");

  const handleModalOpenClick = () => {
    setShowModal(true);
  };

  const handleConfirmModal = () => {
    setShowModal(false);
    setStatus("Confirmed");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStatus("Cancelled");
  };

  return (
    <div className="modal-container">
      <button
        className="open-modal-btn"
        data-testid="open-modal-button"
        onClick={handleModalOpenClick}
      >
        Open Confirmation Modal
      </button>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-box" data-testid="confirmation-modal">
            <h2 className="modal-title" data-testid="modal-title">
              Confirm Action
            </h2>
            <p className="modal-message" data-testid="modal-message">
              Are you sure you want to proceed?
            </p>

            <div className="modal-buttons">
              <button
                className="confirm-btn"
                data-testid="confirm-button"
                onClick={handleConfirmModal}
              >
                Confirm
              </button>
              <button
                className="cancel-btn"
                data-testid="cancel-button"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {status && (
        <div className="action-status" data-testid="action-status">
          {status}
        </div>
      )}
    </div>
  );
}

export default ConfirmationModal;
