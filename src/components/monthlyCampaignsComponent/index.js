import React, { useEffect, useRef, useState } from "react";
import styles from "./monthlyCampaign.module.scss";
import ProgressBar from "../shared/progressbar";
import PriceTags from "../shared/priceTags";
import MonthlyCampaignCard from "../monthlyCampaign/monthlyCampaignCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MissionBanner from "../missionBanner";
import SlidesCampaignList from "../slidesCampaignList";
// import CampaignUpdates from "@/app/dummy/page";
import DonorsList from "../donorsList";
import { useResponsive } from "@/context/useResponsive";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";
import ProductCard from "../shared/productCard";
import CampaignUpdates from "../campaignUpdates";

const checkMarks = [
  {
    checkMark: "Medical",
    img: "/slidesImages/medicalicon.png",
    desc: "Donate to charity for those who need better medical care",
  },
  {
    checkMark: "Rental",
    img: "/slidesImages/rental.png",
    desc: "Donate to charity for those who need better medical care",
  },
  {
    checkMark: "Groceries",
    img: "/slidesImages/groceries.png",
    desc: "Donate to charity for those who need better medical care",
  },
  {
    checkMark: "Hospital",
    img: "/slidesImages/hospitalicon.png",
    desc: "Donate to charity for those who need better medical care",
  },
];

const campaigns = [
  {
    image: "/slidesImages/campaign1.png",
    title: "Help this family with Medical Care, who are at Rajasthan",
    leftDays: 10,
    // totalDonation: 1000,
    totalDonors: 10,
    targetAmount: 10000,
    desc: "Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same.",
  },
  {
    image: "/slidesImages/campaign2.png",
    title: "Campaign 1",
    leftDays: 10,
    // totalDonation: 1000,
    totalDonors: 10,
    targetAmount: 10000,
    desc: "Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same.",
  },
  {
    image: "/slidesImages/campaign3.png",
    title: "Campaign 1",
    leftDays: 10,
    // totalDonation: 1000,
    totalDonors: 10,
    targetAmount: 10000,
    desc: "Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same.",
  },
  {
    image: "/slidesImages/campaign2.png",
    title: "Campaign 1",
    leftDays: 10,
    // totalDonation: 1000,
    totalDonors: 10,
    targetAmount: 10000,
    desc: "Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same.",
  },
];

const temples = [
  {
    image: "/slidesImages/templeConstruction.png",
    title: "Help this family with Medical Care, who are at Rajasthan",
    leftDays: 10,
    // totalDonation: 1000,
    totalDonors: 10,
    targetAmount: 10000,
    desc: "Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same.",
  },
  {
    image: "/slidesImages/campaign2.png",
    title: "Campaign 1",
    leftDays: 10,
    // totalDonation: 1000,
    totalDonors: 10,
    targetAmount: 10000,
    desc: "Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same.",
  },
  {
    image: "/slidesImages/templeConstruction.png",
    title: "Campaign 1",
    leftDays: 10,
    // totalDonation: 1000,
    totalDonors: 10,
    targetAmount: 10000,
    desc: "Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same.",
  },
  {
    image: "/slidesImages/campaign2.png",
    title: "Campaign 1",
    leftDays: 10,
    // totalDonation: 1000,
    totalDonors: 10,
    targetAmount: 10000,
    desc: "Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same. Donate to charity for those who need better medical care, this is where all the content comes in, so I am creating more space for the same.",
  },
];

const helps = [
  {
    help: "8,850+",
    helpinfo: "medical help given",
  },
  {
    help: "10,000+",
    helpinfo: "help with renting house",
  },
  {
    help: "6,000+",
    helpinfo: "help with hospital",
  },
];

const donorList = [
  {
    img: "/slidesImages/user1.png",
    name: "sonu chahar fjkjfdiklfjkdsfji jfjfi",
    amount: "50,000",
  },
  {
    img: "/slidesImages/user1.png",
    name: "sonu chahar",
    amount: "50,000",
  },
  {
    img: "/slidesImages/user1.png",
    name: "sonu chahar",
    amount: "50,000",
  },
  {
    img: "/slidesImages/user1.png",
    name: "sonu chahar",
    amount: "50,000",
  },
];

