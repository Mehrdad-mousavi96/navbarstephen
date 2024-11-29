import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true)

  return (
    <div className="relative">
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>

        {showModal && <Modal />}
    </div>
  );
};

export default ModalPage;
