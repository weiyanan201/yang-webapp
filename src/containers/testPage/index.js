import React , { Component } from 'react'
import styled from 'styled-components';

import { Radio } from 'antd';


const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
  `;


const RadioGroup = Radio.Group;
class Test extends Component {


    render(){

        return (
            <div>
                <Input placeholder="@mxstbr" defaultValue="@probablyup" type="text" />
                <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />

                <RadioGroup name="radiogroup" defaultValue={1} >
                    <Radio value={1}>全部</Radio>
                    <Radio value={2}>常规课</Radio>
                    <Radio value={3}>公开课</Radio>
                    <Radio value={4}>假期课</Radio>
                    <Radio value={5}>特色短期班</Radio>
                </RadioGroup>
            </div>
        )
    }
}

export default Test;
