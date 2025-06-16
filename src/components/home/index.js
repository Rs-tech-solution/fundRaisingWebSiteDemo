"use client";
import React, { use, useEffect, useRef, useState } from "react";
import CategorySection from "@/components/categorySection";
import OurMission from "@/components/ourMission";
import LandingCard from "@/components/shared/landingpagecard";
import CarouselComponent from "@/components/shared/swiperCrousel";
import styles from "./home.module.scss";
import FAQSection from "@/components/shared/faq";
import CampaignList from "@/components/campaignListing";
import MonthlyCampaign from "@/components/monthlyCampaign";
import ReviewSection from "@/components/ReviewSection";
import AchieveMentSection from "@/components/achievements";
import { toast } from "react-toastify";
import ApiService from "@/services/ApiService";

const slides = [
  {
    src: "/slidesImages/slide1.png",
    title: "First Slide",
    caption:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    src: "/slidesImages/slide2.png",
    title: "First Slide",
    caption:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    src: "/slidesImages/slide3.png",
    title: "Second Slide",
    caption:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    src: "/slidesImages/slide2.png",
    title: "Third Slide",
    caption:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    src: "/slidesImages/slide3.png",
    title: "Fourth Slide",
    caption:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quissectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const categoryIcon = [
  {
    image: "/slidesImages/categoryicon1.png",
    name: "All Categories",
  },
  {
    image: "/slidesImages/categoryicon2.png",
    name: "All Categories",
  },
  {
    image: "/slidesImages/categoryicon3.png",
    name: "All Categories",
  },
  {
    image: "/slidesImages/categoryicon4.png",
    name: "All Categories",
  },
  {
    image: "/slidesImages/categoryicon5.png",
    name: "All Categories",
  },
  {
    image: "/slidesImages/categoryicon2.png",
    name: "All Categories",
  },
  {
    image: "/slidesImages/categoryicon3.png",
    name: "All Categories",
  },
];

const campaigns = [
  {
    image: "/slidesImages/campaign1.png",
    title: "Campaign 1",
    leftDays: 10,
    totalDonation: "₹8,68,982",
    totalDonors: 10,
    targetAmount: "₹40,68,982",
  },
  {
    image: "/slidesImages/campaign2.png",
    title: "Campaign 1",
    leftDays: 10,
    totalDonation: "₹8,68,982",
    totalDonors: 10,
    targetAmount: "₹40,68,982",
  },
  {
    image: "/slidesImages/campaign3.png",
    title: "Campaign 1",
    leftDays: 10,
    totalDonation: "₹8,68,982",
    totalDonors: 10,
    targetAmount: "₹40,68,982",
  },
  {
    image: "/slidesImages/campaign2.png",
    title: "Campaign 1",
    leftDays: 10,
    totalDonation: "₹8,68,982",
    totalDonors: 10,
    targetAmount: "₹40,00,000",
  },
];

const faqs = [
  {
    question: "What is Veda Sankalpa?",
    answer:
      "Veda Sankalpa is a humble initiative of a donations-based crowdfunding platform dedicated to preserving the roots of Sanatana Dharma by supporting various religious and spiritual institutions and their projects. We help communities raise funds for initiati",
  },
  {
    question: "How do I track my order?",
    answer: "You will receive a tracking link via email.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide.",
  },
];

const monthlyCampaigns = [
  {
    image: "/slidesImages/campaign1.png",
    title:
      "Annadan to Ayyappa Swamys is equal to doing thousands of Yajnas. Donate to feed 800+ Swamys daily till Makara Sankranti.",
    totalDonors: 10,
  },
  {
    image: "/slidesImages/campaign2.png",
    title:
      "Annadan to Ayyappa Swamys is equal to doing thousands of Yajnas. Donate to feed 800+ Swamys daily till Makara Sankranti.",
    totalDonors: 10,
  },
  {
    image: "/slidesImages/campaign3.png",
    title:
      "Annadan to Ayyappa Swamys is equal to doing thousands of Yajnas. Donate to feed 800+ Swamys daily till Makara Sankranti.",
    totalDonors: 10,
  },
  {
    image: "/slidesImages/campaign2.png",
    title:
      "Annadan to Ayyappa Swamys is equal to doing thousands of Yajnas. Donate to feed 800+ Swamys daily till Makara Sankranti.",
    totalDonors: 10,
  },
];

const reviews = [
  {
    rating: "5.0",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
    image: "/slidesImages/user1.png",
    name: "sonu chahar",
  },
  {
    rating: "5.0",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
    image: "/slidesImages/user1.png",
    name: "sonu chahar",
  },
  {
    rating: "5.0",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
    image: "/slidesImages/user1.png",
    name: "sonu chahar",
  },
  {
    rating: "5.0",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
    image: "/slidesImages/user1.png",
    name: "sonu chahar",
  },
];

const achievements = [
  {
    image: "/slidesImages/acheivement2.png",
    achievement: "10,000 +",
    title: "temple constructions",
  },
  {
    image: "/slidesImages/acheivement3.png",
    achievement: "10,000 +",
    title: "temple constructions",
  },
  {
    image: "/slidesImages/acheivement4.png",
    achievement: "10,000 +",
    title: "temple constructions",
  },
  {
    image: "/slidesImages/acheivement5.png",
    achievement: "10,000 +",
    title: "temple constructions",
  },
  {
    image: "/slidesImages/acheivement1.png",
    achievement: "10,000 +",
    title: "temple constructions",
  },
];

const LandingPage = () => {
  const apiService = new ApiService();
  const [campaignList, setCampaignList] = useState([]);
  const [featuredCamapigns, setFeaturedCampaigns] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchCampaignList = async () => {
    try {
      const res = await apiService.get(`/campaign/all`, {});
      if (res.status === 200 && res.data) {
        setCampaignList(res.data.slice(0, 5));
      } else {
        return;
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  // useEffect(() => {
  //   fetchCampaignList();
  // }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await apiService.get("/campaign/category/list", {});
        if (res.status === 200 && res.data) {
          setCategories(res.data);
        } else {
          setCategories([]);
          return;
        }
      } catch (error) {
        toast.error("something went wrong");
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchfeaturedDonation = async () => {
      try {
        const response = await apiService.get(
          "/campaign/all",
          // "/campaign/getFeaturedCampaign/list"
          {}
        );
        if (response.data && response.status === 200) {
          setFeaturedCampaigns(response.data.slice(0, 4));
        } else {
          return;
        }
      } catch (error) {
        message.error("Failed to fetch data!");
        console.log(error);
      }
    };
    fetchfeaturedDonation();
  }, []);

  useEffect(() => {
    const fetchCategoryBasedCampaign = async () => {
      try {
        const res = await apiService.get(
          `/campaign/categoryRelatedCampaigns/${selectedCategory}`
        );
        if (res.status === 200) {
          setCampaignList(res.data.slice(0, 5));
        } else {
          return;
        }
      } catch (error) {
        toast.error("failed to fatch ", selectedCategory, " related Campaigns");
      }
    };
    if (selectedCategory !== "All") {
      fetchCategoryBasedCampaign();
    }
    if (selectedCategory === "All") {
      fetchCampaignList();
    }
  }, [selectedCategory]);

  return (
    <div>
      <CarouselComponent images={featuredCamapigns} />
      <div className={styles.landingPageWrapper}>
        <div className={styles.campaignListWrapper}>
          <CategorySection
            category={categoryIcon}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CampaignList campaigns={campaignList} />
        </div>
        <MonthlyCampaign
          campaigns={monthlyCampaigns}
          cardClassName={styles.monthlyCamCard}
        />
        <OurMission />
        <LandingCard
          image="/slidesImages/bigbanner1.png"
          title="Help"
          text="Help us to help you fjasldfuojgngsg lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          isImageRight={false}
        />
        <LandingCard
          image="/slidesImages/bigbanner2.png"
          title="Help"
          text="Help us to help you fjasldfuojgngsg 
          Help us to help you fjasldfuojgngsg lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          isImageRight={true}
        />
        <LandingCard
          image="/slidesImages/bigbanner3.png"
          title="Help"
          text="Help us to help you fjasldfuojgngsg 
          Help us to help you fjasldfuojgngsg lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          isImageRight={false}
        />

        <ReviewSection reviews={reviews} />
        <AchieveMentSection achievements={achievements} />

        <FAQSection faqs={faqs} />
      </div>
    </div>
  );
};

export default LandingPage;
