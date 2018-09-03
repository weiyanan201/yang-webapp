import React, {Component} from 'react';
import { Layout } from 'antd' ;
import MainSider from './MainSider'
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import MainBreadcrumb from "./MainBreadcrumb";

import style from './style.less';


export default class MainLayout extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <Layout >
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
