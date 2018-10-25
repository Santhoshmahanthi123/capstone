import React, {Component} from 'react';
import { Card, Col, Row } from "antd";
// import {Switch, Route} from 'react-router-dom';
import Cards from './Cards';
import Axios from 'axios'
import {Link} from 'react-router-dom'
//import file from '../test.json'

class Snacks extends Component{
    constructor(props){
        super(props);
        console.log("Constructor of Snacks")
        this.state={
          data: []
        }
    }
  async componentDidMount() {
       await Axios
          .get("https://capstone-inneed.herokuapp.com/foods")
          .then ((response) => {
            console.log(response,"(_____))))((((");
            this.setState({
              data: response.data
            })
          })
          .catch((error)=> {
            console.log("This is error:",error);
          });
        
      };
    render() {
       // const { data } = this.props.data;
        console.log(this.state.data, "%%%%%%%%%%%%%%%%%%");
        return (
          <div style={{ background: "#ECECEC", padding: "30px" }}>
            
            {/* {this.state.data.map((product, index) => { */}

             {/* return ( */}
              {/* <Row gutter={16}>
                <Col span={8} >
                  <Card title={this.state.data.title} bordered={false}>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                           
                            <Link to={"Product/" + this.state.data.id}>
                            <img
                              src="../1.png"
                              style={{ width: 40, height: 40 }}
                              // onClick={this.handleClick}
                            />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Price: {this.state.data.price}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Card>
                </Col>
                </Row> */}
              {/* ) */}
            {/* })} */}
           <Cards data={this.state.data}/>
          
        </div>
        );
      }
}
export default Snacks;

// file.contacts.forEach((user) => {
//               console.log(user.email+"*********************")
//               console.log(username+"&&&&&&&&&&&&&&&&&&")
//               if(username ===user.email){
//                   //try to use indexOf
//                   if(password === user.password){
//                       console.log(user)
//                       return resolve(user)
//                   }
//                   else{
//                       return reject(new Error("Invalid password"))
//                   }
//               }
//               else{// check with flags
//                  flag= true
//               }
             
//           })