import React from 'react';
import {
  Drawer,
  DrawerProps,
  Button,
  Form,
  Stack,
  Input
} from 'rsuite';
import { updateStudents } from '@/data/database';


const Textarea = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const DrawerView = (props) => {
  const { database, setDatabase, onClose, ...rest } = props;
  const [formValue, setFormValue] = React.useState({
    id: database.length + 1,
    id_vk: '',
    avatar: '',
    name: '',
    group: '',
    year: '',
    telephone: '',
    email: '',
    note: '',
    linkVK: '',
  });

  const handleSubmit = () => {
    
    onClose();
    const newDatabase = [...database, formValue];
    console.log(newDatabase);
    setDatabase(newDatabase);
    updateStudents(newDatabase);
  }
  
  return (
    <Drawer backdrop="static" size="sm" placement="right" onClose={onClose} {...rest}>
      <Drawer.Header>
        <Drawer.Title>Add a new member</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={handleSubmit} appearance="primary">
            Add
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <Form fluid formValue={formValue} onChange={setFormValue} {...rest}>
          <Stack justifyContent="space-between" style={{ marginBottom: 20 }}>
            <Form.Group>
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control name="name" style={{ width: 200 }} />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Group</Form.ControlLabel>
              <Form.Control name="group" style={{ width: 200 }} />
            </Form.Group>
          </Stack>
          <Form.Group>
            <Form.ControlLabel>Year</Form.ControlLabel>
            <Form.Control name="year" type="email" />
          </Form.Group>
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
            <Form.ControlLabel>ID Vkontakte</Form.ControlLabel>
            <Form.Control name="id_vk" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Link VK</Form.ControlLabel>
            <Form.Control name="linkVK" />
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
