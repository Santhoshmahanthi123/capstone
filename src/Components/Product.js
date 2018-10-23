import React, { Component } from "react";
import { fakeData } from "./HomeBasic";
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Product extends Component {
  state={
    buyClicked: false
  }
  handleClick= () =>{
    //Redirect to Cart page
    this.setState({
      buyClicked: true
    })

  }
  render() {
    const { id } = this.props.match.params;
    if(this.state.buyClicked){
      return <Redirect to ={{pathname:"/CartItem",
      state:{
        key:"value"
      }}}/>
    }
   
    //console.log(id);
    return (
      <div>
        {fakeData.map((product, index) => {
          if (product.id == id) {
            return (
              <div key={index}>
                <h1>{product.name}</h1>
                <Button onClick={this.handleClick}>Buy</Button>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Product;
