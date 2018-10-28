import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../redux/plan.redux';
import { Radio } from 'antd';

import { tagTheme,tagSubject,tagAge,tagCourse,tagScene,tagAll } from '../../../config';

import style from '../style.less';

const RadioGroup = Radio.Group;

@connect(
    state=>{
        return {
            tags:state.getIn(["plan","tags"]).toObject(),
            searchValue:state.getIn(["plan","searchValue"])
        }
    }
    ,{
        changeTag : actions.changeTag,
        changeSearchValue : actions.changeSearchValue,
        searchQuery : actions.searchQuery
    }
)
class Search extends PureComponent {

    render(){

        const tags = this.props.tags;

        const {
            courseValue,sceneValue,themeValue,ageValue,subjectValue,
        } = this.props.tags;

        const {
            changeTag,
            searchValue,changeSearchValue,
            searchQuery,
        } = this.props;
        return (
            <div {...this.props}>
                <div className={style.searchContainer}>
                    <div>
                        <span className={style.searchLabel}>课程名称</span>
                        <RadioGroup name="radiogroup"
                                    defaultValue={-1}
                                    className={style.testRadio}
                                    onChange={(e)=>{changeTag("courseValue",e.target.value,searchValue,tags)}}
                                    value={courseValue}
                        >
                            <Radio value={tagAll.key}>{tagAll.name}</Radio>
                            <Radio value={tagCourse.construct.key}>{tagCourse.construct.name}</Radio>
                            <Radio value={tagCourse.science.key}>{tagCourse.science.name}</Radio>
                        </RadioGroup>
                    </div>

                    <div>
                        <span className={style.searchLabel}>场景</span>
                        <RadioGroup name="radiogroup"
                                    defaultValue={-1}
                                    className={style.testRadio}
                                    onChange={(e)=>{changeTag("sceneValue",e.target.value,searchValue,tags)}}
                                    value={sceneValue}
                        >
                            <Radio value={tagAll.key}>{tagAll.name}</Radio>
                            <Radio value={tagScene.zhuanxiangshi.key}>{tagScene.zhuanxiangshi.name}</Radio>
                            <Radio value={tagScene.changguijiaoshi.key}>{tagScene.changguijiaoshi.name}</Radio>
                            <Radio value={tagScene.qujiaohuodong.key}>{tagScene.qujiaohuodong.name}</Radio>
                            <Radio value={tagScene.huwaihuodong.key}>{tagScene.huwaihuodong.name}</Radio>
                        </RadioGroup>
                    </div>

                    <div>
                        <span className={style.searchLabel}>主题</span>
                        <RadioGroup name="radiogroup"
                                    defaultValue={-1}
                                    className={style.testRadio}
                                    onChange={(e)=>{changeTag("themeValue",e.target.value,searchValue,tags)}}
                                    value={themeValue}
                        >
                            <Radio value={tagAll.key}>{tagAll.name}</Radio>
                            <Radio value={tagTheme.ocean.key}>{tagTheme.ocean.name}</Radio>
                            <Radio value={tagTheme.body.key}>{tagTheme.body.name}</Radio>
                            <Radio value={tagTheme.supermarket.key}>{tagTheme.supermarket.name}</Radio>
                            <Radio value={tagTheme.volcano.key}>{tagTheme.volcano.name}</Radio>
                            <Radio value={tagTheme.landform.key}>{tagTheme.landform.name}</Radio>
                            <Radio value={tagTheme.airport.key}>{tagTheme.airport.name}</Radio>
                        </RadioGroup>
                    </div>

                    <div>
                        <span className={style.searchLabel}>年龄段</span>
                        <RadioGroup name="radiogroup"
                                    defaultValue={-1}
                                    className={style.testRadio}
                                    onChange={(e)=>{changeTag("ageValue",e.target.value,searchValue,tags)}}
                                    value={ageValue}
                        >
                            <Radio value={tagAll.key}>{tagAll.name}</Radio>
                            <Radio value={tagAge.small.key}>{tagAge.small.name}</Radio>
                            <Radio value={tagAge.middle.key}>{tagAge.middle.name}</Radio>
                            <Radio value={tagAge.large.key}>{tagAge.large.name}</Radio>
                        </RadioGroup>
                    </div>


                    <div>
                        <span className={style.searchLabel}>重点领域</span>
                        <RadioGroup name="radiogroup"
                                    defaultValue={-1}
                                    className={style.testRadio}
                                    onChange={(e)=>{changeTag("subjectValue",e.target.value,searchValue,tags)}}
                                    value={subjectValue}
                        >
                            <Radio value={tagAll.key}>{tagAll.name}</Radio>
                            <Radio value={tagSubject.life.key}>{tagSubject.life.name}</Radio>
                            <Radio value={tagSubject.matter.key}>{tagSubject.matter.name}</Radio>
                            <Radio value={tagSubject.earth.key}>{tagSubject.earth.name}</Radio>
                            <Radio value={tagSubject.technology.key}>{tagSubject.technology.name}</Radio>
                            <Radio value={tagSubject.math.key}>{tagSubject.math.name}</Radio>
                        </RadioGroup>
                    </div>

                    <div>
                        <input type="text"  value={searchValue}
                               className="form-control"
                               onChange={(e)=>changeSearchValue(e.target.value)}
                               placeholder="请输入查询信息" />
                        <button className="btn back-green"
                                onClick={()=>searchQuery(searchValue,this.props.tags)}
                        >
                            <span className="glyphicon glyphicon-search">查询</span>
                        </button>
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
