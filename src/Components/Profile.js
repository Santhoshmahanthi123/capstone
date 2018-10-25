import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Profile extends Component{
    render(){
        let user = localStorage.getItem('user');

        return(
            <div>
                <div>Hii This is profile of {user.user.name} </div>
            <Link to="/postAd">Post Your Product</Link>
            </div>
        )
    }
}

export default Profile;