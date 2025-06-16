import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./style.module.scss";

const PhoneNumberInput = ({
  phone = "",
  setPhone = () => {},
  required = true,
  autoFocus = true,
}) => {
  return (
    <PhoneInput
      country={"in"}
      value={phone}
      onChange={(phone) => setPhone(phone)}
      inputProps={{
        name: "phoneNumber",
        required: required,
        autoFocus: autoFocus,
      }}
      inputClass={styles.phoneInput}
      placeholder={"Enter your Phone Number"}
      countryCodeEditable={false}
    />
  );
};

export default PhoneNumberInput;
