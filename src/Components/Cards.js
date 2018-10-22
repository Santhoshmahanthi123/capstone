import { Card, Col, Row } from "antd";
import React, { Component } from "react";
import "antd/dist/antd.css";

class Cards extends Component {
  handleClick = () =>{
    console.log("Image is clicked!")
    //logic to redirect to the particular product page
  }
  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
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
        </Row>
      </div>
    );
  }
}
export default Cards;
