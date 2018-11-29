/**
 * content
 */

import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'


import PlanList from '../containers/planList';
import HomePage from '../containers/home';

import style from './style.less';

import Test from '../containers/Test'

const { Content } = Layout;

class MainContent extends React.Component{

    render(){
        return(
            <div className={style.contentWrapper}>
                <Content>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/plan/list" exact component={PlanList}/>
                        <Route path="/test" exact component={ Test }/>
                    </Switch>
                </Content>
            </div>
        );
    }
}


export default  MainContent;
