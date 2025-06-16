"use client";
import React, { useState, useEffect } from "react";
import styles from "./campaignList.module.scss";
import FixedCarousel from "../shared/carousel/fixedCarousel";
import ApiService from "@/services/ApiService";
import Dropdown from "../shared/dropdown";
import { useRouter } from "next/navigation";
import CampaignList from "../campaignListing";

const charities = [
  {
    id: 1,
    name: "Animal Welfare",
    description: "Description for Charity A in Bangalore",
  },
  {
    id: 2,
    name: "Orphan Home",
    description: "Description for Charity B in Marathahalli",
  },
  {
    id: 3,
    name: "Dog Care",
    description: "Description for Charity C in Koramangala",
  },
  {
    id: 4,
    name: "Food NGO",
    description: "Description for Charity D in Hebbal",
  },
  {
    id: 5,
    name: "Animal Care",
    description: "Description for Charity E in Electronic City",
  },
  {
    id: 6,
    name: "Pet Safety",
    description: "Description for Charity F in Whitefield",
  },
];

const cities = [
  "Koramangala",
  "Indiranagar",
  "Whitefield",
  "Jayanagar",
  "MG Road",
  "Hebbal",
  "Yelahanka",
  "Marathahalli",
  "Electronic City",
  "JP Nagar",
];

const categories = [
  "Emergency Medical Care",
  "Food & Water Aid",
  "Refugee Support",
  "Disaster Recovery",
  "Pet Rescue & Adoption",
  "Homelessness Support",
  "Medical Research & Funding",
  "Religious Community Support",
];

const SearchInput = ({ searchQuery, setSearchQuery }) => (
  <input
    type="text"
    placeholder="Search charities..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className={styles.searchInput}
  />
);

const CityDropdown = ({ selectedCity, setSelectedCity }) => (
  <div className={styles.dropdownContainer}>
    <label htmlFor="cityDropdown" className={styles.dropdownLabel}>
      Select a city:
    </label>
    <select
      id="cityDropdown"
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.target.value)}
      className={styles.dropdown}
    >
      <option value="" disabled>
        Select a city
      </option>
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
    {selectedCity && (
      <p className={styles.selectedCity}>You selected: {selectedCity}</p>
    )}
  </div>
);

