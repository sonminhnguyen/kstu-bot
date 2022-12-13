import React, { useEffect, useState } from 'react';
import {
  Input,
  InputGroup,
  Table,
  Button,
  DOMHelper,
  // Progress,
  Checkbox,
  Stack,
  SelectPicker
} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import MoreIcon from '@rsuite/icons/legacy/More';
import DrawerView from './DrawerView';
import ModalSendMessage from './ModalSendMessage';
import { mockUsers } from '@/data/mock';
import { NameCell, ImageCell, CheckCell, ActionCell } from './Cells';
import { getStudents } from '../../data/database';


// const data = mockUsers(20);


const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const groupList = ['8191-22', '8191-21', '8191-31', '8191-11'].map(
  item => ({ label: item, value: item })
);
const yearList = ['1', '2', '3', '4', '5'].map(
  item => ({ label: item, value: item })
);

const Dashboard = () => {
  const [database, setDatabase] = useState<Object[] | any>([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
  const [checkedUsers, setCheckedUsers] = useState<Object[]>([]);
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [group, setGroup] = useState<string | null>('');
  const [year, setYear] = useState<string | null>('');

  let checked = false;
  let indeterminate = false;

  if (checkedKeys.length === database.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < database.length) {
    indeterminate = true;
  }

  const handleCheckAll = (_value, checked) => {
    const keys = checked ? database.map(item => item.id) : [];
    const users = checked ? database.map(item => ({ name: item.name, id_vk: item.id_vk })) : [];
    setCheckedKeys(keys);
    setCheckedUsers(users);
  };
  const handleCheck = (value, checked) => {
    const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
    const userSelected = database.filter(item => keys.includes(item.id));
    const users = userSelected.map(item => ({ name: item.name, id_vk: item.id_vk }))
    setCheckedKeys(keys);
    setCheckedUsers(users);
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const filteredData = () => {
    if (database.length !== 0) {
      const filtered = database.filter((item) => {
        if (!item.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
          !item.group.toLowerCase().includes(searchKeyword.toLowerCase()) &&
          !item.note.toLowerCase().includes(searchKeyword.toLowerCase()) &&
          !item.email.toLowerCase().includes(searchKeyword.toLowerCase())
        ) {
          return false;
        }

        if (group && item.group !== group) {
          return false;
        }

        if (year && item.year !== year) {
          return false;
        }

        return true;
      });

      if (sortColumn && sortType) {
        return filtered.sort((a, b) => {
          let x: any = a[sortColumn];
          let y: any = b[sortColumn];

          if (typeof x === 'string') {
            x = x.charCodeAt(0);
          }
          if (typeof y === 'string') {
            y = y.charCodeAt(0);
          }

          if (sortType === 'asc') {
            return x - y;
          } else {
            return y - x;
          }
        });
      }
      return filtered;
    }
  };

  useEffect(() => {
    getStudents().then((data) => setDatabase(data));
  }, [])
  if (database.length !== 0) {

    return (
      <>
        <Stack className="table-toolbar" justifyContent="space-between">
          <Stack spacing="10px">
            <Button appearance="primary" onClick={() => setShowDrawer(true)}>
              Add Member
            </Button>
            <Button appearance="primary" onClick={() => setShowModal(true)}>
              Send Message
            </Button>
          </Stack>
  
          <Stack spacing={6}>
            <SelectPicker
              label="Group"
              data={groupList}
              searchable={false}
              value={group}
              onChange={setGroup}
            />
            <SelectPicker
              label="Year"
              data={yearList}
              searchable={false}
              value={year}
              onChange={setYear}
            />
            <InputGroup inside>
              <Input placeholder="Search" value={searchKeyword} onChange={setSearchKeyword} />
              <InputGroup.Addon>
                <SearchIcon />
              </InputGroup.Addon>
            </InputGroup>
          </Stack>
        </Stack>
  
        <Table
          height={Math.max(getHeight(window) - 200, 400)}
          data={filteredData()}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={handleSortColumn}
        >
          <Column width={60} align="center" fixed sortable>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>
  
          <Column width={40} fixed>
            <HeaderCell style={{ padding: 0 }}>
              <div style={{ lineHeight: '40px' }}>
                <Checkbox
                  inline
                  checked={checked}
                  indeterminate={indeterminate}
                  onChange={handleCheckAll}
                />
              </div>
            </HeaderCell>
            <CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
          </Column>
          <Column width={80} align="center">
            <HeaderCell>Avatar</HeaderCell>
            <ImageCell dataKey="avatar" />
          </Column>
  
          <Column minWidth={160} flexGrow={1} sortable>
            <HeaderCell>Name</HeaderCell>
            <NameCell dataKey="name" />
          </Column>
  
          <Column width={90} sortable>
            <HeaderCell>Group</HeaderCell>
            <Cell dataKey="group" />
          </Column>
  
          <Column width={70} sortable>
            <HeaderCell>Year</HeaderCell>
            <Cell dataKey="year" />
          </Column>
  
          <Column width={160}>
            <HeaderCell>Telephone</HeaderCell>
            <NameCell dataKey="telephone" />
          </Column>
  
          <Column width={300}>
            <HeaderCell>Email</HeaderCell>
            <NameCell dataKey="email" />
          </Column>
  
          <Column width={80}>
            <HeaderCell>Note</HeaderCell>
            <Cell dataKey="note" />
          </Column>
  
          <Column width={300}>
            <HeaderCell>Link VK</HeaderCell>
            <Cell dataKey="linkVK" />
          </Column>
  
          <Column width={120}>
            <HeaderCell>
              <MoreIcon />
            </HeaderCell>
            <ActionCell dataKey="id" database={database} setDatabase={setDatabase} />
          </Column>
        </Table>
  
        <DrawerView database={database} setDatabase={setDatabase} open={showDrawer} onClose={() => setShowDrawer(false)} />
        <ModalSendMessage checkedUsers={checkedUsers} open={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  }
};

export default Dashboard;
