import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./index.module.scss";
const Form80G = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [panHolderNumber, setPanHolderNumber] = useState("");
  const [address, setAddress] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPopUp ? "hidden" : "";
  }, [showPopUp]);

  return (
    <div className={styles.popUpContainer}>
      <div className={styles.popUp}>
        <div className={styles.head}>
          <div>
            {" "}
            <img src="/slidesImages/phoneicon.png" alt="" /> claim your 80G
          </div>
          <AiOutlineClose
            size={24}
            // onClick={() => setShowPopUp(false)}
            onClick={() => onClose()}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.input_group}>
          <input
            type="email"
            placeholder="Email Id *"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name as per PAN*"
            id="panHolderNumber"
            value={panHolderNumber}
            onChange={(e) => setPanHolderNumber(e.target.value)}
          />
        </div>
        <div className={styles.input_group}>
          <input
            type="text"
            placeholder="PAN Number"
            id="pan"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="complete address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <h4>Note</h4>
        <p>
          Please verify your details especially “PAN Number” and “Name as per
          PAN” to obtain the proper 80G certificate.
        </p>
        <div className={styles.claimsButtons}>
          <button className={styles.submitBtn}>Submit</button>
          <button onClick={() => setShowPopUp(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Form80G;
