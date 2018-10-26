import React, { Component } from "react";
// import { fakeData } from "./HomeBasic";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
// import file from "../test";
import Axios from "axios";
import { Card } from "antd";

const { Meta } = Card;
class Product extends Component {
  constructor(props) {
    super(props);
    console.log("Product constructor ", props);
    this.state = {
      buyClicked: false,
      chatClicked: false
    };
  }

  handleBuyClick = () => {
    //Redirect to Cart page
    this.setState({
      buyClicked: true
    });
    localStorage.setItem(
      "product",
      JSON.stringify(this.props.location.state.data)
    );
    console.log("stored in local storage");
    //console.log(localStorage.getItem('product'))
    //can dispatcch items to store cart items in redux
    // set local storage and store the product details here
    // Add to cart - setting local storage
    //Buy- redirect to local storage
  };

  handleChatClick = () => {
    this.setState({
      chatClicked: true
    });
  };
  handleMessageClick = () => {
    // call backend route for messaging
    Axios.get("https://capstone-inneed.herokuapp.com/twilio")
      .then(response => {
        console.log(response, "%%%%%^^^^^^$$$$$$$$");
        alert("Message sent! You can soon expect a call back!!");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    // const { id } = this.props.match.params;
    const data = this.props.location.state.data;
    console.log("^^^^^^^^^^^^^^^^^^^^^^^", data);
    let { id } = this.props.match.params;
    console.log("()()()()()()()-----------", id);
    if (this.state.buyClicked ) {
      console.log("BUYYYY CLICKEDDDD");
      return (
        <Redirect
          to={{
            pathname: "/Product/" + id + "/CartItem"
          }}
        />
      );
    } else if (this.state.chatClicked) {
      return (
        <Redirect
          to={{
            pathname: "/Product/chat/",
            state: { data: this.props.location.state.data }
          }}
        />
      );
    }

    //console.log(id);
    return (
      <div style={{margin: 'auto', background:'#0f293a', border: '3px solid black',borderRadius:5 }}>
        <h1 style={{color:'white', fontStyle:'italic'}}>{this.props.location.state.data.title}</h1>
        <Card bordered={true}
        headStyle={{color:'white'}}
          hoverable
          style={{ width: 200, }}
          cover={
            <img
              alt="example"
              src={this.props.location.state.data.image}
            
            />
          }
          style={{textAlign: 'center', } }
        >
          <Meta title={this.props.location.state.data.title} description={this.props.location.state.data.description} />
        </Card>
        <div style={{padding: 20}}>
        <Button onClick={this.handleBuyClick} style={{marginRight:20}}>Buy</Button>
        {/* make button as link */}
        <Button onClick={this.handleChatClick} style={{marginRight:20}}>Chat</Button>
        <Button onClick={this.handleMessageClick}>Message</Button>
        </div>
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
