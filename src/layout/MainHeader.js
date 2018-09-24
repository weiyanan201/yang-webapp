import React from 'react';
import {Icon, Layout} from 'antd';

import style from './style.less';
const Header = Layout.Header;


const MainHeader = ({ userName }) => (
    <Header className={style.headerWrapper}>
        <div className={style.headerItem}>
            <Icon type="user" className={style.headerIcon}/>
            {userName}
        </div>
    </Header>
);

export default MainHeader;
