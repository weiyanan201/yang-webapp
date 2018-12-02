import React,{ PureComponent } from 'react';
import { Table,Button,Modal, Divider, message  } from 'antd';
import { connect } from 'react-redux';
import { actions } from '../../redux/plan.redux';

import Search from './component/search';
import AddPlanForm from './component/addPlanForm';
import util from '../../util/util';
import style from './style.less';
import {SIZE_DEFAULT} from "../../config";
import axios from "../../util/axios";

const confirm = Modal.confirm;

const NEW_TITLE = "新建教案";
const UPDATE_TITLE = "修改教案";

@connect(
    state=>{
        return {
            tableList:state.getIn(["plan","tableList"]).toArray(),
            total:state.getIn(["plan","total"]),
            tags:state.getIn(["plan","tags"]).toArray(),
            searchValue:state.getIn(["plan","searchValue"]),
            role:state.getIn(["auth","role"])
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
                    width: '200px'
                },{
                    title: '简介',
                    dataIndex: 'planDesc',
                    align: 'center',
                    width: '800px'
                },{
                    title: '操作',
                    align: 'center',
                    render: (text, record) => (
                        <span>
                            {util.isAdmin(this.props.role)?<span><a onClick={()=>this.modalToggle(true,UPDATE_TITLE,record)}>编辑</a><Divider type="vertical" /></span>:null}
                            {util.isAdmin(this.props.role)?<span><a onClick={()=>{this.hanldeDelete(record.id,record.planName)}}>删除</a><Divider type="vertical" /></span>:null}
                            <a onClick={()=>this.handleDownload(record.id)} > 下载</a>
                            <Divider type="vertical" />
                            <a href={`/detail?id=${record.id}`} target="_blank" > 预览</a>
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
        this.props.searchQuery();
    }

    state = {
        selectedTags: [],
    };

    modalToggle(toggle,title=NEW_TITLE,formObject){
        this.setState({
            modalVisible:toggle,
            modalTitle:title,
            formObject:formObject
        })
    };

    onChange=(pageNumber)=> {
        this.props.searchQuery(this.props.searchValue,this.props.tags,pageNumber);
    };

    //添加、更新之后回调
    handelSuccess=()=>{
        this.setState({modalVisible:false});
        this.props.searchQuery(this.props.searchValue,this.props.tags);
    };

    hanldeDelete = (id,planName)=>{

        const _this = this;
        confirm({
            title: '删除确认',
            autoFocusButton:"cancel",
            content: `是否删除教案：${planName}`,
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                axios.post("/plan/delete",{id:id})
                    .then(res=>{
                        message.success("删除成功");
                        _this.props.searchQuery(_this.props.searchValue,_this.props.tags);
                    })
                    .catch(err=>{
                        console.error(err);
                        message.error("删除失败");
                    })
            }
        });

    };

    //处理下载流程
    handleDownload=(id)=>{
        axios.downloadByPost("/plan/download",{id:id})
            .then(res=>{
                message.success("开始下载");
            }).catch(err=>{
                console.log(err);
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
                    <Table columns={this.state.columns}
                           dataSource={this.props.tableList}
                           size="small"
                           bordered
                           pagination={{
                               total:this.props.total,
                               pageSize:SIZE_DEFAULT,
                           }}
                           total={this.props.total}
                           onChange={this.onChange}
                    />
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
                                      }}
                                     handelSuccess={() => this.handelSuccess()}
                        />

                    </Modal>
                </div>
            </div>
        );
    }
}

export default PlanList;
