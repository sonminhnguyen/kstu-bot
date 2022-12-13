import React, { useEffect, useState } from 'react';
import { Table, ButtonToolbar, IconButton } from 'rsuite';
import { TestCell, LinkCell } from './Cells';
import PlusIcon from '@rsuite/icons/Plus';
import { MyContext } from './context';
import { getCommands } from '../../data/database'

const { Column, HeaderCell, Cell } = Table;

const Command = () => {
    const [database, setDatabase] = useState<Object[] | any>([]);
    
    const handleAddCollection = () => {
        const newCollection = [...database, {
            id: database.length + 1,
            label: '/command',
            depth: 0,
            children: [
                {
                    id: (database.length + 1) * 100 + 1,
                    label: 'Label',
                    depth: 1,
                    description: 'This is description',
                    file: 'fileURL',
                }
            ]
        }]
        setDatabase(newCollection)
        // updateCommand(newCollection)
    }

    useEffect(() => {
        getCommands().then(data => setDatabase(data))
    }, [])
    if (database.length !== 0) {
        return (
            <MyContext.Provider value={{ database }}>
                <ButtonToolbar >
                    <IconButton color="cyan" appearance="primary" onClick={handleAddCollection} icon={<PlusIcon />}>Add Collection</IconButton>
                </ButtonToolbar>
                <Table
                    isTree
                    defaultExpandAllRows
                    bordered
                    cellBordered
                    rowKey="id"
                    height={800}
                    data={database}
                    /** shouldUpdateScroll: whether to update the scroll bar after data update **/
                    shouldUpdateScroll={false}
                >
                    <Column flexGrow={2}>
                        <HeaderCell >Command</HeaderCell>
                        <Cell dataKey='label' />
                    </Column>
                    <Column flexGrow={1} align={'center'}>
                        <HeaderCell>File</HeaderCell>
                        <LinkCell dataKey='file'>
                        </LinkCell>
                    </Column>
                    <Column flexGrow={2}>
                        <HeaderCell>Bot Answer</HeaderCell>
                        <Cell dataKey="answer" />
                    </Column>
                    <Column>
                        <HeaderCell >...</HeaderCell>
                        <TestCell database={database} setDatabase={setDatabase} />
                    </Column>
                </Table>

            </MyContext.Provider>
        );
    }
    else {
        return (
            <></>
        )
    }

};

export default Command;