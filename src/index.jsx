// TODO: React 入口代码
import React from 'react';

import { render } from 'react-dom';
import './block.less';

const App = () => (
    <div className="block">
        微小宝测试
    </div>
);

render(
    <App />,
    document.getElementById('root')
);
