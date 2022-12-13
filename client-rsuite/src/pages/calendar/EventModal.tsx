import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, DatePicker, ModalProps, Stack, Checkbox, InputPicker } from 'rsuite';
import { format } from 'date-fns';
interface EventModalProps extends ModalProps {
  onAddEvent: (event: React.MouseEvent) => void;
}

const groupArr = ["8191-21", "8191-22", "8191-31", "8191-11"].map(item => ({
  label: item,
  value: item
}));

const EventModal = (props) => {
  const { database, setDatabase, selectedDate, onClose, open, onAddEvent, ...rest } = props;
  const [initialValue, setInitialValue] = useState({})
  const [formValue, setFormValue] = useState<Object | any>(initialValue);
  const [hidden, setHidden] = useState(true);
  const [group, setGroup] = React.useState(null);


  // console.log(formValue);
  const handleAddEvent = () => {
    handleClose();
    formValue.start = format(selectedDate.start, 'yyyy-MM-dd')
    // formValue.end = format(selectedDate.end, 'yyyy-MM-dd')
    const newDatabase = [...database, formValue]
    setDatabase(newDatabase);
  }
  const handleClose = () =>{
    onClose();
    setHidden(true);
    setGroup(null);
  }
  useEffect(() => {
    setInitialValue({
      id: database.length + 1,
      title: "",
      group: "",
      allDay: false,
    })
    setFormValue({
      id: database.length + 1,
      title: "",
      group: "",
      allDay: false,
    })
  }, [database])
  return (
    <Modal open={open} onClose={handleClose} backdrop="static" {...rest}>
      <Modal.Header>
        <Modal.Title>Add a New Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fluid formValue={formValue} onChange={setFormValue} {...rest}>
          <Form.Group controlId="title">
            <Form.ControlLabel>Event Name</Form.ControlLabel>
            <Form.Control name="title" />
          </Form.Group>
          <Checkbox onChange={() => setHidden(!hidden)}>Remider to group</Checkbox>
          <Form.Group controlId="inputPicker" hidden={hidden}>
            <Form.ControlLabel>Select Group</Form.ControlLabel>
            <Form.Control value={group} onChange={setGroup} name="groupRemider" accepter={InputPicker} data={groupArr} />
          </Form.Group>
          <Form.Group controlId="start">
            <Form.ControlLabel>Event Date</Form.ControlLabel>
            <Stack spacing={6}>
              <DatePicker
                name='startDate'
                format="HH:mm:ss"
                block
                style={{ width: 200 }}
                placeholder="Start Time"
              />
              <DatePicker
                format="HH:mm:ss"
                block
                style={{ width: 200 }}
                placeholder="End Time"
              />
              <Checkbox>All Day</Checkbox>
            </Stack>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddEvent} appearance="primary">
          Submit
        </Button>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;
