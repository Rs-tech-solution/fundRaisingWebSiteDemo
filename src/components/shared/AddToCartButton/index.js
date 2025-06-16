"use client";

import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AddToCartButton = ({
  isSelected,
  onAdd,
  onRemove,
  quantity,
  product,
  addButtonClassName,

  ...props
}) => {
  return (
    <>
      {isSelected ? (
        <div className={props.quantityControlClassName}>
          <button
            className={`${props.minusButtonClassName}`}
            onClick={() => onRemove(product)}
          >
            <AiOutlineMinus />
          </button>
          <button className={props.productQuantityClassName}>{quantity}</button>
          <button
            className={props.plusButtonClassName}
            onClick={() => onAdd(product)}
          >
            <AiOutlinePlus />
          </button>
        </div>
      ) : (
        <button
          className={`${addButtonClassName}`}
          onClick={() => onAdd(product)}
        >
          + ADD
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
