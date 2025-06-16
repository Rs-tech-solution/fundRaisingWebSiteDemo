import React from "react";

const SavedAddress = ({
  address,
  isSelected,
  onSelect,
  savedAddress,
  addressDetail,
  addressHeader,
  addressClassName,
  editDeleteButtons,
  onEdit,
  onDelete,
  ...props
}) => {
  return (
    <>
      <div className={`${savedAddress} ${props.lastChild}`}>
        <div className={`${addressDetail}`}>
          <input
            type="radio"
            name="selectedAddress"
            checked={isSelected}
            onChange={onSelect}
          />
          <div>
            <div className={`${addressHeader}`}>
              <h4>{address.name}</h4>
              {address.addressType && <span>{address.addressType}</span>}
            </div>
            <div className={`${addressClassName}`}>
              {address.streetAddress}, {address.locality}, {address.state},{" "}
              {address.country} - {address.pincode}
            </div>
          </div>
        </div>
        <div className={`${editDeleteButtons}`}>
          <button onClick={() => onEdit(address)}>edit</button>
          <button onClick={() => onDelete(address)}>delete</button>
        </div>
      </div>
    </>
  );
};

export default SavedAddress;
