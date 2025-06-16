import React from "react";
import styles from "./card.module.scss";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";

const ButtonsComponent = ({ id, product, description }) => {
  const { addToCart, removeFromCart, cart } = useCart();
  const cartItem = cart.find((item) => item.id === id);
  const router = useRouter();

  const handleDonateClick = () => {
    router.push(`products/${id}`);
  };

  const handleAddToCart = () => {
    addToCart({ id, product, description });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className="card-buttons">
      <button className={styles.shareButton}>Share</button>
      <button className={styles.donateButton} onClick={handleDonateClick}>
        Donate
      </button>
      {cartItem ? (
        <>
          <button
            className={styles.donateButton}
            onClick={handleRemoveFromCart}
          >
            -
          </button>
          <span>{cartItem.quantity}</span>
          <button className={styles.donateButton} onClick={handleAddToCart}>
            +
          </button>
        </>
      ) : (
        <button className={styles.donateButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ButtonsComponent;
