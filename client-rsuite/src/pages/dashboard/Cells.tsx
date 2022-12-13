import React, { useState } from 'react';
import { Popover, Whisper, Checkbox, Dropdown, IconButton, Table, CellProps } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';
import ModalEditRow from './ModalEditRow';
import { updateStudents } from '@/data/database';


const { Cell } = Table;

export const ActionCell = ({ database, setDatabase, ...props }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setShowModal(true);
  }
  const handleDelete = () => {
    const newDatabase = database.filter(data => data.id !== props.rowData.id)
    const updatedID = newDatabase.map(data => {
      if (data.id > props.rowData.id) {
        return { ...data, id: data.id - 1 }
      }
        return data;
    })
    setDatabase(updatedID);
    updateStudents(updatedID);
  }

  const renderMenu = ({ onClose, left, top, className }: any, ref) => {
    const handleSelect = eventKey => {
      onClose();
      if (eventKey === 1) {
        handleEdit();
      } else if (eventKey === 2) {
        handleDelete();
      }
    };
    return (
      <Popover ref={ref} className={className} style={{ left, top }} full>
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item eventKey={1}>Edit</Dropdown.Item>
          {/* <Dropdown.Item eventKey={2}>View Profile</Dropdown.Item> */}
          <Dropdown.Item eventKey={2}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };
  return (
    <>
      <Cell {...props} className="link-group">
        <Whisper placement="autoVerticalEnd" trigger="click" speaker={renderMenu}>
          <IconButton appearance="subtle" icon={<MoreIcon />} />
        </Whisper>
      </Cell>
      <ModalEditRow database={database} setDatabase={setDatabase} rowData={props.rowData} open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export const NameCell = ({ rowData, dataKey, ...props }: CellProps) => {
  const speaker = (
    <Popover title="Description">
      <p>
        <b>Name:</b> {rowData.name}
      </p>
      <p>
        <b>Gender:</b> {rowData.gender}
      </p>
      <p>
        <b>City:</b> {rowData.city}
      </p>
      <p>
        <b>Street:</b> {rowData.street}
      </p>
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper placement="top" speaker={speaker}>
        <a>{dataKey ? rowData[dataKey] : null}</a>
      </Whisper>
    </Cell>
  );
};

export const ImageCell = ({ rowData, dataKey, ...props }: CellProps) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        width: 40,
        height: 40,
        background: '#f5f5f5',
        borderRadius: 6,
        marginTop: 2,
        overflow: 'hidden',
        display: 'inline-block'
      }}
    >
      <img src={rowData[dataKey!]} width="40" />
    </div>
  </Cell>
);

export const CheckCell = ({
  rowData,
  onChange,
  checkedKeys,
  dataKey,
  ...props
}: CellProps & {
  checkedKeys: number[];
  onChange: (value: any, checked: boolean) => void;
}) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div style={{ lineHeight: '46px' }}>
      <Checkbox
        value={rowData[dataKey!]}
        inline
        onChange={onChange}
        checked={checkedKeys.some(item => item === rowData[dataKey!])}
      />
    </div>
  </Cell>
);




