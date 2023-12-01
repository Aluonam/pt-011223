import React, { useState } from 'react';
import { Button, Modal} from 'antd';

const AntModal = ({infoModal}) => {
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
        Body text
      </Button>
      <Modal title="Body text" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{infoModal}</p>
      </Modal>
    </>
  );
};
export default AntModal;