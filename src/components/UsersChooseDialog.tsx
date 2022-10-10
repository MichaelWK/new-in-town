import Modal from "@mui/material/Modal";
import React from "react";
import "./UsersChooseDialog.css";

export const UsersChooseDialog = ({ handleClose }: any) => {
  const closeModal = () => {
    handleClose();
  };

  return (
    <Modal
      open={true}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="user-choose-dialog__modal">Hello</div>
    </Modal>
  );
};
