"use client";
import { useEffect, useRef, useState } from "react";
import { FaShare, FaWhatsapp, FaTimes } from "react-icons/fa";
import PrimaryButton from "@/components/shared/buttons/primaryButton";
import styles from "./mobilecampaign.module.scss";
import WhatsappServices from "@/services/whatsappServices";
import DocumentsComponent from "@/components/DocumentsComponent";
import ProjectsComponent from "@/components/ProjectsComponent";
import ProductList from "../../../components/productList/index.js";
import ProgressBar from "@/components/shared/progressbar";
import TabButton from "@/components/shared/tabs";
import CampaignProject from "@/components/ProjectsComponent";
import FAQSection from "@/components/shared/faq";
import VideoSection from "@/components/videoSection";
import PriceTags from "@/components/shared/priceTags";
import ProductPuja from "@/components/productPuja";
import DonorsList from "@/components/donorsList";
import CustomSwiper from "@/components/shared/customSwiper";
import CampaignUpdates from "@/components/campaignUpdates";

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

const MobileCampaign = ({
  campaignDetails,
  campaignUpdates,
  productList,
  daysLeft,
  progressBarWidth,
  handlePriceTagClick,
  setActiveTabPrice,
  activeTabPrice,
  donationAmount,
  setDonationAmount,
  currency,
  tabs,
  refs,
  activeTab,
  setActiveTab,
  scrollToSection,
  isScrolling,
  donorList,
  selectedDonorOption,
  setSelectedDonorOption,
  handleCart,
  onAdd,
  onRemove,
  faqs,
  totalDonation,
  inputOnChange,
}) => {
  const currencySymbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
  };

  const [tabVisible, setTabVisible] = useState(true);

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
    const handleScroll = () => {
      if (isScrolling.current) return;
      let closestTab = activeTab;
      let minDistance = window.innerHeight;
      tabs.forEach((tab) => {
        if (tab.ref.current) {
          const rect = tab.ref.current.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > window.innerHeight / 2) {
            closestTab = tab.label;
          }
        }
      });

      setActiveTab(closestTab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          {/* <img src={campaignDetails?.imageSrc} alt="Campaign Image" /> */}
          {/* <CustomSwiper
            slidesPerView={1}
            showDots={false}
            wrapperClassName={styles.wrapperClassName}
            swiperClassName={styles.swiperClassName}
            paginationColor="#919499"
            activePaginationColor="#A92A04"
          >
            {slides.map((item, index) => (
              <div key={index} className={styles.div}>
                {item.type === "image" ? (
                  <img
                    src={campaignDetails?.imageSrc}
                    alt={`slide-${index}`}
                    className={styles.img}
                  />
                ) : (
                  <video src={item.url} controls className={styles.img} />
                )}
              </div>
            ))}
          </CustomSwiper> */}
          <img
            src={campaignDetails?.imageSrc}
            alt={`slide`}
            className={styles.img}
          />
        </div>

        <div className={styles.detail_container}>
          <div className={styles.campaignBenfits}>
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

          <h3 className={styles.title}>
            Donate Winter Blankets & Food to 5000+ Sadhus of Varanasi. Attain
            Punya and eliminate all Doshas
          </h3>

          <div className={styles.campaignTime}>
            <button>{campaignDetails.totalDonors} Donations</button>
            <button>
              {daysLeft > 0 ? `${daysLeft} days left` : "Campaign Closed"}
            </button>
          </div>

          <div className={styles.funding}>
            <ProgressBar progress={progressBarWidth} />
            <div className={styles.progressDetail}>
              <h3>{campaignDetails.totalDonatedAmount}</h3>
              <h3 className={styles.h3}>
                raised out of {campaignDetails.requiredAmount}
              </h3>
            </div>
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

          <div
            className={`${styles.tabs} ${tabVisible ? styles.showTabDown : ""}`}
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

          <DonorsList
            donorList={donorList}
            donors={donorList.length}
            headClassName={styles.donorListHeader}
          />

          <FAQSection faqs={faqs} />
        </div>
        <div ref={refs.productRef}>
          {/* <ProductPuja /> */}
          <ProductList
            products={productList}
            onAdd={onAdd}
            onRemove={onRemove}
            campaignCode={campaignDetails.campaignCode}
            campaignTitle={campaignDetails.title}
            // onAdd={(product) => handleAddProduct(product)}
            // onRemove={(product) => handleRemoveProduct(product)}
          />
        </div>

        <div ref={refs.projectsRef} style={{ padding: "1rem" }}>
          <CampaignProject campaignProject={campaignDetails?.description} />
        </div>

        <div
          ref={refs.updatesRef}
          style={{ paddingRight: "1rem", paddingLeft: "0.5rem" }}
        >
          <CampaignUpdates campaignUpdates={campaignUpdates} />
        </div>
        <div ref={refs.videoRef} style={{ padding: "1rem" }}>
          <VideoSection />
        </div>
        <div ref={refs.documentsRef} style={{ padding: "1rem" }}>
          {/* <DocumentsComponent /> */}
        </div>
      </div>
      <FAQSection faqs={faqs} />
    </>
  );
};

export default MobileCampaign;
