import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from '../../../util/axios';
import { actions } from '../../../redux/plan.redux';
import { Radio } from 'antd';

import { tagTheme,tagSubject,tagAge,tagCourse,tagScene,tagAll } from '../../../config';

import style from '../style.less';

const RadioGroup = Radio.Group;




@connect(
    state=>state.getIn(["plan","tags"]).toObject()
    ,{changeTag : actions.changeTag}
)
class Search extends PureComponent {

    render(){
        const { courseValue,sceneValue,themeValue,ageValue,subjectValue,changeTag } = this.props;
        return (
            <div {...this.props}>
                <div className={style.searchContainer}>
                    <div>
                        <span className={style.searchLabel}>课程名称</span>
                        <RadioGroup name="radiogroup"
                                    defaultValue={-1}
                                    className={style.testRadio}
                                    onChange={(e)=>{changeTag("courseValue",e.target.value)}}
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
                                    onChange={(e)=>{changeTag("sceneValue",e.target.value)}}
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
                                    onChange={(e)=>{changeTag("themeValue",e.target.value)}}
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
                                    onChange={(e)=>{changeTag("ageValue",e.target.value)}}
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
                                    onChange={(e)=>{changeTag("subjectValue",e.target.value)}}
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
