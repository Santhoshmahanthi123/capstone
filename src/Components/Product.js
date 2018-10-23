import React, { Component } from "react";
import { fakeData } from "./HomeBasic";
import {Button} from 'react-bootstrap'

class Product extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(id);
    return (
      <div>
        {fakeData.map((product, index) => {
          if (product.id == id) {
            return (
              <div key={index}>
                <h1>{product.name}</h1>
                <Button>Buy</Button>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Product;
