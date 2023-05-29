import React, { useContext } from 'react';
import { Modal, Button } from 'rsuite';
import { updateUsers } from '@/data/database';
import { ManageUsersContext } from './context';


const ModalDeteleRow = (props: any) => {
  const { rowData, onClose, ...rest } = props;
  const [database, setDatabase] = useContext<unknown | any>(ManageUsersContext);

  const handleDelete = () => {
    onClose();
    const newDatabase = database.filter(data => data.id !== rowData.id);
    const updatedID = newDatabase.map(data => {
      if (data.id > rowData.id) {
        return { ...data, id: data.id - 1 };
      }
      return data;
    });
    console.log(updatedID);
    
    setDatabase(updatedID);
    updateUsers(updatedID);
  };

  return (
    <Modal onClose={onClose} {...rest}>
      <Modal.Header>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure to delete this user?
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDelete} appearance="primary">
          Yes
        </Button>
        <Button onClick={onClose} appearance="subtle">
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDeteleRow;