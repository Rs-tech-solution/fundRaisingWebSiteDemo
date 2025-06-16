"use client";
import React, { useState, useEffect } from "react";
import {
  FaApplePay,
  FaGooglePay,
  FaAmazonPay,
  FaPaypal,
  FaEllipsisH,
  FaHome,
  FaRegCreditCard,
  FaAlipay,
  FaGift,
} from "react-icons/fa";
import ApiService from "@/services/ApiService";
// import CampaignImages from "@/app/dummy/page";
import styles from "./page.module.scss";

const CampaignDetails = () => {
  const [campaignDetails, setCampaignDetails] = useState(null);
  const [campaignCode, setCampaignCode] = useState(null);
  const [currency, setCurrency] = useState("INR");
  const [donationAmount, setDonationAmount] = useState("");

  const fetchCampaignDetails = async (code) => {
    try {
      const apiService = new ApiService();
      const response = await apiService.get(`/campaign/${code}/detail`);
      setCampaignDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch campaign details", error);
    }
  };

  useEffect(() => {
    // Extract campaign code from pathname
    const pathname = window.location.pathname;
    const segments = pathname.split("/");
    const code = segments[segments.length - 1];

    if (code) {
      setCampaignCode(code);
      fetchCampaignDetails(code);
    }
  }, []);

  if (!campaignDetails) {
    return <div>Loading...</div>;
  }

  const currencySymbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
  };

  const handlePriceTagClick = (amount) => {
    setDonationAmount(amount);
  };

  return (
    <>
      <div className={styles.detailsWrapper}>
        <h1>{campaignDetails.title}</h1>
        <img
          src={campaignDetails?.imageSrc}
          alt={campaignDetails?.title}
          className={styles.image}
        />
        <p>{campaignDetails?.description}</p>
        <p>
          End Date: {new Date(campaignDetails?.endDate).toLocaleDateString()}
        </p>
        <p>Required Amount: {campaignDetails?.requiredAmount}</p>
        <p>Donors Count: {campaignDetails?.donorsCount}</p>
      </div>
      <div className={styles.detailAndDonationWrapper}>
        <div className={styles.CampaignImageContainers}>
          <CampaignImages />
        </div>
        <div className={styles.DonationBagWrapper}>
          <div className={styles.customDonation}>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="INR">₹ INR</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
              <option value="GBP">£ GBP</option>
            </select>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <div className={styles.priceTags}>
            <div
              className={styles.priceTag}
              onClick={() => handlePriceTagClick(10)}
            >
              <span>{currencySymbols[currency]}10</span>
            </div>
            <div
              className={styles.priceTag}
              onClick={() => handlePriceTagClick(25)}
            >
              <span>{currencySymbols[currency]}25</span>
            </div>
            <div
              className={styles.priceTag}
              onClick={() => handlePriceTagClick(50)}
            >
              <span>{currencySymbols[currency]}50</span>
            </div>
          </div>
          <div className={styles.donationBag}>
            <h4>DONATE VIA: </h4>
            <div className={styles.payOptions}>
              <ul>
                <li>
                  <a href="#">
                    <FaApplePay size={30} />
                  </a>
                  <span>Apple Pay</span>
                </li>
                <li>
                  <a href="#">
                    <FaGooglePay size={30} />
                  </a>
                  <span>Google Pay</span>
                </li>
                <li>
                  <a href="#">
                    <FaAmazonPay size={30} />
                  </a>
                  <span>Amazon Pay</span>
                </li>
                <li>
                  <a href="#">
                    <FaPaypal size={30} />
                  </a>
                  <span>PayPal</span>
                </li>
                <li>
                  <a href="#">
                    <FaEllipsisH size={30} />
                  </a>
                  <span>Other</span>
                </li>
              </ul>
            </div>
            <h4>Other Options</h4>
            <div className={styles.payOptions}>
              <ul>
                <li>
                  <a href="#">
                    <FaHome size={30} />
                  </a>
                  <span>Apple Pay</span>
                </li>
                <li>
                  <a href="#">
                    <FaRegCreditCard size={30} />
                  </a>
                  <span>Credit/Debit Card</span>
                </li>
                <li>
                  <a href="#">
                    <FaAlipay size={30} />
                  </a>
                  <span>Amazon Pay</span>
                </li>
                <li>
                  <a href="#">
                    <FaPaypal size={30} />
                  </a>
                  <span>Paytm</span>
                </li>
                <li>
                  <a href="#">
                    <FaGift size={30} />
                  </a>
                  <span>Gift card</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.paymentButton}>
            <div>
              Continue to pay{" "}
              <span>
                {currencySymbols[currency]} {donationAmount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignDetails;
