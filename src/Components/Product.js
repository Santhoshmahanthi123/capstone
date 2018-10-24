import React, { Component } from "react";
// import { fakeData } from "./HomeBasic";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import file from "../test";
class Product extends Component {
  constructor(props) {
    super(props);
    console.log("Product constructor ", props);
    this.state = {
      buyClicked: false,
      chatClicked: false
    };
  }

  handleClick = () => {
    //Redirect to Cart page
    this.setState({
      buyClicked: true
    });
  };

  handleChatClick = () => {
    this.setState({
      chatClicked: true
    });
  };
  render() {
    const { id } = this.props.match.params;
    const { data } = this.props.location.state.data;
    console.log("^^^^^^^^^^^^^^^^^^^^^^^", this.props.location.state.data);
    if (this.state.buyClicked) {
      return (
        <Redirect
          to={{
            pathname: "/CartItem",
            state: {
              key: "value"
            }
          }}
        />
      );
    } else if (this.state.chatClicked) {
      return (
        <Redirect
          to={{
            pathname: "/chat"
          }}
        />
      );
    }

    //console.log(id);
    return (
      <div>
        <h1>{this.props.location.state.data.title}</h1>
        <Button onClick={this.handleClick}>Buy</Button>
        <Button onClick={this.handleChatClick}>Chat</Button>
        <Button onClick={this.handleMessageClick}>Message</Button>
        {/* {data.map((product, index) => {
          if (product.id == id) {
            return (
              <div key={index}>
                <h1>{product.name}</h1>
                <Button onClick={this.handleClick}>Buy</Button>
                <Button onClick={this.handleChatClick}>Chat</Button>
                <Button onClick={this.handleMessageClick}>Message</Button>
              </div>
            );
          }
        })} */}
      </div>
    );
  }
}

export default Product;
