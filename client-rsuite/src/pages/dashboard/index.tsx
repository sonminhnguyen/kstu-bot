import React , { useState, useEffect }from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import Dashboard from './Dashboard';
// import { getStudents } from '../../data/database';

const Page = () => {
  // const [data, setData] = useState([]);

  // console.log(data);
  // useEffect(() => {
  //   getStudents().then(data => setData(data));
  // }, [])
  return (
    <Panel
      header={
        <>
          <h3 className="title">Dashboard</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <Dashboard />
    </Panel>
  );
};

export default Page;
