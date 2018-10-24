import React, { Component } from 'react'
import Cards from './Cards'
class CartItem extends Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            finalQuantity:1
        }
       // console.log("constructor of cart",props)
    }
    // in cdm get id of the prod
    // create a cart array and push each item in it
    //address
    //use local storage
    componentWillMount() {
      this.setState({
          data: localStorage.getItem('product')
      })
     // console.log("LOCAL STORAGE", localStorage.getItem('product'))
     // console.log(this.state.data, "DATATATAATATATATATAT")
    }
    handleChange =(e) =>{
        console.log(e.target.value)
        this.setState({
            finalQuantity: e.target.value
        })
    }
    render(){
        let d = JSON.parse(this.state.data)
        // console.log(this.props.location.state.data, "RENDERING IN CART RENDER")
      console.log(d, "RENEDERRRRRR")
        let amount= d.price * this.state.finalQuantity
        return (
            <div>
               <table>
                   <th>Cart Summary</th>
                   <tbody>
                       <tr>
                           <td>Name</td>
                           <td>{d.title}</td>
                       </tr>
                       <tr>
                           <td>Price(INR)</td>
                           <td>{d.price}</td>
                       </tr>
                       <tr><td>Available Quantity</td>
                       <td>{d.quantity}</td>
                       </tr>
                        <tr>
                        <input type="number"
                        min={1}
                        max={d.quantity} onChange={this.handleChange}/>
                        </tr>
                        <tr>
                            <td>Total Price to be paid:</td>
                            <td>{amount}</td>
                        </tr>
                   </tbody>
               </table>
            </div>
            
        )
    }
}

export default CartItem;
