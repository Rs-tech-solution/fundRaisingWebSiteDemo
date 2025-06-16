"use client";

import React from "react";
import styles from "./productStyle.module.scss";
import ProgressBar from "../progressbar";
import AddToCartButton from "../AddToCartButton";
import { FaInfoCircle } from "react-icons/fa";

const truncateText = (text, length) => {
  return text && text.length > length ? `${text.slice(0, length)}...` : text;
};

const ProductCard = ({
  product,
  onAdd,
  isSelected = false,
  quantity,
  onRemove,
  isSmallProduct = false,
  cardClassName = " ",

  ...props
}) => {
  const progressBarWidth = `${(product.obtained / product.total) * 100}`;
  const [visible, setVisible] = React.useState(false);

  return (
    <div className={`${styles.productCard} ${cardClassName}`}>
      {!isSmallProduct && (
        <h2 className={props.productTitleClassName}>
          {truncateText(product.name, 25)}
        </h2>
      )}
      <img
        src={product.image}
        alt={product.name}
        className={props.productImageClassName}
      />
      {!isSmallProduct && (
        <>
          <FaInfoCircle
            size={18}
            style={{ cursor: "pointer", marginLeft: "5px" }}
            onClick={() => setVisible(true)}
          />
          {visible && (
            <div className={styles.infoPopup}>
              <div className={styles.infoHeader}>
                <button
                  className={styles.closeButton}
                  onClick={() => setVisible(false)}
                >
                  ×
                </button>
              </div>
              <div className={styles.text}>
                {product.description
                  ? truncateText(product.description, 100)
                  : "No description available."}
              </div>
            </div>
          )}
        </>
      )}
      <div className={props.productDetailClassName}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {isSmallProduct && (
            <h2 className={props.productTitleClassName}>{product.name}</h2>
          )}
          {isSmallProduct && (
            <>
              <FaInfoCircle
                size={18}
                style={{ cursor: "pointer", marginLeft: "5px" }}
                onClick={() => {
                  setVisible(true);
                }}
              />
              {visible && (
                <div
                  className={`${
                    isSmallProduct ? styles.smPopUp : styles.infoPopup
                  }`}
                >
                  <div className={styles.infoHeader}>
                    <button
                      className={styles.closeButton}
                      onClick={() => setVisible(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className={styles.text}>
                    {product.description
                      ? truncateText(product.description, 100)
                      : "No description available."}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <ProgressBar progress={progressBarWidth} />
        <div className={props.quantityContainerClassName}>
          <p>{product.obtained} Quantity Obtained</p>
          <p>out of {product.total}</p>
        </div>
        <div className={props.featureClassName}>
          <p className={props.priceClassName}>
            ₹{product.price}/{"per unit"}
          </p>
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
  );
};

export default ProductCard;
