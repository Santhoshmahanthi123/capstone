import React, {Component} from 'react';
import { Card, Col, Row } from "antd";
// import {Switch, Route} from 'react-router-dom';
// import Cards from './Cards';
import Axios from 'axios'
import {Link} from 'react-router-dom'
//import file from '../test.json'

class Snacks extends Component{
    constructor(props){
        super(props);
        console.log("Constructor of Snacks")
    }
    componentDidMount = () => {
        Axios
          .get("https://capstone-inneed.herokuapp.com/foods")
          .then((response) => {
            console.log(response);
            this.setState({
              data: response
            })
          })
          .catch((error)=> {
            console.log(error);
          });
        // console.log(file, "$$$$$$$$$$$$$$$$$$$$")
        // this.setState({
        //   data: file
        // })
      };
    render() {
       // const { data } = this.props.data;
       // console.log(data, "%%%%%%%%%%%%%%%%%%");
        return (
          <div style={{ background: "#ECECEC", padding: "30px" }}>
          {/* <Row gutter={16}>
            {data.map((product, index) => {
             return (
                <Col span={8} key={index}>
                  <Card title={product.name} bordered={false}>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                           
                            <Link to={"Product/" + product.id}>
                            <img
                              src="../1.png"
                              style={{ width: 40, height: 40 }}
                              // onClick={this.handleClick}
                            />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Price: {product.price}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Card>
                </Col>
              )
            })}
            </Row> */}
          
        </div>
        );
      }
}
export default Snacks;
