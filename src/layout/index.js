import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd' ;

import MainSider from './MainSider'
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import MainBreadcrumb from './MainBreadcrumb';

import { actions } from '../redux/auth.redux'

import style from './style.less';


@connect(
    state=>state.get("auth").toObject(),
    { getUserInfo:actions.getUserInfo }
)
class MainLayout extends PureComponent {


    constructor(props){
        super(props);
        console.log("MainLayout.constructor");
    }

    componentWillMount(){
        console.log("MainLayout.componentWillMount");
        this.props.getUserInfo();
    }

    componentDidMount(){
        console.log("MainLayout.componentDidMount");
    }

    componentWillReceiveProps(){
        console.log("MainLayout.componentWillReceiveProps");
    }



    componentDidUpdate(){
        console.log("MainLayout.componentDidUpdate",this.props);
    }

    render() {
        console.log("MainLayout.render",this.props);
        return (
            <Layout >
                <MainSider />
                <Layout className={style.layoutRight}>
                    <MainHeader userName={this.props.userName}/>
                    <MainBreadcrumb />
                    <MainContent/>
                </Layout>
            </Layout>
        );
    }
}


export default MainLayout
