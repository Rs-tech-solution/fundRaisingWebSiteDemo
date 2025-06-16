"use client";
import React, { useEffect, useState } from "react";
import ApiService from "@/services/ApiService";
import styles from "./page.module.scss";

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

const CampaignsList = () => {
  const [campaignList, setCampaignList] = useState([]);
  const [selectedCampaignDetails, setSelectedCampaignDetails] = useState(null);
  const apiService = new ApiService();

  const fetchCampaignList = async () => {
    try {
      const response = await apiService.get("/campaign/active");
      setCampaignList(response.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const fetchCampaignDetails = async (campaignCode) => {
    try {
      const response = await apiService.get(`/campaign/${campaignCode}/detail`);
      setSelectedCampaignDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch campaign details", error);
    }
  };

  useEffect(() => {
    fetchCampaignList();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
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
      </div>
    </>
  );
};

export default CampaignsList;
