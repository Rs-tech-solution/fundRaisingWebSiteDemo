"use client";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import FixedCarousel from "../shared/carousel/fixedCarousel";

import styles from "./campaign.module.scss";
export const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const charities = [
    {
      id: 1,
      name: "Animal Welfare",
      subtitle: "Bangalore",
      description: "Description for Charity A in Bangalore",
    },
    {
      id: 2,
      name: "Orphan Home",
      subtitle: "Koramangala",
      description: "Description for Charity B in Koramangala",
    },
    {
      id: 3,
      name: "Dog Care",
      subtitle: "Indiranagar",
      description: "Description for Charity C in Indiranagar",
    },
    {
      id: 4,
      name: "Food NGO",
      subtitle: "Hebbal",
      description: "Description for Charity D in Hebbal",
    },
    {
      id: 5,
      name: "Animal Care",
      subtitle: "Electronic City",
      description: "Description for Charity E in Electronic City",
    },
    {
      id: 6,
      name: "Pet Safety",
      subtitle: "Indiranagar",
      description: "Description for Charity F in Whitefield",
    },
  ];

  const filteredCharities = charities.filter(
    (charity) =>
      charity.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCity === "" ||
        charity.subtitle.toLowerCase() === selectedCity.toLowerCase())
  );

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

  return (
    <>
      <Row md={12}>
        <Col md={8}>
          <div>
            <input
              type="text"
              placeholder="Search charities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </Col>
        <Col md={4}>
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
              <p className={styles.selectedCity}>
                You selected: {selectedCity}
              </p>
            )}
          </div>
        </Col>
      </Row>

      <FixedCarousel />
      <div className={styles.customRow}>
        {filteredCharities.map((charity, index) => (
          <div key={charity.id} className={styles.customCard}>
            <img
              src={
                index % 2 === 0
                  ? "about-img-2.jpg"
                  : "blog_train-volunteers-for-a-better-nonprofit-event.jpg"
              }
              alt="Card image cap"
              className={styles.cardImg}
            />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{charity.name}</h5>
              <h6 className={styles.cardSubtitle}>{charity.subtitle}</h6>
              <p className={styles.cardText}>{charity.description}</p>
              <div className={styles.btns}>
                <a href="#donate" className={`${styles.btn} ${styles.btnInfo}`}>
                  Share
                </a>
                <a
                  href="#donate"
                  className={`${styles.btn} ${styles.btnWarning}`}
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Campaigns;
