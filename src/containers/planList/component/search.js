import React , { Component } from 'react';
import axios from '../../../util/axios';
import { Radio } from 'antd';

import style from '../style.less';

import { SearchWrapper, ConditionWrapper, LabelWrapper,RadioWrapper, RadioItem } from '../style';

const RadioGroup = Radio.Group;

class Search extends Component {

    componentWillMount(){
        console.log("Search.willMount");
        axios.get("/plan/getTag")
            .then(res=>{
                console.log(res);
            })

        this.state = {
            value:1
        }
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }


    render(){
        return (
            <div {...this.props}>
                <div className={style.searchContainer}>
                    <div>
                        <span className={style.searchLabel}>产品</span>
                        <RadioGroup name="radiogroup"
                                    defaultValue={1}
                                    className={style.testRadio}
                                    onChange={this.onChange}
                                    value={this.state.value}
                        >
                            <Radio value={1}>全部</Radio>
                            <Radio value={2}>常规课</Radio>
                            <Radio value={3}>公开课</Radio>
                            <Radio value={4}>假期课</Radio>
                            <Radio value={5}>特色短期班</Radio>
                        </RadioGroup>
                    </div>

                </div>
            </div>
        );
    }
}

export default Search;

//
// <SearchWrapper>
//     search
//     <ConditionWrapper>
//         <LabelWrapper>
//             产品
//         </LabelWrapper>
//         <RadioWrapper>
//             <RadioItem className='active'>
//                 男
//             </RadioItem>
//             <RadioItem>
//                 女
//             </RadioItem>
//         </RadioWrapper>
//     </ConditionWrapper>
//
// </SearchWrapper>
