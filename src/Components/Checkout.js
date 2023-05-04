import React, { useState } from "react";

//nav to this page when button is clicked in cart.js

const Checkout = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [ZIP, setZIP] = useState('');
  const [card, setCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [CVV, setCVV] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'phone') {
      setPhone(event.target.value);
    } else if (event.target.name === 'address') {
      setAddress(event.target.value);
    } else if (event.target.name === 'city') {
      setCity(event.target.value);
    } else if (event.target.name === 'state'){
      setState(event.target.value);
    } else if (event.target.name === 'ZIP') {
      setZIP(event.target.value);
    } else if (event.target.name === 'card') {
      setCard(event.target.value);
    } else if (event.target.name === 'expiration') {
      setExpiration(event.target.value);
    } else {
      setCVV(event.target.value);
    }
  }
  return (
    <>
      <h1>Checkout</h1>
      <form>
        <h3>Contact Information</h3>
          <input type="text" name='email' placeholder="Email Address" value={email} onChange={handleChange}></input>
          <input type="text" name='phone' placeholder="Phone Number" value={phone} onChange={handleChange}></input>
        <h3>Shipping Information</h3>
          <input type="text" name='address' placeholder="Address" value={address} onChange={handleChange}></input>
          <input type="text" name='city' placeholder="City" value={city} onChange={handleChange}></input>
          <input type="text" name='state' placeholder="State" value={state} onChange={handleChange}></input>
          <input type="text" name='ZIP' placeholder="ZIP Code" value={ZIP} onChange={handleChange}></input>
        <h3>Payment Information</h3>
          <input type="text" name='card' placeholder="Credit Card #" value={card} onChange={handleChange}></input>
          <input type="text" name='expiration' placeholder="EXP" value={expiration} onChange={handleChange}></input>
          <input type="text" name='CVV' placeholder="CVV" value={CVV} onChange={handleChange}></input>
      </form>
      <button>Submit Order</button>
    </>
  );
};

export default Checkout;
