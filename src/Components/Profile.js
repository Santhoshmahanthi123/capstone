import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
class Profile extends Component{
    state={
        isClicked:false
    }
    click = () =>{
        localStorage.clear();
        this.setState({
            isClicked:true
        })
    }

    render(){
        if(this.state.isClicked){
            return <Redirect to="/Home" />
        }
        let user = JSON.parse(localStorage.getItem('user'));
        console.log("PROFILEEEE", (user.name))
        return(
            <div style={{background:'#0f293a', minHeight:200}}>
                <div onClick={this.click} style={{color:'white',fontSize: 20,pointer:'cursor',marginRight:'auto', fontStyle:'italic',fontFamily:'Verdana', marginBottom:20}}>Logout</div>
                <div style={{color:'white',fontSize: 30, fontStyle:'italic',fontFamily:'Verdana', marginBottom:20}}>Welcome {user.name}!! </div>
            <Link to="/postAd" style={{color:'white', padding:20,textDecoration:'underline'}}>Post Your Product</Link>
            </div>
        )
    }
}

export default Profile;