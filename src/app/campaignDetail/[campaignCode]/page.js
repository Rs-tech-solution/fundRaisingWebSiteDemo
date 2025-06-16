"use client";

import React, { useEffect, useRef, useState } from "react";
import ApiService from "@/services/ApiService";
import { useResponsive } from "@/context/useResponsive";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaGooglePay,
  FaPaypal,
  FaAmazonPay,
  FaApplePay,
  FaEllipsisH,
  FaRegCreditCard,
  FaHome,
  FaAlipay,
  FaGift,
} from "react-icons/fa";
import MobileCampaign from "./campaignmobile";
import styles from "./campaign.module.scss";
import {
  addToCart,
  removeFromCart,
  directDonationn,
} from "@/store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "@/components/checkout2";
import CampaignProject from "@/components/ProjectsComponent";
import DocumentsComponent from "@/components/DocumentsComponent";
import TabButton from "@/components/shared/tabs";
import ProductList from "../../../components/productList";
import ProgressBar from "@/components/shared/progressbar";
import VideoSection from "@/components/videoSection";
import PriceTags from "@/components/shared/priceTags";
import DonorsList from "@/components/donorsList";
import { toast } from "react-toastify";
import ProductPuja from "@/components/productPuja";
import FAQSection from "@/components/shared/faq";
import CustomSwiper from "@/components/shared/customSwiper";
import CampaignUpdates from "@/components/campaignUpdates";

