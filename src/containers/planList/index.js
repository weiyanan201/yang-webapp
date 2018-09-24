import React,{ Component } from 'react';

import { Tag } from 'antd';

import Search from './component/search';

import style from './style.less';

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];
const CheckableTag = Tag.CheckableTag;

class PlanList extends Component{

    state = {
        selectedTags: [],
    };

    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }

    render(){
        const { selectedTags } = this.state;
        return(
            <div>
                {/*search*/}
                <Search className={style["search-wrapper"]} />

                {/*content*/}
                <div>
                    列表区域
                </div>
            </div>
        );
    }
}

export default PlanList;
