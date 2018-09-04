/**
 * content
 */

import React from 'react';
import { Layout } from 'antd';
import { Route,Switch } from 'react-router-dom'

import GroupList from '../../containers/tableManage/GroupList'
import TableList from '../../containers/tableManage/TableList';
import TableInfo from '../../containers/tableManage/TableInfo';
import AddTable from '../../containers/tableManage/AddTable';

import style from '../../containers/MainLayout/layout.less';

const { Content } = Layout;

class MainContent extends React.Component{

    render(){
        return(
            <div >
                <Content className={style.content}>
                    <div className={style.contentDiv}>
                        <Switch>
                            {/*<Route path="/table/groups" exact component={GroupList}/>*/}
                            {/*<Route path="/table/groups/:groupId" exact component={TableList}/>*/}
                            {/*<Route path="/table/groups/:groupId/:tableId" exact component={TableInfo}/>*/}
                            {/*<Route path="/table
                            /addTable" exact component={AddTable}/>*/}
                        </Switch>
                    </div>
                </Content>
            </div>
        );
    }
}


export default  MainContent;
