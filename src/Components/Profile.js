import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Profile extends Component{
    render(){
        return(
            <div>
                <div>Hii This is profile </div>
            <Link to="/postAd">Post Your Product</Link>
            </div>
        )
    }
}

export default Profile;