"use client";

import React, { useReducer, useState } from "react";
import styles from "./sevaProduct.module.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SevaProduct = ({
  product,
  productClassName,
  imageClassName,
  titleClassName,
  bookSevaBtn,
}) => {
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [expandedTitleId, setExpandedTitleId] = useState(null);
  const router = useRouter();

  const toggleDescription = (id) => {
    setExpandedProductId(expandedProductId === id ? null : id);
  };

  const toggleTitle = (id) => {
    setExpandedTitleId(expandedTitleId === id ? null : id);
  };

  return (
    <div className={`${styles.product} ${productClassName}`}>
      <img
        src={product.imageSrc}
        className={`${styles.productImg} ${imageClassName}`}
      />

      <div className={`${styles.titleWrapper} ${titleClassName}`}>
        <div
          className={`${styles.title} ${
            expandedTitleId === product.id ? styles.expandedTitle : ""
          }`}
        >
          {expandedTitleId === product.id
            ? product.title
            : product.title.length > 70
            ? `${product.title.substring(0, 70)}...`
            : product.title}
        </div>
        <button
          className={styles.toggleTitleBtn}
          onClick={() => toggleTitle(product.id)}
        >
          {expandedTitleId === product.id ? (
            <FaChevronUp size={20} className={styles.arrow} />
          ) : (
            <FaChevronDown size={20} className={styles.arrow} />
          )}
        </button>
      </div>

      <div className={styles.price}>
        <div className={styles.originalprice}>{product.requiredAmount}</div>
        <span>{product.requiredAmount}</span>
        <button className={styles.discount}>{`0% off`}</button>
      </div>

      <div
        className={`${styles.description} ${
          expandedProductId === product.id ? styles.expandedDescription : ""
        }`}
      >
        {expandedProductId === product.id ? (
          <>
            {product?.description}{" "}
            <button
              className={styles.readmorebtn}
              onClick={() => toggleDescription(product.id)}
            >
              Show Less
            </button>
          </>
        ) : (
          <>
            {product.description.length > 295
              ? `${product.description.substring(0, 295)}... `
              : product.description}
            {product.description.length > 295 && (
              <button
                className={styles.readmorebtn}
                onClick={() => toggleDescription(product.id)}
              >
                Read More
              </button>
            )}
          </>
        )}
      </div>

      <button
        className={`${styles.bookingbtn} ${bookSevaBtn}`}
        onClick={() => {
          router.push(`/sevas/${product.id}`);
        }}
      >
        Book this seva
      </button>
    </div>
  );
};

export default SevaProduct;