const CategoryDropdown = ({ selectedCategory, setSelectedCategory }) => (
  <div className={styles.dropdownContainer}>
    <label htmlFor="cityDropdown" className={styles.dropdownLabel}>
      select category:
    </label>
    <select
      id="categoryDropdwon"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className={styles.dropdown}
    >
      <option value="">
        default
      </option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

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
    {campaign.imageSrc && (
      <img src={campaign.imageSrc} alt={campaign.title} />
    )}
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterCampaign, setFilterCampaign] = useState([]);
  const router = useRouter();
  const filteredCharities = charities.filter((charity) =>
    charity.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const CharityCard = ({ charity, index }) => (
    <div key={charity.id} className={styles.customCard} onClick={() => router.push(`/campaignDetail/${charity.code}`)}>
      <img
        src={charity.imageSrc}
        alt={charity.title}
        className={styles.cardImg}
      />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{charity.title}</h5>
        <h6 className={styles.cardSubtitle}>
          {charity.description}50,000+ Strays In Vadodara Have Found A New Life
          Thanks To Pratibha, Support Her Mission{" "}
        </h6>
        <p className={styles.cardText}>{charity.description}</p>
        <p className={styles.cardText}>{charity.createdBy}</p>
        <div className={styles.btns}>
          <a href="#donate" className={`${styles.btn} ${styles.btnInfo}`}>
            Share
          </a>
          <a href="#donate" className={`${styles.btn} ${styles.btnWarning}`}>
            Donate
          </a>
        </div>
      </div>
    </div>
  );

  // const [campaignList, setCampaignList] = useState([]);
  // const apiService = new ApiService();

  // const fetchCampaignList = async () => {
  //   try {
  //     const response = await apiService.get("/campaign/active");
  //     setCampaignList(response.data);
  //   } catch (error) {
  //     console.error("Failed to fetch data", error);
  //   }
  // };

  // const fetchFilteredCampaign = async (category) => {
  //   try {
  //     setCampaignList([]);
  //     const response = await apiService.get(`/campaign/filter/category?category=${category}`);
  //     setFilterCampaign(response.data);
  //   } catch (error) {
  //     console.error("Failed to fetch data", error);
  //   }
  // };


  // useEffect(() => {
  //   fetchCampaignList();
  // }, []);

  // useEffect(() => {
  //   if (selectedCategory) {
  //     fetchFilteredCampaign(selectedCategory);
  //   } else {
  //     setFilterCampaign([]);
  //     fetchCampaignList();
  //   }
  // }, [selectedCategory])

  return (
    <div className={styles.wrapper}>
      <h1>Campaigns List</h1>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className={styles.filter_section}>
        <>
          <Dropdown
            label="City"
            options={cities}
            selectedValue={selectedCity}
            setSelectedValue={setSelectedCity}
            dropdownContainerStyle={styles.dropdownContainer}
            dropdownStyle={styles.dropdown}
            dropdownLabelStyle={styles.dropdownLabel}
          />
          <Dropdown
            label="Category"
            options={categories}
            selectedValue={selectedCategory}
            setSelectedValue={setSelectedCategory}
            dropdownContainerStyle={styles.dropdownContainer}
            dropdownStyle={styles.dropdown}
            dropdownLabelStyle={styles.dropdownLabel}
          />
        </>
      </div>

      {/* <FixedCarousel /> */}
      {/* <div className={styles.customRow}>
        {filterCampaign.length > 0
          ? filterCampaign.map((charity, index) => (
            <CharityCard key={charity.id} charity={charity} index={index} />
          ))
          : campaignList.map((charity, index) => (
            <CharityCard key={charity.id} charity={charity} index={index} />
          ))}
      </div> */}
      <CampaignList selectedCategory={selectedCategory} />

    </div >
  );
};

export default CampaignsList;
/* 
"use client";
import React, { useState, useEffect } from "react";
import styles from "./campaignList.module.scss";
import FixedCarousel from "../shared/carousel/fixedCarousel";
import ApiService from "@/services/ApiService";

const CampaignsList = () => {
  const CharityCard = ({ charity, index }) => (
    <div key={charity.id} className={styles.customCard}>
      <img
        src={charity.imageSrc}
        alt={charity.title}
        className={styles.cardImg}
      />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{charity.name}</h5>
        <h6 className={styles.cardSubtitle}>{charity.title}</h6>
        <p className={styles.cardText}>{charity.description}</p>
        <div className={styles.btns}>
          <a href="#donate" className={`${styles.btn} ${styles.btnInfo}`}>
            Share
          </a>
          <a href="#donate" className={`${styles.btn} ${styles.btnWarning}`}>
            Donate
          </a>
        </div>
      </div>
    </div>
  );

  const [campaignList, setCampaignList] = useState([]);
  const apiService = new ApiService();

  const fetchCampaignList = async () => {
    try {
      const response = await apiService.get("/campaign/active");
      setCampaignList(response.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchCampaignList();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <h1>Campaigns List</h1>

        <FixedCarousel />
        <div className={styles.customRow}>
          {campaignList.map((charity, index) => (
            <CharityCard key={charity.id} charity={charity} index={index} />
          ))}
        </div>
      </div>
      <>
        {campaignList.map((card) => (
          <div key={card.id} className={styles.card}>
            <h3>{card.title}</h3>
            <p>End Date: {new Date(card.endDate).toLocaleDateString()}</p>
            <p>Required Amount: {card.requiredAmount}</p>
            <p>Procured Amount: {card.procuredAmount}</p>
            <p>Donors Count: {card.donorsCount}</p>
            {card.imageSrc && <img src={card.imageSrc} alt={card.title} />}
          </div>
        ))}
      </>
    </>
  );
};

export default CampaignsList;
 */
