import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { CgSpinnerTwo } from "react-icons/cg";
import { useRouter } from "next/navigation";
import ApiService from "@/services/ApiService";
import { setUser } from "@/store/slices/authSlice";
import OtpInput from "@/components/shared/inputs/otp-input";
import PrimaryButton from "@/components/shared/buttons/primaryButton";
import styles from "./otp-form.module.scss";

const OTP_MAX_LENGTH = 6;

const OTPForm = ({ showOtp = true, sendOtp = () => { } }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyOtp = () => {
    if (typeof window !== "undefined" && confirmationResult) {
      if (otp && otp.trim() && otp.trim().length === OTP_MAX_LENGTH) {
        setLoading(true);
        confirmationResult
          .confirm(otp)
          .then(async (result) => {
            getUserByIdToken(result.user?.accessToken);
            setLoading(false);
          })
          .catch((error) => {
            toast.error("Invalid Code!");
            setLoading(false);
          });
      } else {
        toast.error("Please Enter Valid Code!");
      }
    } else {
      toast.error("Something went wrong! Please try again.");
      router.replace("/login");
    }
  };

  const getUserByIdToken = async (idToken) => {
    setLoading(true);
    try {
      const res = await new ApiService().post("/auth/user", { idToken });
      if (res && res.data) {
        dispatch(setUser(res.data?.user));
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showOtp && otp.length === OTP_MAX_LENGTH) {
      verifyOtp();
    }
  }, [otp, showOtp]);

  return (
    <form
      className={styles.otpWrapper}
      onSubmit={(e) => {
        e.preventDefault();
        verifyOtp();
      }}
    >
      <label className={styles.label}>Enter Your OTP</label>
      <OtpInput otp={otp} setOtp={setOtp} onResend={sendOtp} />
      <PrimaryButton
        type="submit"
        className={styles.verifyBtn}
        disabled={loading}
      >
        {loading && <CgSpinnerTwo className={styles.spinner} />} &nbsp; Verify Code
      </PrimaryButton>
    </form>
  );
};

export default OTPForm;
