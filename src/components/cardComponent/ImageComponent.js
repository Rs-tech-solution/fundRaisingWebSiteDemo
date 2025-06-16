"use client";
import React, { useEffect, useState } from "react";
import ApiService from "@/services/apiService";
import { useRouter } from "next/navigation";
import styles from "./card.module.scss";

const CampaignCard = ({ campaign, onClick }) => (
  <div
    key={campaign.id}
    className={styles.card}
    onClick={() => onClick(campaign.code)}
  >
    <h3>{campaign.title}</h3>
    {campaign.imageSrc && <img src={campaign.imageSrc} alt={campaign.title} />}
  </div>
);

const ImageCard = () => {
  const [campaignList, setCampaignList] = useState([]);
  const apiService = new ApiService();
  const router = useRouter();

  const handleDonateClick = (campaignCode) => {
    router.push(`/campaign/${campaignCode}`);
  };

  const fetchCampaignList = async () => {
    try {
      const response = await apiService.get("/campaign/active");
      setCampaignList(response.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchCampaignList();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.campaignListWrapper}>
        {campaignList.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            onClick={handleDonateClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

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
