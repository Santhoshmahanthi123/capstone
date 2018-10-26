import { Carousel, Row, Col, Card } from "antd";
import { withRouter, Link } from "react-router-dom";
import React, { Component } from "react";
import Axios from "axios";
import "antd/dist/antd.css";
import "./ImageSlider.css";
import Cards from "./Cards";
import Spinner from 'react-spinkit'
import { connect } from "react-redux";
import { displayProduct } from "../Redux/Reducers/ProductReducer";
import './ImageSlider.css';


class Homebasic extends Component {
  state = {
    isClicked: false,
    data: []
  };

  componentDidMount() {
   
    this.props.displayProduct();
  }

  handleClick = () => {
    console.log("Image is clicked!");
    //logic to redirect to the particular product page
    this.setState({
      isClicked: true
    });
  };

  render() {
    //  console.log("Food..........", this.state.data)
    console.log("************************" + Object.keys(this.state.data));

    // console.log("Food....6757......",this.state.data[0])
    let { isProductPending, productShow, productError, prodData } = this.props;
    // console.log("PRODDDDDDDDATATATAAA", prodData)
    return (
      <div  >
        <Carousel className="Carousel" autoplay >
          <div>
          <img src="../h2.jpg"/>
          </div>
          <div>
          <img src="../food2.jpg"/>
          </div>
          <div>
          <img src="../food3.jpg"/>            
          </div>
          <div>
          <img src="../food4.jpeg"/>
          </div>
        </Carousel>
        {/* <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          {file.map((product, index) => {
           return (
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="../1.png"
                            style={{ width: 40, height: 40 }}
                            // onClick={this.handleClick}
                          />
                          <Link to={"Product/" + product.title}>
                            {product.title}
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
        </div> */}

        {isProductPending && <Spinner name="pacman" color="blue" style={{ display: 'flex',
    alignItems: 'center',justifContent: 'center'}}/>
      
        }
        {productShow && <Cards data={prodData}/>}
        {productError && <div>{productError.message}</div>}

        {/* <Cards data={this.state.prodData}/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state, "STATATAATATATATAEEE");
  return {
    isProductPending: state.productReducer.isProductPending,
    productShow: state.productReducer.productShow,
    productError: state.productReducer.productError,
    prodData: state.productReducer.product
  };
};

const dispatchToProps = dispatch => {
  return {
    displayProduct: () => dispatch(displayProduct())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    dispatchToProps
  )(Homebasic)
);
