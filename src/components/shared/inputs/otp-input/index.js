import React from "react";
// import OTPInput, { ResendOTP } from "otp-input-react";
import styles from "./style.module.scss";
import dynamic from "next/dynamic";

const OTPInput = dynamic(() => import("otp-input-react"), { ssr: false });
const ResendOTP = dynamic(
  () => import("otp-input-react").then((mod) => mod.ResendOTP),
  { ssr: false }
);

const OtpInput = ({
  otp,
  setOtp = () => { },
  onResend = () => { },
  autoFocus = true,
  secure = true,
  disabled = false,
  type = "number",
  length = 6,
  resendTime = 30,
}) => {
  return (
    <div className={styles.otpWrapper}>
      <OTPInput
        value={otp}
        onChange={setOtp}
        autoFocus={autoFocus}
        OTPLength={length}
        otpType={type}
        disabled={disabled}
        secure={secure}
        className={styles.inputWrapper}
        inputStyles={{
          width: `calc(100% / ${length})`,
        }}
        inputClassName={styles.otpInput}
        autoComplete="off"
      />
      <ResendOTP
        className={styles.resendWrapper}
        maxTime={resendTime}
        onResendClick={onResend}
      />
    </div>
  );
};

export default OtpInput;
