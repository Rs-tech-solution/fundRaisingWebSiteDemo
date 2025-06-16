"use client";
import React, { useEffect, useState } from "react";
import ImageComponent from "./ImageComponent";
import ButtonsComponent from "./ButtonsComponent";
import ApiService from "@/services/apiService";
import styles from "./card.module.scss";

const CampaignCard = ({ campaign, onClick }) => (
  <div
    key={campaign.id}
    className={styles.card}
    onClick={() => onClick(campaign.code)}
  >
    <h3>{campaign.title}</h3>
    <p>End Date: {new Date(campaign.endDate).toLocaleDateString()}</p>
    <p>Required Amount: {campaign.requiredAmount}</p>
    <p>Procured Amount: {campaign.procuredAmount}</p>
    <p>Donors Count: {campaign.donorsCount}</p>
    {campaign.imageSrc && <img src={campaign.imageSrc} alt={campaign.title} />}
  </div>
);

const CampaignDetails = ({ details }) => (
  <div className={styles.card}>
    <h3>{details.title}</h3>
    <h3>{details.shortDesc}</h3>
    <p>{details.description}</p>
    <p>End Date: {new Date(details.endDate).toLocaleDateString()}</p>
    <p>Required Amount: {details.requiredAmount}</p>
    <p>Procured Amount: {details.procuredAmount}</p>
    <p>Donors Count: {details.donorsCount}</p>
    {details.imageSrc && <img src={details.imageSrc} alt={details.title} />}
  </div>
);

const Card = ({ product, description, id }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <ImageComponent src={product} alt="Card" />
        <div className={styles.description}>{description}</div>
        <ButtonsComponent id={id} product={product} description={description} />
      </div>
      {/* <div className={styles.wrapper}>
        <div className={styles.campaignListWrapper}>
          {campaignList.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              onClick={fetchCampaignDetails}
            />
          ))}
        </div>
        {selectedCampaignDetails && (
          <div className={styles.campaignDetailsWrapper}>
            <CampaignDetails details={selectedCampaignDetails} />
          </div>
        )}
      </div> */}
    </>
  );
};

export default Card;

{
  /*
 "use client";
import Image from "next/image";
import styles from "./card.module.scss";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";

const Card = ({ product, description, id }) => {
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
    <div className={styles.cardContainer}>
      <Image
        src={product}
        alt="Card"
        className={styles.cardImage}
        height="250"
        width="300"
      />

      <div className={styles.description}>{description}</div>
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
    </div>
  );
};

export default Card;  */
}
