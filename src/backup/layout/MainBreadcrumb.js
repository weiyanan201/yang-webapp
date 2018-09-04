import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import {Breadcrumb} from 'antd';

import style from './style.less';


class MainBreadcrumb extends React.Component{

    render(){
        return (
            <div className={style.breadcrumbWrapper}>
                <Breadcrumb >
                    <Breadcrumb.Item key={1}>
                        <Link to='/'>
                            hello world
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default MainBreadcrumb;