const products = [
  {
    id: 1,
    name: "Warm Blanket for a set of two",
    price: 650,
    unit: "per unit",
    image:
      "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
    obtained: 11,
    total: 2000,
    priority: 5,
    desc: " Winter Blankets Made of wool",
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
    desc: " Winter Blankets Made of wool",
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
    desc: " Winter Blankets Made of wool",
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
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const MonthlyCampaignsComponent = ({ isTemple }) => {
  const [activeTabPrice, setActiveTabPrice] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedDonorOption, setSelectedDonorOption] = useState("recent");
  const priceArray = [1000, 2500, 5000];
  const preRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeStoryBtn, setActiveStoryBtn] = useState("story");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const { isSmScreen } = useResponsive();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsExpanded(true);

    setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    }, 50);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSelectedIndex(null);
  };

  const handleCart = () => {
    console.log("clicked");
  };

  const getProductQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handlePriceTagClick = (amount) => {
    setDonationAmount(amount);
  };

  const handleAddProduct = (product) => {
    dispatch(
      addToCart({
        ...product,
        // campaignCode: campaignDetails.campaignCode,
        // campaignTitle: campaignDetails.campaignTitle,
        // campaignImage: campaignDetails.campaignImage,
      })
    );
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;

      if (preRef.current && nextRef.current) {
        swiper.params.navigation.prevEl = preRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }

      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);

      swiper.on("slideChange", () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      });
    }
  }, [isExpanded]);

  return (
    <>
      <div
        className={styles.header}
        style={{
          backgroundColor: `${isTemple ? "rgba(141, 24, 27, 1)" : "#000"}`,
        }}
      >
        <div className={styles.headerText}>
          <h2>Changing Lives for the Better</h2>
          <p>
            Charity is the act of giving help to those in need of it. It is a
            humanitarian at. It involves giving money, good or{" "}
          </p>
          <div className={styles.headerCheckMarks}>
            {checkMarks.map((chekmark, index) => (
              <div className={styles.checkMark} key={index}>
                <img src="/slidesImages/check.png" alt="" />
                <div className={styles.checkmarktag}>{chekmark.checkMark}</div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/slidesImages/monthlycampaigheader.png"
          className={styles.img}
        />
      </div>
      <div className={styles.donationContainer}>
        <div className={styles.progress}>
          <p>Help us create a better world for all the families in need.</p>
          <ProgressBar progress={30} />
          <div className={styles.donationDetail}>
            <span>1,75,578</span>
            <span>10,00,000</span>
          </div>
          <div className={styles.donationDetailBtn}>
            <button>families helped</button>
            <button>1300 donations</button>
          </div>
        </div>
        <div className={styles.priceTags}>
          <PriceTags
            activeTabPrice={activeTabPrice}
            setActiveTabPrice={setActiveTabPrice}
            handlePriceTagClick={handlePriceTagClick}
            currency={currency}
            donationAmount={donationAmount}
            setDonationAmount={setDonationAmount}
            priceArray={priceArray}
            handleCart={handleCart}
            mostSelected={2500}
          />
        </div>
      </div>
      <div className={styles.checkMarkConatiner}>
        <h3>A Glimps Into The Help We Give</h3>
        <div className={styles.tagsAlignContainer}>
          {checkMarks.map((checkmark, index) => (
            <div className={styles.tags} key={index}>
              <img src={checkmark.img} alt="" />
              <div>
                <h4>{checkmark.checkMark}</h4>
                <p>{checkmark.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isTemple && (
        <div className={styles.productListContainer}>
          <div className={styles.carouselContainer}>
            <Swiper
              modules={isSmScreen ? [Navigation, Pagination] : [Navigation]}
              pagination={isSmScreen ? { clickable: true } : false}
              slidesPerView={1.1}
              spaceBetween={isSmScreen ? 15 : 30}
              className={styles.swiper}
              breakpoints={{
                768: { slidesPerView: 1.1 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              style={{
                // "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "rgba(169, 42, 4, 1)",
                // "--swiper-pagination-active-color": "red",
                // "--swiper-pagination-bottom": "20px",
                // "--swiper-scrollbar-color": "#fff",
                // "--swiper-scrollbar-drag-background-color": "#fff",
              }}
            >
              {products.map((item, index) => (
                <SwiperSlide key={index} className={styles.carousel_slide}>
                  <ProductCard
                    key={item.id}
                    product={item}
                    isSelected={getProductQuantity(item.id) > 0}
                    quantity={getProductQuantity(item.id)}
                    onAdd={handleAddProduct}
                    onRemove={handleRemoveProduct}
                    cardClassName={styles.productCard}
                    productTitleClassName={styles.productTitle}
                    productImageClassName={styles.productImage}
                    quantityContainerClassName={styles.quantityContainer}
                    featureClassName={styles.feature}
                    priceClassName={styles.price}
                    addButtonClassName={styles.addButton}
                    quantityControlClassName={styles.quantityControl}
                    productQuantityClassName={styles.productQuantity}
                    minusButtonClassName={styles.minusButton}
                    plusButtonClassName={styles.plusButton}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {isSmScreen && <div className="custom-pagination"></div>}
          </div>
        </div>
      )}

      {isTemple && (
        <div className={styles.campaignSlideContainer}>
          {!isSmScreen ? (
            <>
              <div className={styles.bigSlide}>
                <div className={styles.swiperWrapper}>
                  <Swiper
                    modules={[Navigation]}
                    slidesPerView={isExpanded ? 1 : 3}
                    spaceBetween={isExpanded ? 30 : 5}
                    navigation={
                      isExpanded
                        ? { prevEl: preRef.current, nextEl: nextRef.current }
                        : false
                    }
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onInit={(swiper) => {
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                    }}
                    // initialSlide={isExpanded ? selectedIndex : 0}
                    className={styles.swiper}
                  >
                    {temples.map((campaign, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className={`${styles.campaignContainer} ${
                            isExpanded ? styles.expanded : ""
                          }`}
                        >
                          {!isExpanded ? (
                            <img
                              src={campaign.image}
                              alt="Campaign"
                              className={styles.thumbnail}
                              onClick={() => handleImageClick(index)}
                            />
                          ) : (
                            <MonthlyCampaignCard
                              campaigns={campaign}
                              cardClassName={`${styles.monthlyCampCard} ${
                                selectedIndex === index
                                  ? styles.selectedCard
                                  : ""
                              }`}
                              imageClassName={styles.monthlyCampImage}
                              infoClassName={styles.monthlyCampInfo}
                              titleClassName={styles.monthlyCampTitle}
                              buttonClassName={styles.monthlyCampBtn}
                              descriptionClassName={styles.monthlyCampDesc}
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {isExpanded && (
                  <>
                    <div className={styles.navigationBtn}>
                      <button
                        ref={preRef}
                        className={`${styles.navBtn} ${
                          isBeginning ? styles.disabled : ""
                        }`}
                        disabled={isBeginning}
                      >
                        <FaArrowLeft />
                      </button>
                      <button
                        ref={nextRef}
                        className={`${styles.navBtn} ${
                          isEnd ? styles.disabled : ""
                        }`}
                        disabled={isEnd}
                      >
                        <FaArrowRight />
                      </button>
                    </div>
                    <button className={styles.closeBtn} onClick={handleClose}>
                      Close
                    </button>
                  </>
                )}
              </div>
              <div className={styles.homeless}>
                {isTemple ? (
                  <h3>Temple Contruction</h3>
                ) : (
                  <h3>HomeLess People in India</h3>
                )}
                <div>
                  Read more <FaArrowRight />{" "}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.swiperWrapper}>
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={{
                    prevEl: preRef.current,
                    nextEl: nextRef.current,
                  }}
                  className={styles.swiper}
                  onInit={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                  onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                >
                  {temples.map((campaign, index) => (
                    <SwiperSlide key={index}>
                      <MonthlyCampaignCard
                        campaigns={campaign}
                        cardClassName={styles.monthlyCampCard}
                        imageClassName={styles.monthlyCampImage}
                        infoClassName={styles.monthlyCampInfo}
                        titleClassName={styles.monthlyCampTitle}
                        buttonClassName={styles.monthlyCampBtn}
                        descriptionClassName={styles.monthlyCampDesc}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}
        </div>
      )}

      {!isTemple && (
        <div className={styles.campaignSlideContainer}>
          {!isSmScreen ? (
            <>
              <div className={styles.bigSlide}>
                <div className={styles.swiperWrapper}>
                  <Swiper
                    modules={[Navigation]}
                    slidesPerView={isExpanded ? 1 : 3}
                    spaceBetween={isExpanded ? 30 : 0}
                    navigation={
                      isExpanded
                        ? { prevEl: preRef.current, nextEl: nextRef.current }
                        : false
                    }
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onInit={(swiper) => {
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                    }}
                    // initialSlide={isExpanded ? selectedIndex : 0}
                    className={styles.swiper}
                  >
                    {campaigns.map((campaign, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className={`${styles.campaignContainer} ${
                            isExpanded ? styles.expanded : ""
                          }`}
                        >
                          {!isExpanded ? (
                            <img
                              src={campaign.image}
                              alt="Campaign"
                              className={styles.thumbnail}
                              onClick={() => handleImageClick(index)}
                            />
                          ) : (
                            <MonthlyCampaignCard
                              campaigns={campaign}
                              cardClassName={`${styles.monthlyCampCard} ${
                                selectedIndex === index
                                  ? styles.selectedCard
                                  : ""
                              }`}
                              imageClassName={styles.monthlyCampImage}
                              infoClassName={styles.monthlyCampInfo}
                              titleClassName={styles.monthlyCampTitle}
                              buttonClassName={styles.monthlyCampBtn}
                              descriptionClassName={styles.monthlyCampDesc}
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {isExpanded && (
                  <>
                    <div className={styles.navigationBtn}>
                      <button
                        ref={preRef}
                        className={`${styles.navBtn} ${
                          isBeginning ? styles.disabled : ""
                        }`}
                        disabled={isBeginning}
                      >
                        <FaArrowLeft />
                      </button>
                      <button
                        ref={nextRef}
                        className={`${styles.navBtn} ${
                          isEnd ? styles.disabled : ""
                        }`}
                        disabled={isEnd}
                      >
                        <FaArrowRight />
                      </button>
                    </div>
                    <button className={styles.closeBtn} onClick={handleClose}>
                      Close
                    </button>
                  </>
                )}
              </div>
              <div className={styles.homeless}>
                {isTemple ? (
                  <h3>Temple Contruction</h3>
                ) : (
                  <h3>HomeLess People in India</h3>
                )}
                <div>
                  Read more <FaArrowRight />{" "}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.swiperWrapper}>
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={{
                    prevEl: preRef.current,
                    nextEl: nextRef.current,
                  }}
                  className={styles.swiper}
                  onInit={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                  onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                >
                  {campaigns.map((campaign, index) => (
                    <SwiperSlide key={index}>
                      <MonthlyCampaignCard
                        campaigns={campaign}
                        cardClassName={styles.monthlyCampCard}
                        imageClassName={styles.monthlyCampImage}
                        infoClassName={styles.monthlyCampInfo}
                        titleClassName={styles.monthlyCampTitle}
                        buttonClassName={styles.monthlyCampBtn}
                        descriptionClassName={styles.monthlyCampDesc}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}
        </div>
      )}
      <div className={styles.helpContainer}>
        {helps.map((help, index) => (
          <div className={styles.help} key={index}>
            <h3>{help.help}</h3>
            <p>{help.helpinfo}</p>
          </div>
        ))}
      </div>
      <div className={styles.banner}>
        <h3>Join Veda Sankalpa’s Monthly Mission Against Animal Cruelty</h3>
        <p>
          With over 2000 donors subscribed to our Monthly Giving Mission, we
          have been able to provide:
        </p>
        <div>
          <button
            className={`${activeStoryBtn == "story" ? styles.activeBtn : ""}`}
            onClick={() => setActiveStoryBtn("story")}
          >
            Save a stray
          </button>
          <button
            className={`${activeStoryBtn == "word" ? styles.activeBtn : ""}`}
            onClick={() => setActiveStoryBtn("word")}
          >
            Spread the word
          </button>
        </div>
      </div>
      <SlidesCampaignList campaigns={campaigns} />
      <MissionBanner />
      <div className={styles.ContributeContainer}>
        <h3>How Your Contribute Makes a Different</h3>
        <div className={styles.contributionList}>
          <div className={styles.contributionCard}>
            <img src="/slidesImages/watchGlass.png" alt="" />
            <h4>Convenience</h4>
            <p>
              Your donation is auto-debited monthly, making an impact
              effortlessly.
            </p>
          </div>
          <div className={styles.contributionCard}>
            <img src="/slidesImages/key.png" alt="" />
            <h4>Convenience</h4>
            <p>
              Your donation is auto-debited monthly, making an impact
              effortlessly.
            </p>
          </div>
          <div className={styles.contributionList}>
            <div className={styles.contributionCard}>
              <img src="/slidesImages/moneyBag.png" alt="" />
              <h4>Convenience</h4>
              <p>
                Your donation is auto-debited monthly, making an impact
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.campaignUpdates}>
        <div className={styles.head}>Updates for this Campaign</div>
        <CampaignUpdates />
      </div>
      <div className={styles.donorList}>
        <DonorsList
          donorList={donorList}
          selectedDonorOption={selectedDonorOption}
          setSelectedDonorOption={setSelectedDonorOption}
          headClassName={styles.donorHead}
        />
      </div>
    </>
  );
};

export default MonthlyCampaignsComponent;
