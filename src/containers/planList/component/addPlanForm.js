import React,{ Component } from 'react';
import { Form, Input, Select, Spin, Upload, Button, Icon, message} from 'antd';

import { tagTheme,tagSubject,tagAge,tagCourse,tagScene,Tags } from '../../../config';

import axios from '../../../util/axios';
import util from "../../../util/util";


import style from '../style.less'

const FormItem = Form.Item;
const Option = Select.Option;

class AddGroupForm extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:false,
            sourceDisabled:true,
            filePlan: [],
            fileShow:[],
            fileShowDir:'',
            dirObject:[]
        };
    }

    componentDidMount(){

    }

    handleSubmit = ()=>{
        const { filePlan,fileShow } = this.state;
        const formData = new FormData();
        filePlan.forEach((file) => {
            formData.append('planFile', file);
        });
        fileShow.forEach((file) => {
            formData.append('planShow', file);
        });

        this.props.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            Object.keys(values).map(key=>{
                if (key!=="planFile" && key!=="planShow"){
                    if (!util.isEmpty(values[key])){
                        formData.append(key,values[key]);
                    }
                }
            })
            axios.postByMultipart("/plan/savePlan",formData)
                .then(res=>{
                    message.success("添加成功!");
                })
        });
    }

    parseTag=(tagName)=>{
        const value = this.props.formObject[tagName+""];
        return util.isEmpty(value)||value===0?"":value+"";
    }

    render(){

        const planFileProps = {
            onRemove: (file) => {
                this.setState(({ filePlan }) => {
                    const index = filePlan.indexOf(file);
                    const newFileList = filePlan.slice();
                    newFileList.splice(index, 1);
                    return {
                        filePlan: newFileList,
                    };
                });
            },
            beforeUpload: (file) => {
                this.setState(({ filePlan }) => ({
                    filePlan: [...filePlan, file],
                }));
                return false;
            },
            filePlan: this.state.filePlan,
        };

        const planShowDirProps = {
            //清空
            onRemove: (file) => {
                this.setState(({}) => {
                    return {
                        fileShow: [],
                        fileShowDir: '',
                        dirObject:[]
                    };
                });
            },
            beforeUpload: (file) => {
                const path = file.webkitRelativePath;
                const dirIndex = path.indexOf("/");
                const dir = path.substr(0,dirIndex);
                const dirObject = [{
                    uid: '-1',
                    name: dir,
                    status: 'done',
                    // url: 'http://www.baidu.com/xxx.png',
                }]
                this.setState(({ fileShow }) => ({
                    fileShow: [...fileShow, file],
                    fileShowDir : dir,
                    dirObject : dirObject
                }));
                return false;
            },
            fileShow: this.state.fileShow,
        };


        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4,offset:2 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16},
            },
        };


        return (



            <div className={style.formWrapper}>
            <Spin spinning={this.state.loading}>
                <Form >

                    <FormItem
                        {...formItemLayout}
                        label="教案名称"
                    >
                        {getFieldDecorator('planName', {
                            rules: [{
                                required: true, message: '请输入教案名称',
                            }],
                            initialValue: this.props.formObject.planName
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="简介"
                    >
                        {getFieldDecorator('planDesc', {
                            rules: [{
                                required: true, message: '请输入简介',
                            }],
                            initialValue: this.props.formObject.planDesc
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="标签-课程"
                    >
                        {

                            getFieldDecorator('tagCourse',{
                                initialValue: this.parseTag('tagCourse')
                        })(
                            <Select defaultValue="1">
                                {
                                    Object.keys(tagCourse).map(itemName=>
                                        <Option value={tagCourse[itemName].key} key={tagCourse[itemName].key}>{tagCourse[itemName].name}</Option>
                                    )
                                }
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="标签-场景"
                    >
                        {getFieldDecorator('tagScene',{
                            initialValue: this.parseTag('tagScene')
                        })(
                            <Select>
                                {
                                    Object.keys(tagScene).map(itemName=>
                                        <Option value={tagScene[itemName].key} key={tagScene[itemName].key}>{tagScene[itemName].name}</Option>
                                    )
                                }
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="标签-主题"
                    >
                        {getFieldDecorator('tagTheme',{
                            initialValue: this.parseTag('tagTheme')
                        })(
                            <Select>
                                {
                                    Object.keys(tagTheme).map(itemName=>
                                        <Option value={tagTheme[itemName].key} key={tagTheme[itemName].key}>{tagTheme[itemName].name}</Option>
                                    )
                                }
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="标签-年龄"
                    >
                        {getFieldDecorator('tagAge',{
                            initialValue: this.parseTag('tagAge')
                        })(
                            <Select>
                                {
                                    Object.keys(tagAge).map(itemName=>
                                        <Option value={tagAge[itemName].key} key={tagAge[itemName].key}>{tagAge[itemName].name}</Option>
                                    )
                                }
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="标签-领域"
                    >
                        {getFieldDecorator('tagSubject',{
                            initialValue: this.parseTag('tagSubject')
                        })(
                            <Select>
                                {
                                    Object.keys(tagSubject).map(itemName=>
                                        <Option value={tagSubject[itemName].key} key={tagSubject[itemName].key}>{tagSubject[itemName].name}</Option>
                                    )
                                }
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="上传ppt"
                        disable={true}
                        type="hidden"
                    >
                        {getFieldDecorator('planFile',{
                            // initialValue: `${util.isEmpty(this.props.info.appId)?"":this.props.info.appId}`
                        })(
                            <Upload {...planFileProps}>
                                <Button disabled={this.state.filePlan.length>0}>
                                    <Icon type="upload" /> 上传文件
                                </Button>
                            </Upload>
                        )}

                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="展示文件"
                    >
                        {getFieldDecorator('planShow',{
                            // initialValue: `${util.isEmpty(this.props.info.appId)?"":this.props.info.appId}`
                        })(
                            <Upload {...planShowDirProps}
                                    directory
                                    fileList={this.state.dirObject}
                            >
                                <Button disabled={this.state.fileShow.length>0}>
                                    <Icon type="upload" /> 上传目录
                                </Button>
                            </Upload>
                        )}

                    </FormItem>

                    {/*隐藏表单方式*/}
                    {
                        getFieldDecorator('id',{
                            initialValue: this.props.formObject.id
                        })(
                            <Input type="hidden" />
                        )
                    }

                    <Button type="primary"
                            onClick={this.handleSubmit}
                            className={style.formRightButton}
                    >提交
                    </Button>
                    <Button
                            onClick={this.handleSubmit}
                            className={style.formRightButton}
                    >重置
                    </Button>

                </Form>
            </Spin>
            </div>
        )
    }
}


AddGroupForm.defaultProps = {
    formObject:{}
};


const WrappedAddGroupForm = Form.create()(AddGroupForm);

export default WrappedAddGroupForm;

