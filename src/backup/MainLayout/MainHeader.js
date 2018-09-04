/**
 * header
 */

import React from 'react';
import {Layout, Menu, Icon} from 'antd';

import { connect } from 'react-redux';

import style from './layout.less';

const {Header} = Layout;
const {SubMenu} = Menu;

@connect(
    state => state.auth,
    { }
)
class MainHeader extends React.Component {

    render() {
        return (
            //
            // style={{background: '#fff', padding: 0}}
            <Header className={style.mainHeader}>
                    {/*<Menu mode="horizontal" >*/}
                        {/*<SubMenu*/}
                            {/*style={{*/}
                                {/*float: 'right',*/}
                                {/*marginTop:'7px'*/}
                            {/*}}*/}
                            {/*title={*/}
                                {/*<span>*/}
                                    {/*<Icon type="user"/>*/}
                                    {/*{this.props.username}*/}
                                {/*</span>*/}
                            {/*}*/}
                        {/*>*/}
                            {/*<Menu.Item key="logout">*/}
                                {/*测试*/}
                            {/*</Menu.Item>*/}
                        {/*</SubMenu>*/}

                        {/*/!*<Menu.Item key="mail" style={{*!/*/}
                            {/*/!*float: 'right',*!/*/}
                            {/*/!*marginTop:'7px'*!/*/}
                        {/*/!*}}>*!/*/}
                            {/*/!*<Icon type="mail" size='larger'/>消息*!/*/}
                        {/*/!*</Menu.Item>*!/*/}
                    {/*</Menu>*/}

                    <div style={{
                        float: 'right',
                        marginTop:'7px'
                    }}><Icon type="user" style={{marginRight:5}}/>{this.props.username}</div>


            </Header>
        )
    }

}

export default MainHeader;
