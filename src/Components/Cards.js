import { Card, Col, Row } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
//import { fakeData } from './HomeBasic';

class Cards extends Component {
  constructor(props) {
    super(props);
    console.log("From Cards constructor", props);
  }

  render() {
    //const { file } = this.props.file;
    console.log(this.props.data, "%%%%%%%%%%%%%%%%%%");
    let da = this.props.data;
    console.log(da, "++++++++++++++++++++");

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
                          <Link
                            to={{
                              pathname: "/Product/" + product._id,
                              state: { data: product }
                            }}
                          >
                            {" "}
                            <img
                              src={product.image}
                              style={{ width: 40, height: 40 }}
                            />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                      <td>Price: {product.price}</td>
                      </tr>
                      {/* <tr>
                      <td>Description: {product.description}</td>
                      </tr> */}
                    </tbody>
                  </table>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Cards;
