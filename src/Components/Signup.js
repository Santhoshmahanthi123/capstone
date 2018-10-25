import React, { Component } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
} from "antd";
import { connect } from "react-redux";

import { withRouter, Redirect } from "react-router-dom";
import { signupFn } from "../Redux/Reducers/SignupReducer";

const FormItem = Form.Item;
const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    isValid: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let { name,email, password, mobile, address, pincode  } = this.state;
        this.props.signupFn(name,email, password, mobile, address, pincode);
        this.setState({
          isValid: true
        })
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

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    if(this.state.isValid){
      return(
         <Redirect to={{
                       pathname: '/Profile',
                   }} push  />
      )
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
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "91"
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="1">+1</Option>
      </Select>
    );
    // let { username, password } = this.state;
    let { isSignupPending, isSignupSuccess, SignupError } = this.props;
    console.log("Signup Success is :", isSignupSuccess);
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="Sign Up Form" />
        <FormItem {...formItemLayout} label={<span>Name&nbsp;</span>}>
          {getFieldDecorator("Name", {
            rules: [
              {
                required: true,
                message: "Please input your Name!",
                whitespace: true
              }
            ]
          })(<Input onChange={e => this.setState({ name: e.target.value })} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(
            <Input onChange={e => this.setState({ email: e.target.value })} />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Confirm Password">
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(
            <Input
              type="password"
              onBlur={this.handleConfirmBlur}
              onChange={e => this.setState({ password: e.target.value })}
            />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Phone Number">
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your phone number!" }
            ]
          })(
            <Input
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
              onChange={e => this.setState({ mobile: e.target.value })}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Address">
          {getFieldDecorator("address", {
            rules: [
              {
                required: true,
                message: "Please input your address!"
              }

              //{
              //   validator: this.validateToNextPassword,
              // }
            ]
          })(
            <Input
              type="address"
              onChange={e => this.setState({ address: e.target.value })}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label={<span>Pincode&nbsp;</span>}>
          {getFieldDecorator("Pincode", {
            rules: [
              {
                required: true,
                message: "Please input your Pincode!",
                whitespace: true
              }
            ]
          })(
            <Input onChange={e => this.setState({ pincode: e.target.value })} />
          )}
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
        {isSignupPending && <div>Please wait..</div>
        // jquery.getElementById()
        }
        {isSignupSuccess && <div>Welcome</div>}
        {SignupError && <div>{SignupError.message}</div>}
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignupPending: state.signupFn.isSignupPending,
    isSignupSuccess: state.signupFn.isSignupSuccess,
    SignupError: state.signupFn.SignupError
  };
};

const dispatchToProps = dispatch => {
  return {
    signupFn: (name,email, password, mobile, address, pincode) => dispatch(signupFn(name,email, password, mobile, address, pincode))
    //cancelAction: () => dispatch(cancelAction())
  };
};

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default withRouter(
  connect(
    mapStateToProps,
    dispatchToProps
  )(WrappedRegistrationForm)
);
