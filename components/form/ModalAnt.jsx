import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalAnt = ({dataUser}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        show form data
      </Button>
      <Modal title="Information:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{dataUser.number}</p>
        <p>{dataUser.text}</p>
        <p>{dataUser.password}</p>
        <p>{dataUser.gmail}</p>
        <p>{dataUser.checkbox}</p>
      </Modal>
    </>
  );
};
export default ModalAnt;