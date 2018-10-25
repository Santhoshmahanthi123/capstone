import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate,
  Input, Tooltip, Cascader, Row, Col, Checkbox, AutoComplete
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class PostAd extends Component {
  state={
    isSaved: false
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        console.log('Received values of form: ', values);
        this.setState({
          isSaved: true
        })
        alert("Successfully added the product!!")
      }
    });
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      console.log(e)
      return e;
    }
    return e && e.fileList;
  }

  render() {
    if(this.state.isSaved){
     return <Redirect to={{
        pathname:"/Profile"
      }}/>
    }
    const { getFieldDecorator } = this.props.form;
    
     const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
      <h2>Post A Product!</h2>
      <FormItem
          {...formItemLayout}
          label="Title"
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please product Title!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
          <FormItem
          {...formItemLayout}
          label="Quantity"
        >
          {getFieldDecorator('input-number', { initialValue:2 })(
            <InputNumber min={1} max={20} />
          )}
          </FormItem>
        <FormItem
          {...formItemLayout}
          label="Price &#8377;"
        >
          {getFieldDecorator('price', {
            rules: [{ required: true, message: 'Please product Price!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Desctiption"
        >
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please product description!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
          <FormItem
          {...formItemLayout}
          label="Image"
          
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <input type="file"
            label="Upload an Image" />
          )}
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedDemo = Form.create()(PostAd);
export default WrappedDemo;