import React,{ PureComponent,Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter} from 'react-router-dom';
import {Breadcrumb} from 'antd';
import {is} from 'immutable';

import style from './style.less';

const routeMap = new Map();

@withRouter
@connect(
    state=>({auth:state.get('auth').toObject(),globalStatus:state.get('globalStatus').toObject()}),
    {}
)
class MainBreadcrumb extends Component{

    componentWillMount(){
        console.log(this.props);
    }

    componentWillUpdate(nextProps) {
        if (!is(this.props.auth.menus, nextProps.auth.menus)) {
            genRouteMap(nextProps.auth.menus)
        }
    }

    componentDidUpdate(){
        console.log("MainBreadcrumb.componentDidUpdate",this.props);
    }


    render() {
        console.log("MainBreadcrumb.render");
        const url = this.props.location.pathname;
        let tempUrl = [];
        let tempPrx = '/';
        let breadcrumbItems = [
        ];
        url.split('/').filter(v => {
            const paths = this.props.globalStatus.breadPath;
            if (v !== '') {
                tempUrl.push(v);
                let routeUrl = tempPrx + tempUrl.join("/");
                if (routeMap.has(routeUrl)) {
                    let item = routeMap.get(routeUrl);
                    breadcrumbItems = breadcrumbItems.concat(
                        <Breadcrumb.Item key={item.id}>
                            <Link to={item.route}>
                                {item.bread}
                            </Link>
                        </Breadcrumb.Item>
                    );
                }else {
                    if(routeUrl in paths){
                        if(paths[routeUrl]!==undefined && paths[routeUrl]!==''){
                            const name = paths[routeUrl];
                            breadcrumbItems = breadcrumbItems.concat(
                                <Breadcrumb.Item key={routeUrl}>
                                    <Link to={routeUrl}>
                                        {name}
                                    </Link>
                                </Breadcrumb.Item>
                            );
                        }
                    }
                }
            }

        })
        return (
            <div className={style.breadcrumbWrapper}>
                <Breadcrumb >
                    {breadcrumbItems}
                </Breadcrumb>
            </div>
        )
    }
}

function genRouteMap(menus) {
    menus.map(item => {
        if (item.children) {
            genRouteMap(item.children)
        } else {
            routeMap.set(item.route, item)
        }
    })
}

export default MainBreadcrumb;
