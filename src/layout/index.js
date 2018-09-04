import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Layout, Button } from 'antd' ;
import MainSider from './MainSider'
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import MainBreadcrumb from './MainBreadcrumb';

import { actions } from '../redux/auth.redux'

import style from './style.less';


class MainLayout extends Component {

    render() {
        console.log(this.props.userName);
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
    console.log(state.getIn(['auth','userName']));
    return {
        userName: state.getIn(['auth','userName'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        logout(){
          dispatch(actions.logout());
        },
    }
}


export default connect(mapState,mapDispatch)(MainLayout)

