import React, { Component } from 'react'

class ReportUs extends Component{
    render(){
        return(
            <div>
               <input type='email' placeholder="Enter Your Email ID"/><br/><br/>
               <input type='text' placeholder="Type Your Message"/><br/><br/>
                <input type="button" value="Send"/>
            </div>
        )
    }
}
export default ReportUs;