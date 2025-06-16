"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ApiService from "@/services/ApiService";
import styles from "./page.module.scss";
// import CampaignImages from "@/app/dummy/page";
import { useResponsive } from "@/context/useResponsive";

const CampaignDetails = () => {
  const [campaignDetails, setCampaignDetails] = useState(null);
  const apiService = new ApiService();
  const { isSmScreen } = useResponsive();
  const params = useParams();
  const { campaignCode } = params;

  const fetchCampaignDetails = async () => {
    try {
      const response = await apiService.get(`/campaign/${campaignCode}/detail`);
      setCampaignDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch campaign details", error);
    }
  };

  useEffect(() => {
    if (!campaignCode) return;

    fetchCampaignDetails();
  }, []);

  return !isSmScreen ? (
    <div className={styles.container}>
      <div className={styles.child}>
        <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <img
              src={campaignDetails.image}
              alt="Campaign"
              className={styles.campaignImage}
            />
          </div>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.active}`}>
              Project
            </button>
            <button className={styles.tab}>Documents</button>
            <button className={styles.tab}>Updates</button>
          </div>
        </div>

        <div className={styles.rightSection}>
          <h2 className={styles.h2}>{campaignDetails.title}</h2>
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.taxBenefit}`}>
              Tax Benefit
            </span>
            <span className={`${styles.tag} ${styles.verified}`}>Verified</span>
            <span className={`${styles.tag} ${styles.medical}`}>Medical</span>
          </div>
          <div className={styles.funding}>
            <h3 className={styles.h3}>{productDetail.funding}</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "13%" }}></div>
            </div>
            <div className={styles.para}>
              <p>{productDetail.leftDays}</p>
              <p>{productDetail.Backers}</p>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.campaigner}>
              <p>
                <strong>Campaign Started By:</strong> {productDetail.campaigner}
              </p>
            </div>
            <div>
              <p>
                <strong>Beneficiary:</strong> {productDetail.campaigner_address}
              </p>
            </div>
          </div>
          <div className={styles.shareSection}>
            <button className={styles.shareButton}>
              <FaFacebook
                size={24}
                color="#fff"
                style={{ background: "#007bff", marginRight: "4px" }}
              />
              Spread The Word
            </button>
            <div className={styles.socialIcons}>
              <button
                className={styles.socialButton}
                style={{ backgroundColor: "#007bff" }}
              >
                <FaTwitter color="white" />
              </button>
              <button
                className={styles.socialButton}
                style={{ backgroundColor: "green" }}
              >
                <FaWhatsapp color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.detailWrapper}>
        <div className={styles.productImageContainers}>
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
            {[10, 25, 50].map((amount) => (
              <div
                className={styles.priceTag}
                key={amount}
                onClick={() => handlePriceTagClick(amount)}
              >
                <span>
                  {currencySymbols[currency]}
                  {amount}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.donationBag}>
            <h4>DONATE VIA:</h4>
            <div className={styles.payOptions}>
              <ul>
                <li>
                  <a href="#">
                    <FaApplePay size={30} />
                    <span>Apple Pay</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGooglePay size={30} />
                    <span>Google Pay</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaAmazonPay size={30} />
                    <span>Amazon Pay</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPaypal size={30} />
                    <span>PayPal</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaEllipsisH size={30} />
                    <span>Other</span>
                  </a>
                </li>
              </ul>
            </div>
            <h4>Other Options</h4>
            <div className={styles.payOptions}>
              <ul>
                <li>
                  <a href="#">
                    <FaHome size={30} />
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaRegCreditCard size={30} />
                    <span>Credit/Debit Card</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaAlipay size={30} />
                    <span>Alipay</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPaypal size={30} />
                    <span>Paytm</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGift size={30} />
                    <span>Gift card</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.paymentButton}>
            <div
              onClick={() =>
                handleCart({
                  id: productDetail.id,
                  image: productDetail.image,
                  title: productDetail.title,
                  donationAmount: donationAmount,
                })
              }
            >
              Continue to pay{" "}
              <span>
                {currencySymbols[currency]} {donationAmount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
  // ) : (<MobileCampaign />)
};

export default CampaignDetails;

// import React from "react";
// import Campaign from "@/app/campaign/page";
// const ProductDetailsPage = (params) => {
//   // const router = useRouter();
//   // console.log(productsId);
//   // { params: { productsId: '1' }, searchParams: {} }
//   return (
//     <div>
//       <p>Product ID: {params.params.productsId}</p>
//       <Campaign />
//     </div>
//   );
// };

// export default ProductDetailsPage;
