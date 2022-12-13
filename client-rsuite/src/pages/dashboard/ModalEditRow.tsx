import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Modal, Uploader, Stack } from 'rsuite';
import { updateStudents } from '@/data/database';

const Textarea = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const ModalEditRow = (props) => {
  const { rowData, database, setDatabase, onClose, ...rest } = props;
  const [initialValue, setInitialValue] = useState({})
  
  const [formValue, setFormValue] = React.useState(initialValue);

  const handleSubmit = () => {
    onClose();
    setInitialValue(formValue);
    // add to database

    const newDatabase = database.map(data => {
      if(data.id == rowData.id) {
        return {...data, ...formValue};
      }
      return data;
    })
    setDatabase(newDatabase);
    updateStudents(newDatabase);
  }

  const handleCancel = () => {
    onClose();
    setFormValue(initialValue);
  }

  useEffect(() => {
    setInitialValue({
      name: rowData.name,
      group: rowData.group,
      year: rowData.year,
      telephone: rowData.telephone,
      email: rowData.email,
      note: rowData.note,
      linkVK: rowData.linkVK,
    })
    setFormValue({
      name: rowData.name,
      group: rowData.group,
      year: rowData.year,
      telephone: rowData.telephone,
      email: rowData.email,
      note: rowData.note,
      linkVK: rowData.linkVK,
    })
  }, [database])

  return (
    <>
      <Modal onClose={handleCancel} {...rest} size="xs" keyboard={true}>
        <Modal.Header>
          <Modal.Title>Edit row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid formValue={formValue} onChange={setFormValue} {...rest} >
            <Form.Group>
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Stack>
              <Form.Group>
                <Form.ControlLabel>Group</Form.ControlLabel>
                <Form.Control name="group" style={{ width: 200 }} />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Year</Form.ControlLabel>
                <Form.Control name="year" type="email" />
              </Form.Group>
            </Stack>
            <Form.Group>
              <Form.ControlLabel>Telephone</Form.ControlLabel>
              <Form.Control name="telephone" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Note</Form.ControlLabel>
              <Form.Control rows={10} name="note" accepter={Textarea} />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Link VK</Form.ControlLabel>
              <Form.Control name="linkVK" />
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