import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import PostAd from './Containers/PostAd';
import Signup from './Components/Signup';
import Product from './Components/Product';
import ImageSlider from './Components/ImageSlider'
import Snacks from './Components/Snacks'
import Cards from './Components/Cards'

class Routes extends Component{
    render(){
        return(
            <Switch>
                {/* <ImageSlider />
                <Cards /> */}
                <Route exact path="/" component= {Home}/>
                <Route path="/Login" component = {Login}/>
                <Route path="/Signup" component = {Signup}/>
                <Route path="/PostAd" component = {PostAd}/>
                <Route path="/Food/Snacks" component = {Snacks}/>
                {/* How to build the below product route */}
                <Route path="/category/subcategory/productid" component = {Product}/>                
                {/* <Route/> */}
            </Switch>
        )
    }
}
export default Routes;