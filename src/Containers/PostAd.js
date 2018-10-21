import React, { Component } from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Upload,
  message,
  InputNumber
} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  onChange = value => {
    console.log("changed", value);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "91"
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="1">+1</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    const Option = Select.Option;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    function handleBlur() {
      console.log("blur");
    }

    function handleFocus() {
      console.log("focus");
    }

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

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="Title">
          {getFieldDecorator("title", {
            rules: [
              {
                type: "text",
                message: "The input is not valid Title!"
              },
              {
                required: true,
                message: "Please input your ad's Title!"
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Price">
          {getFieldDecorator("price", {
            rules: [
              {
                required: true,
                message: "Please input the price!"
              }
            ]
          })(<Input type="text" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Quantity">
          {getFieldDecorator("quantity", {
            rules: [
              {
                required: true,
                message: "Please select available quantity!"
              }
            ]
          })(
            <InputNumber
              style={{ marginLeft: 10 }}
              min={1}
              max={10}
              defaultValue={3}
              onChange={this.onChange}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Category">
          {getFieldDecorator("category", {
            rules: [
              {
                required: true,
                message: "Please select the category!"
              }
            ]
          })(
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a Category"
              optionFilterProp="children"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="food">Food</Option>
              <Option value="medicines">Medicines</Option>
              <Option value="miscellaneous">Miscellaneous</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Sub category">
          {getFieldDecorator("SubCategory", {
            rules: [
              {
                required: true,
                message: "Please select the sub-category!"
              }
            ]
          })(
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a Sub-Category"
              optionFilterProp="children"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="food">Food</Option>
              <Option value="medicines">Medicines</Option>
              <Option value="miscellaneous">Miscellaneous</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Description">
          {getFieldDecorator("description", {
            rules: [
              {
                required: true,
                message: "Please provide a valide description!"
              }
            ]
          })(<Input type="text" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Image">
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Click to Upload
            </Button>
          </Upload>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
