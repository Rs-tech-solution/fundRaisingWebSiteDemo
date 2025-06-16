import React from "react";

const UserAddressDetail = ({
  streetAddress,
  setStreetAddress,
  locality,
  setLocality,
  pincode,
  setPincode,
  country,
  setCountry,
  state,
  setState,
  addressType,
  setAddressType,
  states,
  countries,
  input_group,
  activeSelect,
  input,
}) => {
  return (
    <>
      <h5>Address Details</h5>
      <div className={`${input_group}`}>
        <div className={`${input}`}>
          <input
            type="text"
            placeholder="Street Address(House no. Building)"
            id="street"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </div>
      </div>
      <div className={`${input_group}`}>
        <input
          type="text"
          placeholder="Locality/city/tow"
          id="locality"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
        />
        <input
          type="number"
          placeholder="Pincode"
          id="pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>
      <div className={`${input_group}`}>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`${country !== "country" ? activeSelect : ""}`}
        >
          <option value={"country"} disabled>
            Country
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={`${state !== "state" ? activeSelect : ""}`}
        >
          <option value={"state"} disabled>
            State
          </option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className={`${input_group}`}>
        <div className={`${input}`}>
          <input
            type="text"
            placeholder="Address Type (ex: Home, Friend’s House)"
            id="street"
            value={addressType}
            onChange={(e) => setAddressType(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default UserAddressDetail;
