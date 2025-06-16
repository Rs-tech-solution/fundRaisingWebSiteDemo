// Cart.js
"use client";
import React from "react";
import { useCart } from "@/context/cartContext";
import styles from "./index.module.scss";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <div className={styles.emptyCart}>Your cart is empty.</div>;
  }

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <div className={styles.itemDetails}>
              <img src={item.product} alt={item.description} />
              <div>
                <h4>{item.description}</h4>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className={styles.itemActions}>
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.clearButton} onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
