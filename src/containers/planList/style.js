import styled from 'styled-components';

export const SearchWrapper = styled.div`
	height: 200px;
`;

export const ConditionWrapper = styled.div`
	position: relative;
    font-size: 14px;
    color: #999;
    display: table;
    content: " ";
`;

export const LabelWrapper = styled.div`
	position: absolute;
    top: 15px;
    left: 0;
    font-size: 14px;
    margin: 0;
`;

export const RadioWrapper = styled.ul`
    padding-left: 75px;
    margin-bottom: 0;
    list-style:none; /* 将默认的列表符号去掉 */
`;

export const RadioItem = styled.li`
    padding: 3px 18px;
    border: 1px solid #eeeeee;
    border-radius: 15px;
    margin-right: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    float: left!important;
    &:active{
      border: 1px solid #13dad3;
      background-color: #13dad3;
      color: #fff;
    }
    &.active{
      border: 1px solid #13dad3;
      background-color: #13dad3;
      color: #fff;
    }
    
`;

