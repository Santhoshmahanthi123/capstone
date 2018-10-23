import { Card, Col, Row, Carousel } from "antd";
import { Redirect, Link } from "react-router-dom";
import React, { Component } from "react";
import Axios from "axios";
import "antd/dist/antd.css";
import "./ImageSlider.css";
import Cards from "./Cards";
import file from '../test.js'
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
    data:{}
  };

   componentDidMount () {
    // Axios
    //   .get("https://api.zalando.com/articles")
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({
    //       data: response
    //     })
    //   })
    //   .catch((error)=> {
    //     console.log(error);
    //   });
    console.log(file, "$$$$$$$$$$$$$$$$$$$$")
   this.setState({
      data: file
    })
   console.log("#############", typeof(this.state.data.foods))
  };

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
   console.log("Food..........", this.state.data)
   console.log("************************"+ Object.keys(this.state.data))

    console.log("Food....6757......",this.state.data[0])
    
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
        {/* <div>
          <ul>
          {this.state.data.foods.map(el => (
            <li>
              {el.title}: {el.price}
            </li>
          ))}
        </ul>
        </div> */}
        {/* <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          {d.map((product, index) => {
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
                          <Link to={"Product/" + product.id}>
                            {product.name}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Price: 10</td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
              </Col>
            )
          })}
          </Row>
        </div> */}
        {/* <Cards data={this.state.data}/> */}
      </div>
    );
  }
}
export default Homebasic;
