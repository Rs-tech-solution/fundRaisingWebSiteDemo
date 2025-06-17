"use client";

import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CategoryPage.module.scss";
import CampaignCard from "@/components/shared/CampaignCard";
import { FaSortAmountDown } from "react-icons/fa";
import { useResponsive } from "@/context/useResponsive";
import SevaProduct from "@/components/shared/sevaProduct";
import ApiService from "@/services/ApiService";
import { toast } from "react-toastify";

const apiService = new ApiService();

// const pujass = [
//   {
//     id: 1,
//     imageSrc: "/slidesImages/sevaproduct.png",
//     title:
//       " Sampoorna Bhagavad Gita Homa + Madhu Abhishekam + Sahasra Tulasi Archana + Energised Sri Krishna Lotus Feet",
//     description:
//       " Imbibe the divine virtues of the Gita and transform your life of Moshada Ekadashi. Appease Lord Mahavishnu by offering Abhishekam with honey and Archana with 1000 Tulasi Dalas. Purify your energy and overcome mental stress, negative thoughts and issues. Boost your self confidence and strengthen your Bhakti and Spiritual Sadhana",
//     originalPrice: "₹4,048",
//     discountedPrice: "₹3,717",
//     discount: "8% off",
//   },
//   {
//     id: 2,
//     imageSrc: "/slidesImages/sevaproduct.png",
//     title:
//       " Sampoorna Bhagavad Gita Homa + Madhu Abhishekam + Sahasra Tulasi Archana + Energised Sri Krishna Lotus Feet",
//     description:
//       " Imbibe the divine virtues of the Gita and transform your life of Moshada Ekadashi. Appease Lord Mahavishnu by offering Abhishekam with honey and Archana with 1000 Tulasi Dalas. Purify your energy and overcome mental stress, negative thoughts and issues. Boost your self confidence and strengthen your Bhakti and Spiritual Sadhana",
//     originalPrice: "₹4,048",
//     discountedPrice: "₹3,717",
//     discount: "8% off",
//   },
//   {
//     id: 3,
//     imageSrc: "/slidesImages/sevaproduct.png",
//     title:
//       " Sampoorna Bhagavad Gita Homa + Madhu Abhishekam + Sahasra Tulasi Archana + Energised Sri Krishna Lotus Feet",
//     description:
//       " Imbibe the divine virtues of the Gita and transform your life of Moshada Ekadashi. Appease Lord Mahavishnu by offering Abhishekam with honey and Archana with 1000 Tulasi Dalas. Purify your energy and overcome mental stress, negative thoughts and issues. Boost your self confidence and strengthen your Bhakti and Spiritual Sadhana",
//     originalPrice: "₹4,048",
//     discountedPrice: "₹3,717",
//     discount: "8% off",
//   },
//   {
//     id: 4,
//     imageSrc: "/slidesImages/sevaproduct.png",
//     title:
//       " Sampoorna Bhagavad Gita Homa + Madhu Abhishekam + Sahasra Tulasi Archana + Energised Sri Krishna Lotus Feet",
//     description:
//       " Imbibe the divine virtues of the Gita and transform your life of Moshada Ekadashi. Appease Lord Mahavishnu by offering Abhishekam with honey and Archana with 1000 Tulasi Dalas. Purify your energy and overcome mental stress, negative thoughts and issues. Boost your self confidence and strengthen your Bhakti and Spiritual Sadhana",
//     originalPrice: "₹4,048",
//     discountedPrice: "₹3,717",
//     discount: "8% off",
//   },
// ];

