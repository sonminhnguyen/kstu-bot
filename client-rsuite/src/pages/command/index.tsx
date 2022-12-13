import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import Command from './Command';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Command</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Command</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <Command />
    </Panel>
  );
};

export default Page;