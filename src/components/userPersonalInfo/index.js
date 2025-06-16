import React from "react";

const UserPersonalInfo = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  nationalities,
  handleNationality,
  nationality,
  donateAnonymously,
  setDonateAnonymously,
  whatsAppUpdate,
  setWhatsAppUpdate,
  //   personal_info,
  input_group,
  checkbox_group,
  custom_checkbox,
  activeSelect,
}) => {
  return (
    <>
      <h3>User Details</h3>
      <h5>Personal Details</h5>
      <div className={`${input_group}`}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Mobile No"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className={`${input_group}`}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          value={nationality}
          onChange={(e) => handleNationality(e.target.value)}
          className={`${nationality !== "nationality" ? activeSelect : ""}`}
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
      </div>
      <div className={`${checkbox_group}`}>
        <input
          type="checkbox"
          id="anyonymous"
          className={`${custom_checkbox}`}
          checked={donateAnonymously}
          onChange={() => setDonateAnonymously(!donateAnonymously)}
        />
        <label htmlFor="anyonymous"> Donate as Anonymous</label>
      </div>
      <div className={`${checkbox_group}`}>
        <input
          type="checkbox"
          id="terms"
          className={`${custom_checkbox}`}
          checked={whatsAppUpdate}
          onChange={() => setWhatsAppUpdate(!whatsAppUpdate)}
        />
        <label htmlFor="terms">
          I want to receive transaction and seva update on Whatsapp
        </label>
      </div>
    </>
  );
};

export default UserPersonalInfo;
