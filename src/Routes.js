import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
// import Home from './Components/Home';
import Login from './Components/Login';
import PostAd from './Containers/PostAd';
import Signup from './Components/Signup';
import Product from './Components/Product';
// import ImageSlider from './Components/ImageSlider'
import Snacks from './Components/Snacks'
import Cards from './Components/Cards'
import Chat from './Components/chat'
import Homebasic from './Components/HomeBasic';
import ReportUs from './Components/ReportUs'
import PageNotFound from './Components/PageNotFound'
import CartItem from './Components/CartItem';
import Profile from './Components/Profile';
import Payment from './Components/Payment';
import PrivateRoute from './Containers/privateRoutes';
import PrivateLoginRoute from './Containers/privateLoginRoute';
import { connect } from 'react-redux';

class Routes extends Component{
    
    render(){
        let localUser = localStorage.getItem('user')
      //  console.log("%%%%%%%%%%%%$%%%%%%%####@@@@", this.props.user)
   //   console.log("LOCAL STORAGE in ROUTES", localUser)

        return(
            <Switch>
                {/* <ImageSlider />
                <Cards /> */}
                <Route exact path="/" component= {Homebasic}/>
                <Route path="/Home" component= {Homebasic}/>
                <PrivateLoginRoute exact path="/login" component = {Login} currentUser={localUser}/>
                <Route path="/Signup" component = {Signup}/>
                <Route exact path="/postAd" component = {PostAd} />
                <Route exact path="/foods" component = {Snacks}/>
                {/* <Route exact path="/Food/Snacks" component = {Snacks}/> */}
                <Route path="/Home" component = {Cards}/>
                <Route path="/Signup" component = {Signup}/>
                <Route path="/Product/chat" component = {Chat}/>
                <PrivateRoute path="/ReportUs" component = {ReportUs} currentUser={localUser}/>
                <PrivateRoute path="/Profile" component = {Profile} currentUser={localUser}/>
                <Route exact path="/Product/:id" component = {Product}/>
                <PrivateRoute exact path="/Product/:id/CartItem" component = {CartItem} currentUser={localUser}/>
                <PrivateRoute exact path="/product/:id/payment" component = {Payment} currentUser={localUser}/>
                
                <Route component={PageNotFound} />

            </Switch>
        )
    }
}

const mapStateToProps= (state) =>{
    console.log("*************", state)
    return {
      isLoginSuccess: state.loginFn.isLoginSuccess,
      user: state.loginFn.user,
     }
  }
  export default withRouter(
    connect(mapStateToProps)(Routes)
  );
