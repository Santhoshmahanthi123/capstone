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
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <div
      // {...formItemLayout}
        style={{
          background: "#fff",
          padding: "30px",
          marginBottom: 10,
          fontFamily: "Verdana"
        }}
      >
        <Row gutter={16}  style={{ paddingBottom: 20 }}>
          {da.map((product, index) => {
            return (
              <Col xs={24} md={12} lg={8} key={index}>
                <Card
                  title={product.title}
                  bordered={true}
                  style={{
                    backgroundColor: "#0f293a",
                    border: "3px solid black",
                    borderRadius: 5,
                    marginBottom: 10
                  }}
                  bodyStyle={{ color: "white" }}
                  headStyle={{ color: "white", fontStyle: "italic" }}
                >
                  <table>
                    <tbody style={{fontSize:15}}>
                      <tr>
                        <td>
                          <Link
                            to={{
                              pathname: "/Product/" + product._id,
                              state: { data: product }
                            }}
                            push
                          >
                            <img
                              src={product.image}
                              style={{
                                width: '70',
                                height: '70',
                                marginBottom: 20
                              }}
                            />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Price &#8377;: {product.price}</td>
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
