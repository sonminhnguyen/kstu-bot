import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import InQueue from './InQueue';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">In Queue</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Require</Breadcrumb.Item>
            <Breadcrumb.Item active>InQueue</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <InQueue />
    </Panel>
  );
};

export default Page;
