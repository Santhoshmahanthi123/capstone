import React, { Component } from "react";
import Cards from "./Cards";
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      finalQuantity: 1
    };
    // console.log("constructor of cart",props)
  }
  // in cdm get id of the prod
  // create a cart array and push each item in it
  //address
  //use local storage
  componentWillMount() {
    this.setState({
      data: localStorage.getItem("product")
    });
    // console.log("LOCAL STORAGE", localStorage.getItem('product'))
    // console.log(this.state.data, "DATATATAATATATATATAT")
  }
  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      finalQuantity: e.target.value
    });
  };
  render() {
    let d = JSON.parse(this.state.data);
    // console.log(this.props.location.state.data, "RENDERING IN CART RENDER")
    console.log(d, "RENEDERRRRRR");
    let amount = d.price * this.state.finalQuantity;
    return (
      <div style={{ margin:'auto',backgroundColor:'#0f293a', borderRadius: 6, color:'white'}}>
        <table style={{margin: 'auto', fontFamily:'Verdana'}}>
          <th style={{fontSize:40, textAlign:'center'}}>Cart Summary</th>
          <tbody style={{ marginLeft: 'auto',fontSize:20 }}>
            <tr>
              <td  style={{textAlign:'left'}}>Name</td>
              <td  style={{textAlign:'right'}}>{d.title}</td>
            </tr>
            <tr>
              <td  style={{textAlign:'left'}}>Price(INR)</td>
              <td style={{textAlign:'right'}}>{d.price}</td>
            </tr>
            <tr>
              <td  style={{textAlign:'left'}}>Available Quantity</td>
              <td style={{textAlign:'right'}}>{d.quantity}</td>
            </tr>
            <tr  >
                <td style={{textAlign:'left'}}>Select Quantity</td>
            <td style={{textAlign:'right', color:'black'}}> <input
                type="number"
                min={1}
                max={d.quantity}
                defaultValue={1}
                onChange={this.handleChange}
              /></td> 
            </tr>
            <tr>
              <td  style={{textAlign:'left'}}>Total Price to be paid (INR):</td>
              <td style={{textAlign:'right'}}>{amount}</td>
            </tr>
            <tr style={{ marginLeft: 200 }}>
              <td style={{padding:20}}>
                <Button style={{fontSize:20, color:'black'}}>
                  <Link
                    to={{
                      pathname: "/product/" + d._id + "/payment"
                    }}
                  >
                    Pay
                  </Link>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CartItem;
