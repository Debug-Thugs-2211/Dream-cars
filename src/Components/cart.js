import React from "react";

export const Cart = () => {

  //map through users carted items and display in return div:id=cartItems
  //add all carted item prices to display total

  return (<>
    <h1>My Cart</h1>
    <div id="cartItems">
      <h3>Car Name</h3>
      <h3>Car Price</h3>
    </div>
    <h2>Total:</h2>
    <button>Checkout</button>
  </>

  )
}
