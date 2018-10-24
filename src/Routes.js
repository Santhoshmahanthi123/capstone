import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
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

class Routes extends Component{
    render(){
        return(
            <Switch>
                {/* <ImageSlider />
                <Cards /> */}
                <Route path="/Home" component= {Homebasic}/>
                <Route exact path="/login" component = {Login}/>
                <Route path="/Signup" component = {Signup}/>
                <Route exact path="/postAd" component = {PostAd}/>
                <Route exact path="/foods" component = {Snacks}/>
                {/* <Route exact path="/Food/Snacks" component = {Snacks}/> */}
                <Route path="/Home" component = {Cards}/>
                <Route path="/Signup" component = {Signup}/>
                <Route path="/Product/chat" component = {Chat}/>
                <Route path="/ReportUs" component = {ReportUs}/>
                <Route path="/Profile" component = {Profile}/>
                <Route exact path="/Product/:id" component = {Product}/>
                <Route exact path="/Product/:id/CartItem" component = {CartItem}/>
                <Route exact path="/product/:id/payment" component = {Payment}/>
                {/* How to build the below product route */}
                {/* <Route path="/category/subcategory/productid" component = {Product}/>                 */}
                {/* <Route/> */}
                <Route component={PageNotFound} />

                {/* Implement the logic for secured routes for cart, product, payment, chat */}
            </Switch>
        )
    }
}
export default Routes;