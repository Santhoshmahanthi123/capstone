import { Carousel, Row, Col, Card } from "antd";
import { withRouter, Link } from "react-router-dom";
import React, { Component } from "react";
import Axios from "axios";
import "antd/dist/antd.css";
import "./ImageSlider.css";
import Cards from "./Cards";
import { connect } from "react-redux";
import { displayProduct } from "../Redux/Reducers/ProductReducer";
// import file from '../test.js'
// import ProductsList from "./ProductsList";

// export const fakeData = [
//   {
//     id: 1,
//     name: "clothes"
//   },
//   {
//     id: 2,
//     name: "shoes"
//   },
//   {
//     id: 3,
//     name: "food"
//   },
//   {
//     id: 4,
//     name: "furniture"
//   }
// ];
class Homebasic extends Component {
  state = {
    isClicked: false,
    data: []
  };

  componentDidMount() {
    // Axios
    //   .get("https://capstone-inneed.herokuapp.com/foods")
    //   .then((response) => {
    //     console.log(response,"$$$$$$$$@@@@");
    //     console.log(response.data.foods,"!!!!!!!!!!!!!!!!");
    //     this.setState({
    //       data: response.data.foods
    //     })
    //   })
    //   .catch((error)=> {
    //     console.log(error);
    //   });
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
    // if(this.state.isClicked){
    //   return  <Redirect to="/Products/43141342141/"/>
    // }
    //  console.log("Food..........", this.state.data)
    console.log("************************" + Object.keys(this.state.data));

    // console.log("Food....6757......",this.state.data[0])
    let { isProductPending, productShow, productError, prodData } = this.props;
    console.log("PRODDDDDDDDATATATAAA", prodData)
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

        {isProductPending && <div>Please wait..</div>
      
        }
        {productShow && <Cards data={prodData}/>}
        {productError && <div>{productError.message}</div>}

        {/* <Cards data={this.state.prodData}/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "STATATAATATATATAEEE");
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


//  (
//   <div style={{ background: "#ECECEC", padding: "30px" }}>
//   <Row gutter={16}>
//     {prodData.map((product, index) => {
//       return (
//         <Col span={8}>
//           <Card title="Card title" bordered={false}>
//             <table>
//               <tbody>
//                 <tr>
//                   <td>
//                     <img
//                       src="../1.png"
//                       style={{ width: 40, height: 40 }}
//                       // onClick={this.handleClick}
//                     />
//                     <Link to={"Product/" + product.title}>
//                       {product.title}
//                     </Link>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Price: {product.price}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </Card>
//         </Col>
//       );
//     })}
//   </Row>
// </div>
// )