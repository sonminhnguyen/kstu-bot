import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import Solved from './Solved';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Solved</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Require</Breadcrumb.Item>
            <Breadcrumb.Item active>Solved</Breadcrumb.Item>
            </Breadcrumb>
        </>
      }
    >
      <Solved />
    </Panel>
  );
};

export default Page;
