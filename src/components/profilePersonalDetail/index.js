import React, { useState } from "react";
import styles from "./styles.module.scss";
import FeatureCard from "../feature";
import { useResponsive } from "@/context/useResponsive";
import EarnPointsComponent from "../EarnPointsComponent";

const ProfilePersonalDetailComponent = () => {
  const { isSmScreen } = useResponsive();

  const nationalities = ["Indian", "NRI", "Other"];
  const [nationality, setNationality] = useState("");
  const [editMode, setEditMode] = useState(isSmScreen ? true : false);
  return (
    <div>
      {/* {!isSmScreen && <FeatureCard />} */}
      {!isSmScreen && (
        <>
          <div className={styles.earnSection}>
            <EarnPointsComponent />
          </div>
        </>
      )}
      <div className={styles.profile_container}>
        <div className={styles.profile_section}>
          <div className={styles.profile_header}>
            <div>
              <h2>Personal Details</h2>
              <p>Update your photo & personal info here</p>
            </div>
            {/* <button
              className={styles.edit_button}
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "Cancel" : "Edit ✎"}
            </button> */}
          </div>
          <div className={styles.profile_body}>
            <div className={styles.profile_picture_section}>
              <img
                src="/slidesImages/profile.png"
                alt="profile"
                className={styles.profile_picture}
              />
              <div className={styles.buttons_section}>
                <button className={styles.change_btn}>Change Picture</button>
                <button className={styles.delete_btn}>Delete Picture</button>
              </div>
            </div>
            <div className={styles.form_grid}>
              <input
                className={styles.form_input}
                placeholder="Name*"
                disabled={!editMode}
              />
              <input
                className={styles.form_input}
                placeholder="Phone Number*"
                disabled={!editMode}
              />
              <input
                className={styles.form_input}
                placeholder="Email"
                disabled={!editMode}
              />
              <select
                className={styles.form_input}
                disabled={!editMode}
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option value={"Nationality"} disabled>
                  Nationality
                </option>
                {nationalities.map((national, index) => (
                  <option key={index} value={national}>
                    {national}
                  </option>
                ))}
              </select>
              <input
                className={styles.form_input}
                placeholder="Billing Address*"
                disabled={!editMode}
              />
              <input
                className={styles.form_input}
                placeholder="Pincode*"
                disabled={!editMode}
              />
            </div>
            <div className={styles.checkbox_wrapper}>
              <input
                type="checkbox"
                id="whatsappUpdates"
                defaultChecked
                disabled={!editMode}
              />
              <label htmlFor="whatsappUpdates">
                Receive updates on WhatsApp/SMS
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.family_section}>
        <div className={styles.family_header}>
          <h2>Family Details</h2>
          <p>Add your family members info details</p>
        </div>
        <button className={styles.add_member_btn}>+ Add Member</button>
      </div>
    </div>
  );
};

export default ProfilePersonalDetailComponent;
