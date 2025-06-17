import React, { useState } from "react";
import styles from "./styles.module.scss";
import ProfilePersonalDetailComponent from "../profilePersonalDetail";
import ProfileFamilyDetailComponent from "../profileFamilyDetail";
import OrderTransactionsComponent from "../orderTransactionsComponent";
import ProfileSavedAddressComponent from "../profileSavedAddress";
import EarnPointsComponent from "../EarnPointsComponent";
import { useResponsive } from "@/context/useResponsive";
import Accordion from "../shared/accordian";
import FeatureCard from "../feature";
import { FaInfoCircle } from "react-icons/fa";

const tabs = [
  {
    id: 1,
    tab: "Personal Details",
  },
  {
    id: 2,
    tab: "Family Details",
  },
  {
    id: 3,
    tab: "Order Transactions",
  },
  {
    id: 4,
    tab: "Saved Address",
  },
  // {
  //   id: 5,
  //   tab: "Earn Points",
  // },
];

const mobileTabs = [
  {
    id: 1,
    title: "Personal Details",
    desc: "Update your photo & personal info here",
    component: <ProfilePersonalDetailComponent />,
  },
  {
    id: 2,
    title: "Family Details",
    desc: "Update your family details here",
    component: <ProfileFamilyDetailComponent />,
  },
  {
    id: 3,
    title: "Order Transactions",
    desc: "View your order transactions here",
    component: <OrderTransactionsComponent />,
  },
  {
    id: 4,
    title: "Saved Address",
    desc: "Update your saved address here",
    component: <ProfileSavedAddressComponent />,
  },
  // {
  //   id: 5,
  //   title: "Earn Points",
  //   desc: "Earn points by completing tasks",
  //   component: <EarnPointsComponent />,
  // },
];

const ProfileComponent = ({ id }) => {
  const [activeTab, setActiveTab] = useState(1);
  const { isSmScreen } = useResponsive();
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.wrapper}>
      <img src="/images/up.png" alt="" className={styles.decorationLeftImg} />
      <img src="/images/up.png" alt="" className={styles.decorationRightImg} />

      <div className={styles.container}>
        <div className={styles.profile_left_section}>
          <div className={styles.profile_card}>
            <div className={styles.profile_card_header}>
              <img
                src="/slidesImages/profile.png"
                alt="User"
                className={styles.profile_card_avatar}
              />
              <span className={styles.profile_card_badge}>Silver</span>
            </div>
            <div className={styles.profile_card_info}>
              <h3 className={styles.profile_card_name}>Developer User</h3>
              <p className={styles.profile_card_location}>Hyderabad, India</p>
            </div>
            <div className={styles.profile_card_footer}>
              <span className={styles.profile_card_coins}>
                <img src="/slidesImages/coinsbg.png" alt="coin" />
                100 Coins{" "}
                <FaInfoCircle
                  size={18}
                  style={{ cursor: "pointer", marginLeft: "5px" }}
                  onClick={() => setVisible(true)}
                />
                {visible && (
                  <div className={styles.infoPopup}>
                    <div className={styles.infoHeader}>
                      <button
                        className={styles.closeButton}
                        onClick={() => setVisible(false)}
                      >
                        ×
                      </button>
                    </div>
                    <div className={styles.text}>
                      data something about textdata something about text data
                      something about text data something about text data
                      something about text
                    </div>
                  </div>
                )}
              </span>
            </div>
          </div>
          <div className={styles.profile_footer}>
            <h4>Quick Links</h4>
            <ul className={styles.quick_links}>
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${activeTab === tab.id ? styles.activeTab : ""}`}
                >
                  {tab.tab}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {!isSmScreen && (
          <div className={styles.profile_right_section}>
            {activeTab === 1 ? (
              <ProfilePersonalDetailComponent />
            ) : activeTab === 2 ? (
              <ProfileFamilyDetailComponent />
            ) : activeTab === 3 ? (
              <OrderTransactionsComponent />
            ) : activeTab === 4 ? (
              <ProfileSavedAddressComponent />
            ) : (
              // <EarnPointsComponent />
              ""
            )}
          </div>
        )}
        {isSmScreen && (
          <>
            {/* <FeatureCard /> */}
            <div className={styles.earnSection}>
              <EarnPointsComponent />
            </div>
            <Accordion items={mobileTabs} />
            <div className={styles.account_settings}>
              <div className={styles.account_setting}>
                <h4>Account Settings</h4>
              </div>
            </div>
            <div className={styles.logout}>
              <h4>Logout</h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
