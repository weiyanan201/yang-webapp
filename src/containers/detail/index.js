
import React,{Component} from 'react';

import axios from '../../util/axios';

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
        axios.get("/plan/getShowPath",{id:34})
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

    render(){
        console.log(this.state.showPath);
        return (
            <div style={{height:"100%"}}>
                <iframe  style={{border:0,width:"100%",height:"100%",}}  src={this.state.showPath}/>
            </div>
        );
    }
}