const CategoryPage = () => {
  // const campaigns = [
  //   {
  //     image: "/help.webp",
  //     title: "Campaign 1",
  //     leftDays: 10,
  //     totalDonation: 1000,
  //     totalDonors: 10,
  //     targetAmount: 10000,
  //   },
  //   {
  //     image: "/help.webp",
  //     title: "Campaign 1",
  //     leftDays: 10,
  //     totalDonation: 1000,
  //     totalDonors: 10,
  //     targetAmount: 10000,
  //   },
  //   {
  //     image: "/help.webp",
  //     title: "Campaign 1",
  //     leftDays: 10,
  //     totalDonation: 1000,
  //     totalDonors: 10,
  //     targetAmount: 10000,
  //   },
  //   {
  //     image: "/help.webp",
  //     title: "Campaign 1",
  //     leftDays: 10,
  //     totalDonation: 1000,
  //     totalDonors: 10,
  //     targetAmount: 10000,
  //   },
  // ];
  const [campaigns, setCampaigns] = useState([]);
  const [pujas, setPujas] = useState([]);
  // const [filterPujas, setFilterPujas] = useState([]);
  // const [filterCampaigns, setFilterCampaigns] = useState([]);
  const filters = ["All", "ongoing", "completed", "upcoming"];
  const sortByItems = ["Animal", "Disaster", "Hospital", "School"];
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [activeSort, setActiveSort] = React.useState(null);
  const [activeBtn, setActiveBtn] = React.useState("donations");
  const [toggle, setToggle] = React.useState(true);

  const { isSmScreen } = useResponsive();

  const onFilterChange = (filter) => {
    setActiveFilter(filter);
    setToggle(true);
    setActiveSort(null);
  };

  const getFilteredData = (data) => {
    const now = new Date();

    switch (activeFilter) {
      case "completed":
        return data.filter((item) => {
          const start = new Date(item.approvalDate);
          const end = new Date(item.endDate);
          return start <= now && end >= now;
        });
      case "ongoing":
        return data.filter((item) => {
          const end = new Date(item.endDate);
          return end < now;
        });
      case "upcoming":
        return data.filter((item) => {
          const start = new Date(item.approvalDate);
          return start > now;
        });
      case "All":
      default:
        return data;
    }
  };

  const onSortClick = (data) => {
    setActiveFilter(data);
    setToggle((prev) => !prev);
  };

  const onSortChange = (data) => {
    setActiveSort(data);
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await apiService.get("/campaign/all", {});
        if (res.data && res.status === 200) {
          setCampaigns(res.data);
        } else {
          setCampaigns([]);
          return;
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    };
    if (activeBtn == "donations") {
      fetchCampaigns();
    }
  }, [activeBtn]);

  useEffect(() => {
    const fetchPujas = async () => {
      try {
        const res = await apiService.get("/puja/all", {});
        if (res.data && res.status === 200) {
          setPujas(res.data);
        } else {
          setPujas([]);
          return;
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    };
    if (activeBtn == "pujas") {
      fetchPujas();
    }
  }, [activeBtn]);

  useEffect(() => {
    setActiveFilter("All");
  }, [activeBtn]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Dharma Parirakshana</h2>
      <p className={styles.text}>
        Uphold the Glory of Sanatana Dharma: Support Temples, Veda Pathshalas,
        Goshala, & Ashrams through your generous donations.
      </p>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.btn} ${
            activeBtn == "donations" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveBtn("donations")}
        >
          Donations
        </button>
        <button
          className={`${styles.btn} ${
            activeBtn == "pujas" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveBtn("pujas")}
        >
          Pujas
        </button>
      </div>

      <div
        className={`d-flex justify-content-between mb-3 px-3 ${styles.filters}`}
      >
        <div className={styles.filterContainer}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.active : ""
              }`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <button
          className={`${styles.filterBtn} ${
            activeFilter === "sortBy" ? styles.active : ""
          }`}
          onClick={() => onSortClick("sortBy")}
        >
          {!isSmScreen && "Sort By "} <FaSortAmountDown />
        </button>
        {activeFilter === "sortBy" && (
          <div
            className={`${
              activeFilter === "sortBy" ? styles.sortByItems : ""
            } ${toggle ? styles.sortByItemsHide : ""}`}
          >
            {sortByItems?.map((item) => (
              <div
                className={`${
                  activeSort == item ? styles.sortActive : styles.sortItem
                }`}
                onClick={() => onSortChange(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <Row>
        {activeBtn === "pujas" &&
          getFilteredData(pujas)?.map((puja, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <SevaProduct key={index} product={puja} />
            </Col>
          ))}

        {activeBtn === "donations" &&
          getFilteredData(campaigns)?.map((campaign, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <CampaignCard campaigns={campaign} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default CategoryPage;