const products = [
  {
    id: 1,
    name: "Groceries Kit",
    price: 650,
    unit: "per unit",
    image:
      "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
    obtained: 11,
    total: 2000,
    priority: 5,
  },
  {
    id: 2,
    name: "Groceries Kit",
    price: 650,
    unit: "per unit",
    image:
      "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
    obtained: 11,
    total: 2000,
    priority: 5,
  },
  {
    id: 3,
    name: "Hygiene Kit",
    price: 550,
    unit: "per unit",
    image:
      "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
    obtained: 5,
    total: 2000,
    priority: 10,
  },
  {
    id: 4,
    name: "Groceries Kit",
    price: 650,
    unit: "per unit",
    image:
      "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
    obtained: 11,
    total: 2000,
    priority: 11,
  },
  {
    id: 5,
    name: "Hygiene Kit",
    price: 550,
    unit: "per unit",
    image:
      "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
    obtained: 5,
    total: 2000,
    priority: 10,
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

const slides = [
  { type: "image", url: "https://example.com/image1.jpg" },
  { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", url: "https://example.com/image2.jpg" },
];

const Campaign = () => {
  const router = useRouter();
  const [donation, setDonation] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [donationAmount, setDonationAmount] = useState("");
  const [campaignDetails, setCampaignDetails] = useState([]);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [activeTab, setActiveTab] = useState(null);
  const [activeTabPrice, setActiveTabPrice] = useState("");
  const [selectedDonorOption, setSelectedDonorOption] = useState("recent");
  const isScrolling = useRef(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [donorList, setDonorsList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [campaignUpdates, setCampaignUpdates] = useState([]);
  const [isCampaignClosed, setIsCampaignClosed] = useState(false);
  const [totalDonation, setTotalDonation] = useState(0);

  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const donationPrice = useSelector((state) => state.cart.donationAmount);

  const refs = {
    updatesRef: useRef(null),
    projectsRef: useRef(null),
    documentsRef: useRef(null),
    productRef: useRef(null),
    videoRef: useRef(null),
  };

  const tabs = [
    {
      label: "Products",
      icon: "/slidesImages/box.png",
      ref: refs.productRef,
    },
    {
      label: "Projects",
      icon: "/slidesImages/description.png",
      ref: refs.projectsRef,
    },
    {
      label: "Updates",
      icon: "/slidesImages/update.png",
      ref: refs.updatesRef,
    },

    // {
    //   label: "Documents",
    //   icon: "/slidesImages/description.png",
    //   ref: refs.documentsRef,
    // },
    {
      label: "Sankalpa",
      icon: "/slidesImages/play.png",
      ref: refs.videoRef,
    },
  ];

  const params = useParams();
  const { campaignCode } = params;

  const today = new Date();
  const endDate = campaignDetails?.endDate
    ? new Date(campaignDetails.endDate)
    : today;
  const diffInTime = endDate - today;
  const daysLeft =
    diffInTime > 0 ? Math.ceil(diffInTime / (1000 * 60 * 60 * 24)) : 0;

  const scrollToSection = (ref, tabName) => {
    isScrolling.current = true;
    setActiveTab(tabName);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  const { isSmScreen } = useResponsive();

  const currencySymbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
  };

  const handlePriceTagClick = (amount) => {
    if (amount === "others") {
      setDonationAmount("");
    } else {
      setDonationAmount(amount);
      setActiveTabPrice(amount);
      dispatch(
        directDonationn({
          campaignCode: campaignDetails.id,
          campaignTitle: campaignDetails.title,
          donationAmount: amount,
          campaignImage: campaignDetails.imageSrc,
        })
      );
    }
  };

  const inputOnChange = (e) => {
    setDonationAmount(e.target.value);
    dispatch(
      directDonationn({
        campaignCode: campaignDetails.id,
        campaignTitle: campaignDetails.title,
        donationAmount: e.target.value,
        campaignImage: campaignDetails.imageSrc,
      })
    );
  };

  const handleAddProduct = (product) => {
    dispatch(
      addToCart({
        ...product,
        campaignCode: campaignDetails.id,
        campaignTitle: campaignDetails.title,
        campaignImage: campaignDetails.imageSrc,
        campaignType: "product",
      })
    );
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleCart = () => {
    // if (donationAmount > 0 && donationAmount !== "others") {
    //   dispatch(
    //     directDonationn({
    //       campaignCode: campaignDetails.id,
    //       campaignTitle: campaignDetails.title,
    //       donationAmount: donationAmount,
    //       campaignImage: campaignDetails.imageSrc,
    //     })
    //   );
    //   router.push("/checkoutpage");
    //   return;
    // }

    if (totalPrice > 0 || donationPrice > 0) {
      router.push("/checkoutpage");
      return;
    } else {
      toast.error(
        "Please select a product or enter an amount to proceed to checkout."
      );
    }
  };

  const getFirstAlphabets = (text) => {
    return text
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  const fetchTotalDonatedAmount = async (code) => {
    try {
      const apiService = new ApiService();
      const response = await apiService.get(
        `/campaign/${code}/campaign_total_dontion`
      );
      if (response.status === 200 && response.data) {
        setCampaignDetails((prev) => ({
          ...prev,
          totalDonatedAmount: response.data.procuredAmount,
          totalDonors: response.data.donorsCount,
        }));
      } else {
        setCampaignDetails((prev) => ({ ...prev }));
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCampaignDetails = async (code) => {
    try {
      const apiService = new ApiService();
      const response = await apiService.get(`/campaign/${code}/detail`);
      if (response.status === 200 && response.data) {
        setCampaignDetails(response.data);
      } else {
        setCampaignDetails([]);
        return;
      }
    } catch (error) {
      console.error("Failed to fetch campaign details", error);
    }
  };

  const fetchDonorsList = async (code) => {
    try {
      const apiService = new ApiService();
      const res = await apiService.get(`/campaign/${code}/donors`, {});
      if (res.data && res.status === 200) {
        setDonorsList(res.data);
      } else {
        setDonorsList([]);
        return;
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const fetchCampaignProducts = async (id) => {
    const apiService = new ApiService();
    try {
      const res = await apiService.get(
        `/campaign/${id}/getCampaignProducts`,
        {}
      );
      console.log("data", res.data);
      if (res.status == 200 && res.data) {
        setProductList(res.data);
      } else {
        setProductList([]);
        return;
      }
    } catch (error) {
      console.log("failed to fetch campaignn products", error);
      toast.error("something went wrong");
    }
  };

  const fetchCampaignUpdates = async (id) => {
    const apiService = new ApiService();
    try {
      const res = await apiService.get(
        `/campaign/${id}/getCampaignUpdates`,
        {}
      );
      if (res.status == 200 && res.data) {
        setCampaignUpdates(res.data);
      } else {
        setCampaignUpdates([]);
      }
    } catch (error) {
      console.log("failed to fetch campaignn products", error);
      toast.error("something went wrong");
    }
  };

  const fetchCampaignDocuments = async (id) => {
    const apiService = new ApiService();
    try {
      const res = await apiService.get(
        `/campaign/${id}/getCampaignDocuments`,
        {}
      );
      if (res.status == 200) {
        setProductList(res.data);
      }
    } catch (error) {
      console.log("failed to fetch campaignn products", error);
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    if (campaignDetails.totalDonatedAmount) {
      setProgressBarWidth(
        Number(
          Math.min(
            (campaignDetails.totalDonatedAmount /
              campaignDetails.requiredAmount) *
              100,
            100
          ).toFixed(2)
        )
      );
    }
  }, [campaignDetails]);

  useEffect(() => {
    if (campaignCode) {
      fetchCampaignDetails(campaignCode);
    }
  }, [campaignCode]);

  useEffect(() => {
    if (campaignDetails.id) {
      fetchTotalDonatedAmount(campaignDetails.id);
      fetchDonorsList(campaignDetails.id);
      fetchCampaignProducts(campaignDetails.id);
      fetchCampaignUpdates(campaignDetails.id);
    }
  }, [campaignDetails.id]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;
      let closestTab = activeTab;
      tabs.forEach((tab) => {
        if (tab.ref.current) {
          const rect = tab.ref.current.getBoundingClientRect();
          if (rect.top <= 20 && rect.bottom > window.innerHeight / 2) {
            closestTab = tab.label;
          }
        }
      });

      setActiveTab(closestTab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  useEffect(() => {
    let prevScroll = window.scrollY;
    let hasScrolledUp = false;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScroll > currentScrollPos) {
        setTabVisible(true);
        hasScrolledUp = true;
      }

      if (prevScroll < currentScrollPos && hasScrolledUp) {
        setTabVisible(false);
      }

      prevScroll = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // setDonationAmount(totalPrice);
    // setActiveTabPrice("");
    setTotalDonation(totalPrice + Number(donationPrice));
  }, [totalPrice, donationPrice]);

  if (!campaignDetails) {
    return <div>Loading...</div>;
  }

  return !isSmScreen ? (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>{campaignDetails?.title}</h2>
        <div className={styles.campaignBenfits}>
          <p>Campaign by SOCIAL HEALTH AND MEDICINE (SOHAM) TRUST, Varanasi</p>
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.taxBenefit}`}>
              Tax Benefit
            </span>
            <span className={`${styles.tag} ${styles.verified}`}>
              {" "}
              <img src="/slidesImages/verifiedtag.png" />
              Verified
            </span>
            <span className={`${styles.tag} ${styles.assured}`}>Assured</span>
          </div>
        </div>
        <div className={styles.child}>
          <div className={styles.leftSection}>
            {/* <CustomSwiper
              slidesPerView={1}
              showDots={true}
              wrapperClassName={styles.wrapperClassName}
              swiperClassName={styles.swiperClassName}
              paginationColor="#F4F4FC"
              activePaginationColor="#A92A04"
            >
              {slides.map((item, index) => (
                <div key={index} className={styles.div}>
                  {item.type === "image" ? (
                    <img
                      src={campaignDetails?.imageSrc}
                      alt={`slide-${index}`}
                      className={styles.campaignImage}
                    />
                  ) : (
                    <video
                      src={item.url}
                      controls
                      className={styles.campaignImage}
                    />
                  )}
                </div>
              ))}
            </CustomSwiper> */}
            <img
              src={campaignDetails?.imageSrc}
              alt={`slide`}
              className={styles.campaignImage}
            />
            <div
              className={`${styles.tabs} ${
                tabVisible ? styles.showTabDown : ""
              }`}
            >
              {tabs.map((tab) => (
                <TabButton
                  key={tab.label}
                  label={tab.label}
                  icon={tab.icon}
                  activeTab={activeTab}
                  sectionRef={tab.ref}
                  scrollToSection={scrollToSection}
                  tabClassName={styles.tab}
                  activeClassName={styles.activeTabClassName}
                  tabLabelClassName={styles.tabLebel}
                />
              ))}
            </div>

            <div className={styles.detailWrapper}>
              {productList.length > 0 && (
                <div ref={refs.productRef}>
                  <ProductList
                    products={productList}
                    campaignCode={campaignCode}
                    campaignTitle={campaignDetails.title}
                    onAdd={(product) => handleAddProduct(product)}
                    onRemove={(product) => handleRemoveProduct(product)}
                  />
                </div>
              )}
              <div ref={refs.projectsRef}>
                <CampaignProject
                  campaignProject={campaignDetails?.description}
                />
              </div>
              <div ref={refs.updatesRef}>
                <CampaignUpdates campaignUpdates={campaignUpdates} />
              </div>
              <div ref={refs.videoRef}>
                <VideoSection />
              </div>
            </div>
          </div>

          {!isCampaignClosed ? (
            <div className={styles.rightSection}>
              <div className={styles.funding}>
                <ProgressBar progress={progressBarWidth} />
                <div className={styles.progressDetail}>
                  <h3>{progressBarWidth}%</h3>
                  <h3>₹{campaignDetails?.totalDonatedAmount || 0}</h3>
                </div>
                <h3 className={styles.h3}>
                  raised out of {campaignDetails?.requiredAmount}
                </h3>
              </div>
              <div className={styles.campaignTime}>
                <button>{campaignDetails?.totalDonors} Donations</button>
                <button>
                  {daysLeft > 0 ? `${daysLeft} days left` : "Campaign Closed"}
                </button>
              </div>
              <div className={styles.DonationBagWrapper}>
                <PriceTags
                  activeTabPrice={activeTabPrice}
                  setActiveTabPrice={setActiveTabPrice}
                  handlePriceTagClick={handlePriceTagClick}
                  currency={currency}
                  donationAmount={donationAmount}
                  setDonationAmount={setDonationAmount}
                  priceArray={[1000, 2500, 5000]}
                  handleCart={handleCart}
                  mostSelected={2500}
                  totalDonation={totalDonation}
                  inputOnChange={inputOnChange}
                />
              </div>
              <DonorsList
                donorList={donorList}
                donors={donorList.length}
                selectedDonorOption={selectedDonorOption}
                setSelectedDonorOption={setSelectedDonorOption}
                headClassName={styles.donorHead}
              />
            </div>
          ) : (
            <div className={styles.closedCampaign}>
              <div className={styles.closedHeader}>
                <div>
                  <img src="/slidesImages/star.png" alt="" />{" "}
                  <div className={styles.p}>Event: Mokshada Ekadashi</div>
                </div>
                <div>
                  <img src="/slidesImages/calender.png" alt="" />{" "}
                  <div className={styles.p}>Date: 11th Dec 2024</div>
                </div>
                <div>
                  <img src="/slidesImages/map.png" alt="" />{" "}
                  <div className={styles.p}>Vanue: Trupati kshetra</div>
                </div>
              </div>
              <div className={styles.closedImg}>
                <img
                  src="/slidesImages/closedflower.png"
                  alt=""
                  className={styles.centerImg}
                />
                <div className={styles.closedContent}>
                  <h4>We are for Sanatana Dharma Rakshana</h4>
                  <h2>₹8,84,000</h2>
                  <p>Amount Raised</p>
                  <span>Donors {2000}</span>
                </div>
              </div>
              <div className={styles.closedFooter}>
                <p>
                  This phrase conveys the idea of supporting & safeguarding the
                  ancient spiritual and cultural traditions of Sanatana Dharma.
                </p>
                <button>Campaign Closed</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <FAQSection faqs={faqs} />
    </>
  ) : (
    <MobileCampaign
      campaignDetails={campaignDetails}
      campaignUpdates={campaignUpdates}
      productList={productList}
      daysLeft={daysLeft}
      progressBarWidth={progressBarWidth}
      handlePriceTagClick={handlePriceTagClick}
      setActiveTabPrice={setActiveTabPrice}
      activeTabPrice={activeTabPrice}
      donationAmount={donationAmount}
      setDonationAmount={setDonationAmount}
      currency={currency}
      tabs={tabs}
      setActiveTab={setActiveTab}
      refs={refs}
      activeTab={activeTab}
      scrollToSection={scrollToSection}
      isScrolling={isScrolling}
      donorList={donorList}
      selectedDonorOption={selectedDonorOption}
      setSelectedDonorOption={setSelectedDonorOption}
      onAdd={(product) => handleAddProduct(product)}
      onRemove={(product) => handleRemoveProduct(product)}
      handleCart={handleCart}
      faqs={faqs}
      totalDonation={totalDonation}
      inputOnChange={inputOnChange}
    />
  );
};

export default Campaign;
