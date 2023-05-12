import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateType = ({show, onHide}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Додати новий тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={'Впишіть назву тупа'} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрити</Button>
        <Button variant='outline-success' onClick={onHide}>Додати</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
