import { Card, Col, Row, Carousel } from "antd";
import React, { Component } from "react";
import "antd/dist/antd.css";
import './ImageSlider.css'
import ProductsList from "./ProductsList";

class Homebasic extends Component {
  render() {
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
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: 10 }}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
        <ProductsList/>
      </div>
    );
  }
}
export default Homebasic;
