import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Form,
  Select,
  InputNumber,
  Button,
  Upload,
  Icon,
  message,
  Input,
  AutoComplete
} from "antd";
import axios from 'axios'

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const props = {
  name: "file",
  action: "//jsonplaceholder.typicode.com/posts/",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

class PostAd extends Component {
  state = {
    isSaved: false
  };
  handleSubmit = e => {
    let user= JSON.parse(localStorage.getItem('user'));
    let userId= user.userId;
    console.log("USERIDDD", userId)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("VALUESSSS", values)
        var fd= new FormData();
        fd.append('title', values.title);
        fd.append('description', values.description);
        fd.append('price', values.price);
        fd.append('quantity', values.quantity);
        fd.append('image', this.state.image);
        fd.append('user',userId)
        console.log("Received values of form: ", fd);

        this.setState({
          isSaved: true
        });
        
        // let data = {
        //   title: values.title,
        //   description: values.description,
        //   price: values.price,
        //   quantity: values.quantity,
        //   image: this.state.image,
        //   user:userId
        // }
      //  console.log("DATATATATATATATA", data)
        axios.post("https://inneed-back-end.herokuapp.com/medicines", fd)
        .then((Response)=>{
          alert("Successfully added the product!!");
          console.log("RESPONSE FROM UPLOADING", Response)
        })
       .catch((err)=>{
         console.log("Error in uploading", err)
       })
      }
    });
  };

  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      console.log(e);
      return e;
    }
    return e && e.fileList;
  };

  render() {
    if (this.state.isSaved) {
      return (
        <Redirect
          to={{
            pathname: "/Profile"
          }}
        />
      );
    }
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Post A Product!</h2>
        <FormItem {...formItemLayout} label="Title">
          {getFieldDecorator("title", {
            rules: [
              {
                required: true,
                message: "Please product Title!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Quantity">
          {getFieldDecorator("quantity", { initialValue: 2 })(
            <InputNumber min={1} max={20} />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Price &#8377;">
          {getFieldDecorator("price", {
            rules: [
              {
                required: true,
                message: "Please product Price!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Desctiption">
          {getFieldDecorator("description", {
            rules: [
              {
                required: true,
                message: "Please product description!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Image">
          {getFieldDecorator("upload", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
          })(
            // <Upload {...props}>
            //   <Button>
            //     <Icon type="upload" /> Click to Upload
            //   </Button>
            // </Upload>
            <input type="file" name="upload" onChange={(e) => this.setState({image: e.target.files[0]})}/>
          )}
        </FormItem>

        <FormItem wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedDemo = Form.create()(PostAd);
export default WrappedDemo;
