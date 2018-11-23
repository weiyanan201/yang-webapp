import React,{ PureComponent } from 'react';
import { Table,Button,Modal, Divider } from 'antd';
import { connect } from 'react-redux';
import { actions } from '../../redux/plan.redux';

import Search from './component/search';
import AddPlanForm from './component/addPlanForm';

import style from './style.less';

const NEW_TITLE = "新建教案";
const UPDATE_TITLE = "修改教案";

@connect(
    state=>{
        return {
            tableList:state.getIn(["plan","tableList"]).toArray(),
        }
    }
    ,{
        searchQuery : actions.searchQuery
    }
)
class PlanList extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            columns : [
                {
                    title: '教案名称',
                    dataIndex: 'planName',
                    align: 'center',
                },{
                    title: '简介',
                    dataIndex: 'planDesc',
                    align: 'center',
                },{
                    title: '操作',
                    align: 'center',
                    render: (text, record) => (
                        <span>
                            <a onClick={()=>this.modalToggle(true,UPDATE_TITLE,record)}>编辑</a>
                            <Divider type="vertical" />
                            <a >删除</a>
                            <Divider type="vertical" />
                            <a> 下载</a>
                        </span>
                    )
                }
            ],
            modalVisible:false,
            modalTitle:NEW_TITLE,
            formObject:{}
        }
    }

    componentDidMount(){
        //初始化列表
        this.props.searchQuery()
    }

    state = {
        selectedTags: [],
    };

    modalToggle(toggle,title=NEW_TITLE,formObject){
        console.log(title,formObject);
        this.setState({
            modalVisible:toggle,
            modalTitle:title,
            formObject:formObject
        })
    };

    render(){
        return(
            <div>
                {/*search*/}
                <Search className={style.searchWrapper} />

                {/*content*/}
                <Button onClick={()=>this.modalToggle(true)}>添加教案</Button>
                <div className={style.listWrapper}>
                    <Table columns={this.state.columns} dataSource={this.props.tableList} size="small"/>
                </div>

                <div>
                    <Modal
                        title={this.state.modalTitle}
                        visible={this.state.modalVisible}
                        width={600}
                        onCancel={() => this.modalToggle(false) }
                        // onOk={this.handleAddSubmit}
                        destroyOnClose={true}
                        maskClosable={false}
                        footer={null}
                        cancelText={"取消"}
                        // confirmLoading={this.state.addLoading}
                    >
                        <AddPlanForm formObject={this.state.formObject}
                                      wrappedComponentRef={(inst) => {
                                          this.addPlanForm = inst;
                                      }}/>

                    </Modal>
                </div>
            </div>
        );
    }
}

export default PlanList;
