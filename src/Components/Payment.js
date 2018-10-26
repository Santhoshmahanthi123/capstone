import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};
const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <div>
    {/* <Button style={{backgroundImage: 'linearGradient(rgb(125, 197, 238), rgb(0, 140, 221) 85%, rgb(48, 162, 228))', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 14, position: 'relative', padding: '0 12', display: 'block', height: 30, lineHeight: 30, color: 'rgb(255, 255, 255)', fontWeight: 'bold', boxShadow: 'rgba(255, 255, 255, 0.25) 0 1 0 inset', textShadow: 'rgba(0, 0, 0, 0.25) 0 -1 0', borderRadius: 4}}>COD</Button> */}
  <Button onClick={()=>{alert("Please pay money to the seller on meeting")}} style={{fontWeight: 700,fontFamily: 'Helvetica',padding:7,background: 'linear-gradient(rgb(40, 160, 229), rgb(50, 120, 158))', border: 'none', textDecoration: 'none', borderRadius: 5, boxShadow: 'rgba(0, 0, 0, 0.2) 0 1 0', cursor: 'pointer', visibility: 'visible', userSelect: 'none', color:'white',marginRight: 20}}>Cash on Delivery</Button>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  /></div>

export default Checkout;

//styling for COD button
  // padding: 6px 9px 6px 9px;
  // background: linear-gradient(rgb(40, 160, 229), rgb(50, 120, 148));
  // border: 0px;
  // text-decoration: none;
  // border-radius: 5px;
  // cursor: pointer;
  // visibility: visible;
  // user-select: none;
  // margin-right: 20px;
  // color: white;
  // fontFamily: 'Helvetica';
  // font-weight: 700