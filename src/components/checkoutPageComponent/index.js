import React, { useEffect } from "react";
import styles from "./checkoutpage.module.scss";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ApiService from "@/services/ApiService";
import { useResponsive } from "@/context/useResponsive";
import CheckoutProduct from "../checkoutProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import UserPersonalInfo from "../userPersonalInfo";
import UserAddressDetail from "../userAddressDetail";
import FamilyDetail from "../familyDetail";
import SavedAddress from "../savedAddress";
import PriceTags from "../shared/priceTags";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../shared/productCard";
import { addToCart, clearCart, removeFromCart } from "@/store/slices/cartSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const apiService = new ApiService();

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const products = [
  {
    id: 1,
    name: "Warm Blanket for a set of two",
    price: 650,
    unit: "per unit",
    image:
      "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
    obtained: 11,
    available_quantity: 20,
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
    available_quantity: 20,
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
    available_quantity: 20,
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
    available_quantity: 20,
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
    available_quantity: 20,
    total: 2000,
    priority: 10,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const CheckoutPageComponent = () => {
  const [orderId, setOrderId] = useState(null);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("nationality");
  const [pincode, setPincode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("country");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("state");
  const [addressType, setAddressType] = useState("");
  const [tipValue, setTipValue] = useState(0);
  const [tip, setTip] = useState(0);
  const [donateAnonymously, setDonateAnonymously] = useState(false);
  const [whatsAppUpdate, setWhatsAppUpdate] = useState(false);
  const [activeSection, setActiveSection] = useState("userDetail");
  const [step, setStep] = useState(1);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [grandTotal, setGrandTotal] = useState(0);
  const totalAmount = (Number(grandTotal) + Number(tip)).toFixed(2);
  const tipPercentages = [0, 5, 10, 15, 20];
  const nationalities = ["Indian", "NRI", "Other"];
  const states = ["Uttar Pradesh", "Delhi", "Telangana"];
  const countries = ["Indian", "America", "Franch"];
  const [familyName, setFamilyName] = useState("");
  const [gotram, setGotram] = useState("");
  const [relation, setRelation] = useState("relation");
  const [rashi, setRashi] = useState("rashi");
  const [nakshatram, setNakshataram] = useState("nakshatram");
  const [addtionalDetail, setAdditionalDetail] = useState("");
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const relations = ["wife", "father", "mother", "brother"];
  const rashies = ["makar", "kumbh", "mesh"];
  const nakshatrams = ["nakshtram1", "nakshtram1", "nakshtram1"];
  const [showDob, setShowDob] = useState(false);
  const [activeBtn, setActiveBtn] = useState("save");
  const [dakshinaAmount, setDakshinaAmount] = useState();
  const [activeTabPrice, setActiveTabPrice] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [loading, setLoading] = useState(false);
  const [isPooja, setIsPooja] = useState(false);

  const router = useRouter();

  const [addresses, setAddresses] = useState([
    // {
    //   id: 1,
    //   name: "sonu chahar",
    //   addressType: "home",
    //   streetAddress: "H no. 224, SP Road",
    //   locality: "Begumpet, Hyderabad",
    //   state: "Telangana",
    //   country: "India",
    //   pincode: 500016,
    // },
    // {
    //   id: 2,
    //   name: "sonu chahar",
    //   addressType: "office",
    //   streetAddress: "H no. 224, SP Road",
    //   locality: "Begumpet, Hyderabad",
    //   state: "Telangana",
    //   country: "India",
    //   pincode: 500016,
    // },
  ]);

  const { isSmScreen } = useResponsive();
  const dispatch = useDispatch();

  const { cart, donationAmount, campaignDetails, totalPrice } = useSelector(
    (state) => state.cart
  );

  const cartItems = useSelector((state) => state.cart.cart);

  const cartProductIds = cart.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    amount: item.totalPrice,
  }));

  const handleTip = (tipPercentages) => {
    setTipValue(tipPercentages);
    setTip((grandTotal * tipPercentages) / 100);
  };

  const handleNationality = (value) => {
    setNationality(value);
  };

  const nextStep = () => {
    setActiveSection("familyDetail");
    setStep(2);
    const addressDetail = {
      id: Date.now(),
      name,
      streetAddress,
      locality,
      state,
      country,
      addressType,
      pincode,
    };
    const userDetail = {
      name,
      email,
      number,
      nationality,
    };
    setAddresses((prevAddresses) => [...prevAddresses, addressDetail]);
  };

  const saveAddress = () => {
    const addressDetail = {
      id: Date.now(),
      name,
      streetAddress,
      locality,
      state,
      country,
      addressType,
      pincode,
    };
    setAddresses((prevAddresses) => [...prevAddresses, addressDetail]);
  };

  const editAddress = (address) => {
    console.log(address);
  };

  const deleteAddress = (address) => {
    console.log(address);
  };

  const handlePriceTagClick = (amount) => {
    setDakshinaAmount(amount);
  };

  const createTransaction = async () => {
    const res = await apiService.post("/payment/placeOrder/", {
      amount: Math.round(grandTotal + tip),
      currency: "INR",
    });
    if (res.data?.id) {
      setOrderId(res.data.id);
    } else {
      return;
    }
    // const data = await res.json();
  };

  const handleVerification = () => {
    const fields = [
      { value: email, message: "Please enter your email.", id: "email" },
      {
        value: number,
        message: "Please enter your mobile number.",
        id: "number",
      },
      {
        value: name,
        message: "Please enter your name.",
        id: "name",
      },
      {
        value: streetAddress,
        message: "Please enter your stree address",
        id: "street",
      },
      {
        value: pincode,
        message: "Please enter your pincode.",
        id: "pincode",
      },
      {
        value: state,
        message: "Please enter your state.",
        id: "state",
      },
    ];

    const emptyField = fields.find((field) => !field.value);

    if (emptyField) {
      alert(emptyField.message);
      document.getElementById(emptyField.id).focus();
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      document.getElementById("email")?.focus();
      return;
    }
    // isOrder ? createTransaction() : nextStep();
    nextStep();
  };

  const handleAddressVerification = () => {
    const fields = [
      {
        value: name,
        message: "Please enter your name.",
        id: "name",
      },
      {
        value: streetAddress,
        message: "Please enter your stree address",
        id: "street",
      },
      {
        value: pincode,
        message: "Please enter your pincode.",
        id: "pincode",
      },
      {
        value: state,
        message: "Please enter your state.",
        id: "state",
      },
    ];

    const emptyField = fields.find((field) => !field.value);

    if (emptyField) {
      alert(emptyField.message);
      document.getElementById(emptyField.id).focus();
      return;
    }

    saveAddress();
  };

  const handleAddProduct = (product) => {
    console.log(product);
    // dispatch(
    //   addToCart({
    //     ...product,
    //     campaignCode: campaignDetails.code,
    //     campaignTitle: campaignDetails.campaignTitle,
    //     campaignImage: campaignDetails.campaignImage,
    //   })
    // );
  };

  const handleRemoveProduct = (product) => {
    console.log(product);
    // dispatch(removeFromCart(product));
  };

  useEffect(() => {
    setGrandTotal(Number(totalPrice) + Number(tip) + Number(donationAmount));
  }, [totalPrice, tip, donationAmount]);

  if (orderId) {
    const options = {
      key: "rzp_test_1b9JtyEHtm8Dqe", // Replace with your Razorpay Key ID
      amount: grandTotal * 100, // Amount in paise
      currency: currency,
      name: name,
      description: "Payment for Order",
      order_id: orderId,
      handler: async function (response) {
        setOrderId(null);
        try {
          setLoading(true);
          const successRes = await apiService.post("/orders/createOrder", {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            campaignId: campaignDetails.campaignCode,
            transactionId: response.razorpay_payment_id,
            orderid: response.razorpay_order_id,
            amount: grandTotal,
            tipAmount: tip,
            userId: 1,
            anonymous: donateAnonymously,
            products: cartProductIds,
          });
          setOrderId(null);
          if (successRes.status === 200 && successRes.data) {
            dispatch(clearCart());
            router.push("/thankYouPage");
            setLoading(false);
          }
        } catch (error) {
          console.error("Order success handler failed:", error);
        } finally {
          setLoading(false);
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: number,
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: function () {
          setOrderId(null);
          alert("Payment Cancelled");
          const backdrop = document.querySelector("body > .razorpay-backdrop");
          if (backdrop) backdrop.remove();
          document.body.style.overflow = "auto";
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  // {
  //   loading && (
  //     <div className={styles.loading}>
  //       <h3>...loading</h3>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.wrapper}>
      <img src="/images/up.png" alt="" className={styles.upImg} />

      {!isSmScreen && (
        <div className={styles.formChangeSection}>
          <div
            className={`${styles.changeSection} ${styles.activeSection}`}
            onClick={() => {
              setStep(1);
              setActiveSection("userDetail");
            }}
          >
            <div className={styles.countSection}>
              <span>1</span>
            </div>{" "}
            <div className={styles.userDetail}>User Details & Address</div>
          </div>
          {isPooja && (
            <>
              <div className={styles.arrow}>{">"}</div>
              <div
                className={`${styles.changeSection} ${
                  activeSection == "familyDetail" ? styles.activeSection : ""
                }`}
                onClick={() => {
                  setStep(2);
                  setActiveSection("familyDetail");
                }}
              >
                <div className={styles.countSection}>
                  <span>2</span>
                </div>{" "}
                <div className={styles.userDetail}>Family Details</div>
              </div>
            </>
          )}
        </div>
      )}

      <div className={styles.checkout_container}>
        <div className={styles.checkout_left}>
          <div className={styles.tip_section}>
            <label>Give Tip</label>
            <p className={styles.tip_info}>
              The amount collected through tips will go to Veda Sankalpa, for
              platform maintenance and operational expenses.
            </p>
            <div className={styles.tip_select}>
              <select
                value={tipValue}
                onChange={(e) => handleTip(Number(e.target.value))}
              >
                {tipPercentages.map((percent, index) => (
                  <option key={index} value={percent}>
                    {percent} %
                  </option>
                ))}
              </select>
              <div>
                <span>₹ {tip}</span>
              </div>
            </div>
          </div>

          {isSmScreen && (
            <div className={styles.productListContainer}>
              <h3>Add Once</h3>
              <div className={styles.carouselContainer}>
                <Swiper
                  modules={isSmScreen ? [Navigation, Pagination] : [Navigation]}
                  pagination={isSmScreen ? { clickable: true } : false}
                  slidesPerView={2}
                  spaceBetween={20}
                  className={styles.swiper}
                  breakpoints={{
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2.2 },
                    1200: { slidesPerView: 2.2 },
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
                      <CheckoutProduct
                        product={item}
                        onAdd={handleAddProduct}
                        onRemove={handleRemoveProduct}
                        // isSelected={getProductQuantity(item.id) > 0}
                        // quantity={getProductQuantity(item.id)}
                        productClassName={styles.product}
                        imgClassname={styles.img}
                        titelClassname={styles.title}
                        descClassname={styles.description}
                        addContainerClassnName={styles.addBtnContainer}
                        addBtnClassname={styles.addBtn}
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

          {isPooja && (
            <>
              <div className={styles.prasad}>
                <div className={styles.childdiv}>
                  <div className={styles.mainImg}>
                    <img src="/slidesImages/prasad.png" alt="" />
                  </div>
                  <div className={styles.detail}>
                    <h3>Do you have Prasad?</h3>
                    <h4>Add for Prasad</h4>
                    <div className={styles.buttonSection}>
                      <div>₹400</div>
                      <button>+ Add</button>
                    </div>
                  </div>
                </div>
                <div className={styles.childdiv}>
                  <div className={styles.mainImg}>
                    <img src="/slidesImages/family.png" alt="" />
                  </div>
                  <div className={styles.detail}>
                    <h3>Do you have Prasad?</h3>
                    <h4>Add for Prasad</h4>
                    <div className={styles.buttonSection}>
                      <div>₹400</div>
                      <button>+ Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {isSmScreen && (
            <div className={styles.formChangeSection}>
              <div
                className={`${styles.changeSection} ${styles.activeSection}`}
                onClick={() => {
                  setStep(1);
                  setActiveSection("userDetail");
                }}
              >
                <div className={styles.countSection}>
                  <span>1</span>
                </div>{" "}
                <div className={styles.userDetail}>User Details & Address</div>
              </div>
              {isPooja && (
                <>
                  <div className={styles.arrow}>{">"}</div>
                  <div
                    className={`${styles.changeSection} ${
                      activeSection == "familyDetail"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => {
                      setStep(2);
                      setActiveSection("familyDetail");
                    }}
                  >
                    <div className={styles.countSection}>
                      <span>2</span>
                    </div>{" "}
                    <div className={styles.userDetail}>Family Details</div>
                  </div>
                </>
              )}
            </div>
          )}

          <div className={`${styles.slideWrapper}`}>
            <div
              className={styles.slideContainer}
              style={{ transform: `translateX(-${(step - 1) * 50}%)` }}
            >
              <div
                className={`${styles.personal_info}`}
                style={{
                  height: activeSection !== "userDetail" ? "0" : "",
                }}
              >
                <UserPersonalInfo
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  number={number}
                  setNumber={setNumber}
                  nationalities={nationalities}
                  handleNationality={handleNationality}
                  nationality={nationality}
                  donateAnonymously={donateAnonymously}
                  setDonateAnonymously={setDonateAnonymously}
                  whatsAppUpdate={whatsAppUpdate}
                  setWhatsAppUpdate={setWhatsAppUpdate}
                  personal_info={styles.personal_info}
                  input_group={styles.input_group}
                  checkbox_group={styles.checkbox_group}
                  custom_checkbox={styles.custom_checkbox}
                  activeSelect={styles.activeSelect}
                />

                {addresses.length > 0 ? (
                  <>
                    {addresses.map((address, index) => (
                      <SavedAddress
                        key={index}
                        address={address}
                        addressDetail={styles.addressDetail}
                        addressClassName={styles.address}
                        editDeleteButtons={styles.editDeleteButtons}
                        savedAddress={styles.savedAddress}
                        addressHeader={styles.addressHeader}
                        isSelected={selectedAddress === address.id}
                        onSelect={() => setSelectedAddress(address.id)}
                        onEdit={editAddress}
                        onDelete={deleteAddress}
                      />
                    ))}
                    {showNewAddressForm && (
                      <UserAddressDetail
                        streetAddress={streetAddress}
                        setStreetAddress={setStreetAddress}
                        locality={locality}
                        setLocality={setLocality}
                        pincode={pincode}
                        setPincode={setPincode}
                        country={country}
                        setCountry={setCountry}
                        state={state}
                        setState={setState}
                        addressType={addressType}
                        setAddressType={setAddressType}
                        states={states}
                        countries={countries}
                        input_group={styles.input_group}
                        activeSelect={styles.activeSelect}
                        input={styles.input}
                      />
                    )}
                    {showNewAddressForm ? (
                      <div className={styles.addressSaveCancelButtons}>
                        <button
                          className={""}
                          onClick={() => handleAddressVerification()}
                        >
                          save
                        </button>
                        <button
                          className={""}
                          onClick={() => setShowNewAddressForm(false)}
                        >
                          cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        className={styles.addNewAddressBtn}
                        onClick={() => setShowNewAddressForm(true)}
                      >
                        Add New Address
                      </button>
                    )}
                  </>
                ) : (
                  <UserAddressDetail
                    streetAddress={streetAddress}
                    setStreetAddress={setStreetAddress}
                    locality={locality}
                    setLocality={setLocality}
                    pincode={pincode}
                    setPincode={setPincode}
                    country={country}
                    setCountry={setCountry}
                    state={state}
                    setState={setState}
                    addressType={addressType}
                    setAddressType={setAddressType}
                    states={states}
                    countries={countries}
                    input_group={styles.input_group}
                    activeSelect={styles.activeSelect}
                    input={styles.input}
                  />
                )}
              </div>
              <div
                className={styles.personal_info}
                style={{
                  height: activeSection !== "familyDetail" ? "0" : "",
                }}
              >
                <FamilyDetail
                  familyName={familyName}
                  setFamilyName={setFamilyName}
                  relation={relation}
                  setRelation={setRelation}
                  gotram={gotram}
                  setGotram={setGotram}
                  rashi={rashi}
                  setRashi={setRashi}
                  nakshatram={nakshatram}
                  setNakshataram={setNakshataram}
                  dob={dob}
                  setDob={setDob}
                  birthTime={birthTime}
                  setBirthTime={setBirthTime}
                  addtionalDetail={addtionalDetail}
                  setAdditionalDetail={setAdditionalDetail}
                  relations={relations}
                  rashies={rashies}
                  nakshatrams={nakshatrams}
                  showDob={showDob}
                  setShowDob={setShowDob}
                  input_group={styles.input_group}
                  activeSelect={styles.activeSelect}
                  input={styles.input}
                  birthDetail={styles.birthDetail}
                  hideDob={styles.hideDob}
                  buttonGroup={styles.buttonGroup}
                  nextStepbtn={styles.nextStepbtn}
                  activeBtn={activeBtn}
                  setActiveBtn={setActiveBtn}
                  activeBtnClassName={styles.activeBtn}
                  nextStep={nextStep}
                />
              </div>
            </div>
          </div>

          {isSmScreen && isPooja && (
            <div className={styles.optionalDakshana}>
              <h3>Optional Dakshina</h3>
              <p>
                Veda Sankalpa remains dedicated to upholding our customs while
                introducing more powerful sevas to enhance your spiritual
                experience. Your offerings of any sort, are embraced with open
                arms and will be utilised in protecting dharma.
              </p>
              <PriceTags
                priceArray={[100, 200, 300]}
                activeTabPrice={activeTabPrice}
                setActiveTabPrice={setActiveTabPrice}
                handlePriceTagClick={handlePriceTagClick}
                currency={currency}
                donationAmount={dakshinaAmount}
                setDonationAmount={setDakshinaAmount}
                paymentButtonClassName={styles.iDonateButton}
              />
            </div>
          )}

          {isSmScreen && (
            <div className={styles.smCheckout}>
              <div className={styles.summary_row}>
                <span>Donation Amount</span>
                <span>₹ {grandTotal}</span>
              </div>
              <div className={styles.summary_row}>
                <span>Give Tip - {tip} %</span>
                <span>₹ {tip}</span>
              </div>
              <div className={styles.summary_row + " " + styles.total}>
                <span>Grand Total</span>
                <span>₹ {totalAmount}</span>
              </div>
            </div>
          )}

          {!isSmScreen && isPooja && (
            <div className={styles.optionalDakshana}>
              <h3>Optional Dakshina</h3>
              <p>
                Veda Sankalpa remains dedicated to upholding our customs while
                introducing more powerful sevas to enhance your spiritual
                experience. Your offerings of any sort, are embraced with open
                arms and will be utilised in protecting dharma.
              </p>
              <PriceTags
                priceArray={[100, 200, 300]}
                activeTabPrice={activeTabPrice}
                setActiveTabPrice={setActiveTabPrice}
                handlePriceTagClick={handlePriceTagClick}
                currency={currency}
                donationAmount={dakshinaAmount}
                setDonationAmount={setDakshinaAmount}
                paymentButtonClassName={styles.iDonateButton}
              />
            </div>
          )}

          {isPooja && (
            <>
              {step > 1 ? (
                <button
                  className={styles.nextStepbtn}
                  onClick={() => {
                    createTransaction();
                  }}
                >
                  continue to pay
                </button>
              ) : (
                <button
                  className={styles.nextStepbtn}
                  onClick={() => handleVerification()}
                >
                  continue to next step
                </button>
              )}
            </>
          )}

          <button
            className={styles.nextStepbtn}
            onClick={() => {
              createTransaction();
            }}
          >
            continue to pay
          </button>
        </div>

        <div className={styles.checkout_right}>
          <h3 className={styles.orderHeading}>order summary</h3>
          <div className={styles.checkout_item}>
            <img
              src={campaignDetails.campaignImage}
              alt="Donation Item"
              className={styles.item_image}
            />
            <div>
              <h2 className={styles.item_title}>campaign Title</h2>
              <p>location: Mathura</p>
              <p className={styles.item_price}>₹ {grandTotal}</p>
            </div>
          </div>
          {!isSmScreen && (
            <>
              <div>
                <div className={styles.summary_row}>
                  <span>Donation Amount</span>
                  <span>₹ {grandTotal}</span>
                </div>
                <div className={styles.summary_row}>
                  <span>Give Tip - {tip} %</span>
                  <span>₹ {tip}</span>
                </div>
                <div className={styles.summary_row + " " + styles.total}>
                  <span>Grand Total</span>
                  <span>₹ {totalAmount}</span>
                </div>
              </div>
              <div className={styles.productListContainer}>
                <h3>Add Once</h3>
                <div className={styles.carouselContainer}>
                  <Swiper
                    modules={
                      isSmScreen ? [Navigation, Pagination] : [Navigation]
                    }
                    pagination={isSmScreen ? { clickable: true } : false}
                    slidesPerView={2.2}
                    spaceBetween={0}
                    className={styles.swiper}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      992: { slidesPerView: 2.2 },
                      1200: { slidesPerView: 2.2 },
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
                      <SwiperSlide
                        key={index}
                        className={styles.carousel_slide}
                      >
                        <CheckoutProduct
                          product={item}
                          onAdd={handleAddProduct}
                          onRemove={handleRemoveProduct}
                          // isSelected={getProductQuantity(item.id) > 0}
                          // quantity={getProductQuantity(item.id)}
                          productClassName={styles.product}
                          imgClassname={styles.img}
                          titelClassname={styles.title}
                          descClassname={styles.description}
                          addContainerClassnName={styles.addBtnContainer}
                          addBtnClassname={styles.addBtn}
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
            </>
          )}
        </div>
      </div>
      <img src="/images/down.png" alt="" className={styles.downImg} />
    </div>
  );
};

export default CheckoutPageComponent;
