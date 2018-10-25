import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, currentUser, path, ...rest }) =>
  <Route
      // exact
       {...rest}
      path={path}
      render={props =>
        {
          if(currentUser){
            console.log("CURRENT USER", currentUser)
            return <Component currentUser={currentUser} {...props}  {...rest} /> 
          }
          else{
            //login();
            console.log("CURRENT USER@@@", currentUser)
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
  

export default PrivateRoute;