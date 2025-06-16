import React from "react";
import styles from "./style.module.scss";
import AddToCartButton from "../shared/AddToCartButton";

const truncateText = (text, length) => {
  return text && text.length > length ? `${text.slice(0, length)}...` : text;
};

const ProductPuja = ({
  product,
  onAdd,
  isSelected = false,
  quantity,
  onRemove,
  isSmallProduct = false,
  cardClassName = " ",

  ...props
}) => {
  return (
    <div className={styles.productPuja}>
      <img src={product.image || "/slidesImages/productPuja.png"} alt="" />
      <div className={styles.productPujaDetails}>
        <h3>
          {product.name}

          {/* Sampoorna Bhagavad Gita Homa + Madhu Abhishekam + Sahasra Tulasi
          Archana + Energised Sri Krishna Lotus Feet */}
        </h3>
        <div className={styles.footer}>
          <p className={styles.description}>
            {/* Imbibe the divine virtues of the Gita and transform your life of
            Moshada Ekadashi. Appease Lord Mahavishnu by offering Abhishekam
            with honey and Archana with 1000 Tulasi Dalas. Purify your energy…. */}
            {truncateText(product.description, 150)}
            {/* <span>Read More</span> */}
          </p>
          <div className={styles.price}>
            {/* <h4>₹3,717</h4> */}
            <h4>₹{product.price}</h4>
            {/* <button>+ Add</button> */}
            <div className={styles.addButton}>
              <AddToCartButton
                isSelected={isSelected}
                onAdd={() => onAdd(product)}
                onRemove={() => onRemove(product)}
                quantity={quantity}
                product={product}
                addButtonClassName={props.addButtonClassName}
                quantityControlClassName={props.quantityControlClassName}
                productQuantityClassName={props.productQuantityClassName}
                minusButtonClassName={props.minusButtonClassName}
                plusButtonClassName={props.plusButtonClassName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPuja;
