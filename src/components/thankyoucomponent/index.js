import React, { useEffect, useState } from "react";
import styles from "./thankyou.module.scss";
import CircleProgress from "../shared/circleProgress";
import { useResponsive } from "@/context/useResponsive";
import MonthlyCampaign from "../monthlyCampaign";
import { FaCross } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import ApiService from "@/services/ApiService";

const apiService = new ApiService();

const truncateText = (text, length) => {
  return text && text.length > length ? `${text.slice(0, length)}...` : text;
};

const monthlyCampaigns = [
  {
    image: "/slidesImages/campaign1.png",
    title:
      "Donation to Ayyappa Swamys is equal to doing thousands of Yajnas. Donate to feed 800+ Swamys daily till Makara Sankranti.",
    totalDonors: 10,
  },
  {
    image: "/slidesImages/campaign2.png",
    title:
      "Donation to Ayyappa Swamys is equal to doing thousands of Yajnas. Donate to feed 800+ Swamys daily till Makara Sankranti.",
    totalDonors: 10,
  },
  {
    image: "/slidesImages/campaign3.png",
    title:
      "Donation to Ayyappa Swamys is equal to doing thousands of Yajnas. Donate to feed 800+ Swamys daily till Makara Sankranti.",
    totalDonors: 10,
  },
  {
    image: "/slidesImages/campaign2.png",
    title:
      "Donation to Ayyappa Swamys is equal to doing thousands of Yajnas. Donate to feed 800+ Swamys daily till Makara Sankranti.",
    totalDonors: 10,
  },
];

const ThankYouComponent = () => {
  const { isSmScreen } = useResponsive();
  const [email, setEmail] = useState("");
  const [panHolderNumber, setPanHolderNumber] = useState("");
  const [address, setAddress] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [featuredCamapigns, setFeaturedCampaigns] = useState([]);

  const resteForm = () => {
    setEmail("");
    setAddress("");
    setPanHolderNumber("");
    setPanNumber("");
  };

  useEffect(() => {
    const fetchfeaturedDonation = async () => {
      try {
        const response = await apiService.get(
          "/campaign/getFeaturedCampaign/list",
          {}
        );
        if (response.data && response.status === 200) {
          setFeaturedCampaigns(response.data);
        } else {
          return;
        }
      } catch (error) {
        toast.error("Failed to fetch data!");
        console.log(error);
      }
    };
    fetchfeaturedDonation();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src="/slidesImages/thankyou.png"
          alt=""
          className={styles.certificate}
        />
        <div>
          <div className={styles.popUpContainer}>
            <div className={styles.popUp}>
              <div className={styles.head}>
                <div>
                  {" "}
                  <img src="/slidesImages/phoneicon.png" alt="" /> claim your
                  80G
                </div>
              </div>
              <div className={styles.input_group}>
                <input
                  type="email"
                  placeholder="Email Id *"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Name as per PAN*"
                  id="panHolderNumber"
                  value={panHolderNumber}
                  onChange={(e) => setPanHolderNumber(e.target.value)}
                />
              </div>
              <div className={styles.input_group}>
                <input
                  type="text"
                  placeholder="PAN Number"
                  id="pan"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="complete address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <h4>Note</h4>
              <p>
                Please verify your details especially “PAN Number” and “Name as
                per PAN” to obtain the proper 80G certificate.
              </p>
              <div className={styles.claimsButtons}>
                <button className={styles.submitBtn}>Submit</button>
                <button onClick={resteForm}>Cancel</button>
              </div>
            </div>
          </div>
          {!isSmScreen && (
            <div className={styles.campaignListContainer}>
              {featuredCamapigns?.slice(0, 3).map((campaign) => (
                <div className={styles.carousel_card}>
                  <img
                    src={campaign.imageSrc}
                    className={styles.carousel_image}
                  />
                  <div className={styles.overlay}></div>
                  <div className={styles.carousel_caption_overlay}>
                    <div className={styles.progress}>
                      <span>tex benefits</span>
                      <CircleProgress
                        percentage={60}
                        size={isSmScreen ? 100 : 90}
                        stroke={isSmScreen ? 5 : 8}
                      />
                    </div>
                    <div>
                      <div className={styles.caption}>{campaign.title}</div>
                      <h5 className={styles.title}>
                        {truncateText(campaign?.shortDesc, 140)}
                      </h5>
                      <button className={styles.donateBtn}>Donate</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {isSmScreen && <MonthlyCampaign campaigns={monthlyCampaigns} />}
        </div>
      </div>
    </div>
  );
};

export default ThankYouComponent;
