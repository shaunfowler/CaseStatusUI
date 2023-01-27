import React from 'react';
import { Typography, Layout, Menu } from 'antd';
import './App.css';
import { Content, Header } from 'antd/es/layout/layout';
import MyCases from "../my-cases/MyCases";
import icon from '../../assets/mac128.png'

function App() {
  return (
    <Layout style={{padding: 20}}>
      <Typography.Title>Case Tracker</Typography.Title>
      <Content>
        <MyCases />
      </Content>
    </Layout>
  );
}

export default App;
