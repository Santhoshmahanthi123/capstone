import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login'
import ImageSlider from './Components/ImageSlider'
import Snacks from './Components/Snacks'
import Cards from './Components/Cards'

class Routes extends Component{
    render(){
        return(
            <Switch>
                <ImageSlider />
                <Cards />
                <Route exact path="/" component= {Home}/>
                <Route path="/Login" component = {Login}/>
                <Route path="/Food/Snacks" component = {Snacks}/>
                {/* <Route/> */}
            </Switch>
        )
    }
}
export default Routes;