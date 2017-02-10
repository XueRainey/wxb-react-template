import React from 'react';

import { Layout } from 'antd';
import './block.less';

const { Header, Footer, Content } = Layout;
const App = () => (
    <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>
);

export default App;
