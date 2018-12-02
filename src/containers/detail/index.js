
import React,{Component} from 'react';
import { BrowserRouter as Router, withRouter} from 'react-router-dom'

import axios from '../../util/axios';
import util from '../../util/util';


@withRouter
export default class Deatail extends Component{


    constructor(props){
        super(props);
        this.state={
            showPath:""
        }
    }

    componentDidMount(){
        // console.log(this.props);
        // const planId = this.props.match.params.planId;
        console.log(this.props);
        const search = this.props.history.location.search;
        const ss = search.split("=");
        if (!util.isEmpty(ss)&&ss.length==2){
            const id = ss[1];
            axios.get("/plan/getShowPath",{id:id})
                .then(res=>{
                    const showPath = res.data.data.showPath;
                    this.setState({
                        showPath:showPath
                    });
                })
                .catch(err=>{
                    console.error(err);
                })
        }

    }

    render(){
        console.log(this.state.showPath);
        return (
            <div style={{height:"100%"}}>
                <iframe  style={{border:0,width:"100%",height:"100%",}}  src={this.state.showPath}/>
            </div>
        );
    }
}
