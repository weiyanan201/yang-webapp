/**
 * content
 */

import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'


import PlanList from '../containers/planList';

import style from './style.less';

import Test from '../containers/testPage'

const { Content } = Layout;

class MainContent extends React.Component{

    render(){
        return(
            <div className={style.contentWrapper}>
                <Content>
                    <Switch>
                        <Route path="/plan/list" exact component={PlanList}/>
                        {/*<Route path="/table/groups/:groupId" exact component={TableList}/>*/}
                        {/*<Route path="/table/groups/:groupId/:tableId" exact component={TableInfo}/>*/}
                        <Route path="/test" exact component={Test}/>
                    </Switch>
                </Content>
            </div>
        );
    }
}


export default  MainContent;
