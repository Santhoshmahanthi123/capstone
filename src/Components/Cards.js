import { Card, Col, Row } from "antd";
import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "antd/dist/antd.css";
//import { fakeData } from './HomeBasic';

class Cards extends Component {
  constructor(props){
    super(props);
    console.log("From Cards constructor", typeof(props))
  }
  handleClick = () =>{
    console.log("Image is clicked!")
    //logic to redirect to the particular product page
  }
  render() {
    //const { file } = this.props.file;
    console.log(this.props.data, "%%%%%%%%%%%%%%%%%%");
    let da = this.props.data;    
    console.log(typeof(da), "++++++++++++++++++++");

    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
      <Row gutter={16}>
        {da.map((product, index) => {
         return (
            <Col span={8} key={index}>
              <Card title={product.title} bordered={false}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                       
                        <Link to={"Product/" + product.title}>
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
        </Row>
      
    </div>
    );
  }
}
export default Cards;
