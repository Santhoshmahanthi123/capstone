import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom'
// import './Login.css'
import { connect } from 'react-redux'
import { login } from '../Redux/Reducers/LoginReducer';
import { Form, Icon, Input, Button, Checkbox } from "antd";

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    //console.log("%%%%%%%%%%%%%%5", props)
    this.state = {};
    this.state.nextPage = false;
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let { username, password } = this.state;
         this.props.login(username, password);
          this.setState({
            nextPage: true
          })
      }
    });
    
  };

  render() {
    //let { username, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError, user } = this.props;
     console.log(user+"  Local user")
    if (this.state.nextPage) {
      localStorage.setItem('user', user )
      console.log("LOCAL STORAGE", localStorage.getItem('user'))
      return (
        <Redirect
          to={{
            pathname: "/Profile",
            state: user
          }}
          push
        />
      );
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              onChange={e => this.setState({ username: e.target.value })}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password &nbsp;
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          &nbsp; Or <a href="">register now!</a>
        </FormItem>
        {isLoginPending && <div>Please wait..</div>}
        {isLoginSuccess && <div>Welcome Back !!</div>}
        {loginError && <div>{loginError.message}</div>}
      </Form>
    );
  }
}
const mapStateToProps = (state) =>{

  return {
      isLoginPending: state.loginFn.isLoginPending,
      isLoginSuccess: state.loginFn.isLoginSuccess,
      loginError: state.loginFn.loginError,
      user: state.loginFn.user,
      // visibleModal: state.loginFn.visibleModal,
  };
}

const dispatchToProps = (dispatch) =>{
  return {
      login: (username, password) => dispatch (login(username, password)),
      
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default withRouter(
  connect(mapStateToProps, dispatchToProps)(WrappedNormalLoginForm));
