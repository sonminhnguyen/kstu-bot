import React, { useEffect, useState } from 'react';
import {
  Input,
  InputGroup,
  Table,
  DOMHelper,
  Stack,
  SelectPicker
} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import DrawerView from './DrawerView';

import { getInQueueRequires, updateRequires } from '@/data/database';

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const eventList = ["Заявление", "Результать", "Договор"].map(
  item => ({ label: item, value: item })
);

const InQueue = () => {
  const [database, setDatabase] = useState<Object[] | any>([])
  const [showDrawer, setShowDrawer] = useState(false);
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [event, setEvent] = useState<string | null>('');

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const filteredData = () => {
    const filtered = database.filter(item => {
      if (!item.event.toLowerCase().includes(searchKeyword.toLowerCase()) && 
      !item.title.toLowerCase().includes(searchKeyword.toLowerCase()) && 
      !item.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
      !item.note.toLowerCase().includes(searchKeyword.toLowerCase()) 
      )  {
        return false;
      }

      if (event && item.event !== event) {
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
  };
  const handleDoneEvent = (rowData) => {
    const newDatabase = database.filter(data => data.id !== rowData.id)
    setDatabase(newDatabase);
    // updateRequires(newDatabase)
    alert(`id:${rowData.id} done!!!`)
  }

  useEffect(() => {
    getInQueueRequires().then(data => setDatabase(data))
  },[])
  return (
    <>
      <Stack className="table-toolbar" justifyContent="space-between">
        <Stack spacing={6}>
          <SelectPicker
            label="Event"
            data={eventList}
            searchable={false}
            value={event}
            onChange={setEvent}
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

        <Column width={120} align="center" sortable>
          <HeaderCell>Event</HeaderCell>
          <Cell dataKey="event" />
        </Column>

        <Column width={300} sortable>
          <HeaderCell>Title</HeaderCell>
          <Cell dataKey="title" />
        </Column>

        <Column width={80}>
          <HeaderCell>Group</HeaderCell>
          <Cell dataKey="group" />
        </Column>

        <Column width={180}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={300}>
          <HeaderCell>Notes</HeaderCell>
          <Cell dataKey="note" />
        </Column>
        
        <Column width={80} fixed="right">
          <HeaderCell>...</HeaderCell>

          <Cell>
            {rowData => (
              <span>
                {/* <a onClick={() => alert(`id:${rowData.id} done!!!`)}> Done </a> */}
                <a onClick={() => handleDoneEvent(rowData)}> Done </a>
              </span>
            )}
          </Cell>
        </Column>
      </Table>

      <DrawerView open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
};

export default InQueue;
