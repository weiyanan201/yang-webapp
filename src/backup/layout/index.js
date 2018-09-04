import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Layout, Button } from 'antd' ;
import MainSider from './MainSider'
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import MainBreadcrumb from "./MainBreadcrumb";
import { actionCreators } from './store'

import style from './style.less';


class MainLayout extends Component {

    componentDidMount() {
        this.props.login();
    }

    render() {
        return (
            <Layout >
                <Button onClick={this.props.logout}>退出</Button>
                <MainSider />
                <Layout className={style.layoutRight}>
                    <MainHeader />
                    <MainBreadcrumb/>
                    <MainContent/>
                </Layout>
            </Layout>
        );
    }
}
const mapState = (state) => {
    console.log(state);
    return {
        userName: state.layout.userName
    }
};

const mapDispatch = (dispatch) =>{
    return {
        logout(){
            dispatch(actionCreators.logout());
        },
        login(){
            dispatch(actionCreators.login())
        }
    }
}

export default connect(mapState,mapDispatch)(MainLayout)

