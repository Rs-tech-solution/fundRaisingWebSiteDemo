"use client";
// MobileHome.js
//
// import React from "react";
// import Image from "next/image";
// import styles from "../mobileHome/mobileHome.module.scss";
// import { useState } from "react";
// import CardsBlock from "../cardComponent/cardsBlock";
// import ngo from "../../../public/ngo.webp";
// import Cart from "./tempcart";
// import {
//   FaAccessibleIcon,
//   FaPaw,
//   FaJenkins,
//   FaBaby,
//   FaWheelchair,
// } from "react-icons/fa";
// import FixedCarousel from "../shared/carousel/fixedCarousel";

// const cardsData = [
//   {
//     id: 1,
//     product: "/help.webp",
//     description:
//       "This 5-Year-Old Is Getting Weaker By The Minute Because Of A Dangerous Disease, Help Her Live",
//   },
//   {
//     id: 2,
//     product: "/ngo.webp",
//     description: "Card 2 description...",
//   },
//   {
//     id: 3,
//     product: "/help.webp",
//     description: "Card 3 description...",
//   },
//   {
//     id: 4,
//     product: "/help.webp",
//     description: "Card 1 description...",
//   },
//   {
//     id: 5,
//     product: "/ngo.webp",
//     description: "Card 2 description...",
//   },
//   {
//     id: 6,
//     product: "/help.webp",
//     description: "Card 3 description...",
//   },
//   {
//     id: 7,
//     product: "/help.webp",
//     description: "Card 3 description...",
//   },
// ];

// const MobileHome = () => {
//   const [clickedIcons, setClickedIcons] = useState([]);

//   const toggleIconClick = (id) => {
//     const isSelected = clickedIcons.includes(id);
//     if (isSelected) {
//       return;
//     }
//     setClickedIcons([id]);
//   };

//   const categoryIcons = [
//     { icon: <FaWheelchair />, name: "Wheelchair", id: 1 },
//     { icon: <FaBaby />, name: "Baby", id: 2 },
//     { icon: <FaAccessibleIcon />, name: "Accessible", id: 3 },
//     { icon: <FaPaw />, name: "Animal", id: 4 },
//     { icon: <FaJenkins />, name: "Jenkins", id: 5 },
//     { icon: <FaWheelchair />, name: "Wheelchair", id: 6 },
//     { icon: <FaBaby />, name: "Baby", id: 7 },
//     { icon: <FaAccessibleIcon />, name: "Accessible", id: 8 },
//     { icon: <FaPaw />, name: "Animal", id: 9 },
//     { icon: <FaJenkins />, name: "Jenkins", id: 10 },
//     { icon: <FaWheelchair />, name: "Wheelchair", id: 11 },
//     { icon: <FaBaby />, name: "Baby", id: 12 },
//     { icon: <FaAccessibleIcon />, name: "Accessible", id: 13 },
//     { icon: <FaPaw />, name: "Animal", id: 14 },
//   ];

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.backgroundImage}>
//         <Image src={ngo} alt="background" layout="fill" objectFit="cover" />
//       </div>

//       <div className={styles.Fixedcarousel}>
//         {categoryIcons.map((icon, index) => (
//           <div key={index} className={styles.iconWrapper}>
//             <div
//               className={`${styles.icon} ${
//                 clickedIcons.includes(icon.id) ? styles.clicked : ""
//               }`}
//               onClick={() => toggleIconClick(icon.id)}
//             >
//               {icon.icon}
//               <div className={styles.iconName}>{icon.name}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.cardContainerWrapper}>
//         <CardsBlock cardsData={cardsData} />
//       </div>
//       <cart />
//     </div>
//   );
// };

// export default MobileHome;

import React from "react";
import { useCart } from "@/context/cartContext";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cart);
  console.log(cartData);
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  if (cartData.length === 0) {
    return <div className={styles.emptyCart}>Your cart is empty.</div>;
  }

  return (
    <div className={styles.cartContainer}>
      {/* <h2>Your Cart</h2>
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
      </button> */}
      <h3>Your Cart</h3>
      <div className={styles.cartItemContainer}>
        {cartData.map((item) => (
          <div className={styles.cartItems}>
            <div>
              <img src={item?.image} alt="" />
            </div>
            <div className={styles.cartItemDetails}>
              <p>{item?.title}</p>
              <p>Agra</p>
              <p>${item?.donationAmount}</p>
            </div>
            <div className={styles.remove}>
              <button
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                }}
              >
                remove Item
              </button>
            </div>
          </div>
        ))}
        <div className={styles.checkout}>
          <h3>Checkout Page</h3>
          <div>
            <p>Total Items: {cartData.length}</p>
            <p>Total quantity: {cartData[0].quantity}</p>
            <p>Total Donation: ${cartData[0].totalPrice}</p>
            <button onClick={() => dispatch(removeFromCart(cartData.id))}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
