import { Card, Col, Row, Carousel } from "antd";
import {Redirect, Link} from 'react-router-dom';
import React, { Component } from "react";
import "antd/dist/antd.css";
import './ImageSlider.css'
import ProductsList from "./ProductsList";

export const fakeData = [
  {
    id: 1,
    name: "clothes"
  },
  {
    id: 2,
    name: "shoes"
  },
  {
    id: 3,
    name: "food"
  },
  {
    id: 4,
    name: "furniture"
  },
]

class Homebasic extends Component {
  state={
    isClicked: false
  }
  handleClick = () =>{
    console.log("Image is clicked!")
    //logic to redirect to the particular product page
    this.setState({
      isClicked: true
    })
  }
  render() {
    if(this.state.isClicked){
      return  <Redirect to="/Products/43141342141/"/>
    }

    return (
      <div>
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>

     <div style={{ background: "#ECECEC", padding: "30px" }}>
        {/* <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              <table>
                <tbody>
                <tr>
                  <td><img src="../1.png" style={{width:40,height: 40}} onClick={this.handleClick}/></td>
                </tr>
                <tr>
                  <td>Price: 10</td>
                </tr>
                </tbody>
              </table>
            </Card>
          </Col>
          <Col span={8}>
          <Card title="Card title" bordered={false}>
              <table>
              <tbody>
                <tr>
                  <td><img src="../1.png" style={{width:40,height: 40}} onClick={this.handleClick}/></td>
                </tr>
                <tr>
                  <td>Price: 10</td>
                </tr>
                </tbody>
              </table>
            </Card>
          </Col>
          <Col span={8}>
          <Card title="Card title" bordered={false}>
              <table>
              <tbody>
                <tr>
                  <td><img src="../1.png" style={{width:40,height: 40}} onClick={this.handleClick}/></td>
                </tr>
                <tr>
                  <td>Price: 10</td>
                </tr>
                </tbody>
              </table>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 10 }}>
          <Col span={8}>
          <Card title="Card title" bordered={false}>
              <table>
              <tbody>
                <tr>
                  <td><img src="../1.png" style={{width:40,height: 40}} onClick={this.handleClick}/></td>
                </tr>
                <tr>
                  <td>Price: 10</td>
                </tr>
                </tbody>
              </table>
            </Card>
          </Col>
          <Col span={8}>
          <Card title="Card title" bordered={false}>
              <table>
              <tbody>
                <tr>
                  <td><img src="../1.png" style={{width:40,height: 40}} onClick={this.handleClick}/></td>
                </tr>
                <tr>
                  <td>Price: 10</td>
                </tr>
                </tbody>
              </table>
            </Card>
          </Col>
          <Col span={8}>
          <Card title="Card title" bordered={false}>
              <table>
              <tbody>
                <tr>
                  <td><img src="../1.png" style={{width:40,height: 40}} onClick={this.handleClick}/></td>
                </tr>
                <tr>
                  <td>Price: 10</td>
                </tr>
                </tbody>
              </table>
            </Card>
          </Col>
        </Row> */}
        <ul>
          {fakeData.map((product, index) => {
            return <li><Link to={"Product/"+product.id}>{product.name}</Link></li>
          })}
        </ul>
      </div>
        {/* <ProductsList/> */}
      </div>
    );
  }
}
export default Homebasic;
