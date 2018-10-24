import React, { Component } from 'react'

class CartItem extends Component{
    constructor(props){
        super(props);
        console.log("constructor of cart",props)
    }
    render(){
        console.log(this.props.location.state.data, "RENDERING IN CART RENDER")
        return (
            <div>Cart Is here</div>
        )
    }
}

export default CartItem;
