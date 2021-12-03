import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '.';

function Cart() {
  const cart = useSelector((state) => state.cart);
  let totalCost = 0;
  cart.map((item) => (totalCost = totalCost + item.quantity * item.price));
  console.log(cart);
  return (
    <div>
      {cart.length === 0 ? (
        <div className="afterAdded ">
          <span>Your cart is Empty</span>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          <div className="total">
            <h2>Total Cost:{totalCost}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
