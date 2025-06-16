import { CgSpinnerTwo } from "react-icons/cg";
import PhoneNumberInput from "@/components/shared/inputs/phone-otp";
import PrimaryButton from "@/components/shared/buttons/primaryButton";
import styles from "./phone-form.module.scss";

const PhoneForm = ({
  phone = "",
  setPhone = () => { },
  sendOtp = () => { },
  loading = false,
}) => (
  <form
    className={styles.phoneWrapper}
    onSubmit={(e) => {
      e.preventDefault();
      sendOtp();
    }}
  >
    <label className={styles.label}>Verify Your Phone Number</label>

    <PhoneNumberInput phone={phone} setPhone={setPhone} />
    <PrimaryButton
      type="submit"
      className={styles.sendCodeBtn}
      disabled={loading}
    >
      {loading && <CgSpinnerTwo className={styles.spinner} />} Send Code Via SMS
    </PrimaryButton>

  </form>
);

export default PhoneForm;
