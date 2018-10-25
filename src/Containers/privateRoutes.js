import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from '../Redux/Reducers/LoginReducer';

const PrivateRoute = ({ component: Component, currentUser, path, ...rest }) =>
  <Route
      // exact
      // {...rest}
      path={path}
      render={props =>
        {
          if(currentUser){

            return <Component currentUser={currentUser} {...props}  {...rest} /> 
          }
          else{
            login();
              return <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location }
                }}
                /> 
            } 
        }
      }
    />;
  

  const mapStateToProps= (state) =>{
    return {
      isLoginSuccess: state.loginFn.isLoginSuccess,
      user: state.loginFn.user,  
    }
  }
  const dispatchToProps = (dispatch) =>{
    return {
        login: (username,password) => dispatch(login(username,password))
    }
}
  
  export default withRouter(
    connect(mapStateToProps,dispatchToProps)(PrivateRoute)
  );