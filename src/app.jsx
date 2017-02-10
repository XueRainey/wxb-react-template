import React from 'react';

import { Layout } from 'antd';
import './style.less';
import features from './features';

const { Header, Footer, Content } = Layout;

const App = () => (
    <Layout className="wxb-main">
        <Header>微小宝React模板展示页</Header>
        <Content>
            <ul>
                {
                    features.map(feature => (
                        <li key={feature}>{feature}</li>
                    ))
                }
            </ul>
        </Content>
        <Footer>杭州推宝科技有限公司</Footer>
    </Layout>
);

export default App;
