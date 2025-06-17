import React, { useState } from "react";
import styles from "./style.module.scss";
import SavedAddress from "../savedAddress";

const ProfileSavedAddressComponent = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Developer User",
      addressType: "home",
      streetAddress: "H no. 224, SP Road",
      locality: "Begumpet, Hyderabad",
      state: "Telangana",
      country: "India",
      pincode: 500016,
    },
    {
      id: 2,
      name: "Developer User",
      addressType: "office",
      streetAddress: "H no. 224, SP Road",
      locality: "Begumpet, Hyderabad",
      state: "Telangana",
      country: "India",
      pincode: 500016,
    },
  ]);
  const editAddress = (address) => {
    console.log(address);
  };

  const deleteAddress = (address) => {
    console.log(address);
  };
  return (
    <div className={styles.saved_address_container}>
      {addresses.map((address, index) => (
        <SavedAddress
          key={index}
          address={address}
          addressDetail={styles.addressDetail}
          addressClassName={styles.address}
          editDeleteButtons={styles.editDeleteButtons}
          savedAddress={styles.savedAddress}
          addressHeader={styles.addressHeader}
          lastChild={`${
            index === addresses.length - 1 ? styles.lastChild : ""
          }`}
          onEdit={editAddress}
          onDelete={deleteAddress}
        />
      ))}
    </div>
  );
};

export default ProfileSavedAddressComponent;
