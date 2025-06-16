import React from "react";
import styles from "./index.module.scss";
import ProductCard from "../shared/productCard";
import { useDispatch, useSelector } from "react-redux";
import ProductPuja from "../productPuja";

const ProductList = ({ products = [], onAdd, onRemove }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const getProductQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const MegaProduct = [...products]
    .filter((product) => product.type === "Type1")
    .sort((a, b) => b.priority - a.priority);

  const MediumProduct = [...products]
    .filter((product) => product.type === "Type2")
    .sort((a, b) => b.priority - a.priority);

  const SmallProduct = [...products]
    .filter((product) => product.type === "Type3")
    .sort((a, b) => b.priority - a.priority);

  return (
    <>
      {MegaProduct.map((product) => (
        <ProductPuja
          key={product.id}
          product={product}
          isSelected={getProductQuantity(product.id) > 0}
          quantity={getProductQuantity(product.id)}
          onAdd={onAdd}
          onRemove={onRemove}
          addButtonClassName={styles.addButton}
          quantityControlClassName={styles.quantityControl}
          productQuantityClassName={styles.productQuantity}
          minusButtonClassName={styles.minusButton}
          plusButtonClassName={styles.plusButton}
        />
      ))}

      <div className={styles.container}>
        {MediumProduct.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={getProductQuantity(product.id) > 0}
            quantity={getProductQuantity(product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
            cardClassName={styles.productCard}
            productTitleClassName={styles.productTitle}
            productImageClassName={styles.productImage}
            quantityContainerClassName={styles.quantityContainer}
            featureClassName={styles.feature}
            priceClassName={styles.price}
            addButtonClassName={styles.addButton}
            quantityControlClassName={styles.quantityControl}
            productQuantityClassName={styles.productQuantity}
            minusButtonClassName={styles.minusButton}
            plusButtonClassName={styles.plusButton}
          />
        ))}
      </div>

      <div className={styles.smallProductContainer}>
        {SmallProduct.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={getProductQuantity(product.id) > 0}
            quantity={getProductQuantity(product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
            isSmallProduct={true}
            cardClassName={styles.smallProduct}
            productDetailClassName={styles.productDetail}
            productTitleClassName={styles.productTitle}
            productImageClassName={styles.productImage}
            quantityContainerClassName={styles.quantityContainer}
            featureClassName={styles.feature}
            priceClassName={styles.price}
            addButtonClassName={styles.addButton}
            quantityControlClassName={styles.quantityControl}
            productQuantityClassName={styles.productQuantity}
            minusButtonClassName={styles.minusButton}
            plusButtonClassName={styles.plusButton}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
