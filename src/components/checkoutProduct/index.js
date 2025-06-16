import React from "react";
import TruncateText from "../shared/truncateString";
import AddToCartButton from "../shared/AddToCartButton";

const CheckoutProduct = ({
  product,
  onAdd,
  onRemove,
  isSelected = false,
  quantity = 0,
  productClassName,
  imgClassname,
  titelClassname,
  descClassname,
  addContainerClassnName,
  addBtnClassname,
  readMoreBtnClassName,

  ...props
}) => {
  return (
    <div className={`${productClassName}`}>
      <img src={product.image} alt="" className={`${imgClassname}`} />
      <h2 className={`${titelClassname}`}>{product.name}</h2>
      <TruncateText
        text={product.desc}
        wordLimit={5}
        readMoreBtnClassName={`${readMoreBtnClassName}`}
        descClassName={`${descClassname}`}
      />
      <div className={`${addContainerClassnName}`}>
        <span>₹{product.price}</span>
        {/* <button className={`${addBtnClassname}`} onClick={() => onAdd(product)}>
          + Add
        </button> */}
        <AddToCartButton
          addButtonClassName={`${addBtnClassname}`}
          onAdd={() => onAdd(product)}
          onRemove={() => onRemove(product)}
          isSelected={isSelected}
          quantity={quantity}
          product={product}
          quantityControlClassName={props.quantityControlClassName}
          productQuantityClassName={props.productQuantityClassName}
          minusButtonClassName={props.minusButtonClassName}
          plusButtonClassName={props.plusButtonClassName}
        />
      </div>
    </div>
  );
};

export default CheckoutProduct;
