import React from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import { Content, Header } from 'antd/es/layout/layout';
import MyCases from '../my-cases/MyCases';

function App() {
  return (
    <>
      <Layout>
        <Header>
          <Menu
            theme='dark'
            mode='horizontal'
            items={[
              { key: 'mc', label: 'My Cases' },
              { key: 'q', label: 'Query' },
            ]}>
          </Menu>
        </Header>
        <Content>
          <MyCases />
        </Content>
      </Layout>
    </>
  );
}

export default App;
