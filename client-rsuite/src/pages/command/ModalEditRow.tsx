import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Uploader } from 'rsuite';
import { updateCommandChildren } from '../../data/database'

const ModalEditRow = (props) => {
  const { rowData, database, setDatabase, onClose, ...rest } = props;
  const [initialValue, setInitialValue] = useState({
    id: rowData.id,
    label: rowData.label,
    answer: rowData.answer,
  })

  const [formValue, setFormValue] = React.useState(initialValue);
  const [files, setFiles] = React.useState<Object[] | any>([]);

  const handleSubmit = () => {
    onClose();
    setInitialValue(formValue);
    const newDatabase = database.map(data => {
      const newChildren = data.children.map(child => {
        if (child.id === rowData.id) {
          return { ...child, ...formValue };
        }
        return child;
      })
      return { ...data, children: newChildren };
    }
    )
    const formData = new FormData();
      formData.append('id', formValue.id);
      formData.append('label', formValue.label);
      formData.append('answer', formValue.answer);
    if(files.length !== 0) {
      files.map(file => {
        formData.append('file', file.blobFile)
      })
    }
    setDatabase(newDatabase);
    updateCommandChildren(formData);
  }

  const handleCancel = () => {
    onClose();
    setFormValue(initialValue);
  }
  useEffect(() => {
    setFormValue({
      id: rowData.id,
      label: rowData.label,
      answer: rowData.answer,
    })
  }, [database])
  return (
    <>
      <Modal onClose={handleCancel} {...rest} size="xs" keyboard={true}>
        <Modal.Header>
          <Modal.Title>Change Command</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid formValue={formValue} onChange={setFormValue} {...rest} >
            <Form.Group controlId="command-9">
              <Form.ControlLabel>Command</Form.ControlLabel>
              <Form.Control name="label" />
            </Form.Group>
            <Form.Group controlId="answer-9">
              <Form.ControlLabel>Bot answer</Form.ControlLabel>
              <Form.Control name="answer" />
            </Form.Group>
            <Form.Group controlId="file-10">
            <Form.ControlLabel>Upload</Form.ControlLabel>
            <Uploader
              name="file"
              autoUpload={false}
              action="#"
              onChange={setFiles}
              multiple
              draggable
            >
              <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>Click or Drag files to this area to upload</span>
              </div>
            </Uploader>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} appearance="primary">
            Confirm
          </Button>
          <Button onClick={handleCancel} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditRow;