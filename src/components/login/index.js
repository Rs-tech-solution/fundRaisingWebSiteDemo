"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OTPForm from "@/app/login/otp-form";
import PhoneForm from "@/app/login/phone-form";
import { useRouter } from "next/navigation";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useUser } from "@/context/userContext";
import { auth } from "../firebase/config";
import styles from "./index.module.scss";
import StarBackground from "../movingstartbg";

const Login = () => {
  //with email
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const { setUser } = useUser();
  //with phone num
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const router = useRouter();

  const user = useSelector((state) => state?.auth?.user);

  // const handleSubmit = async (event) => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   event.preventDefault();
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     setUser(userCredential.user);
  //     router.push("/checkout");
  //     toast.success("user logged in successfully");
  //     console.log(userCredential);
  //   } catch (error) {
  //     console.error(error.message);
  //     toast.error(error.message);
  //   }
  // };

  // phone number and otp based functionality below

  const onCaptchaVerify = () => {
    if (typeof window !== "undefined" && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => { },
          "expired-callback": () => { },
        }
      );
    }
  };

  const sendOtp = (resent = false) => {
    if (phone && phone.trim()) {
      setLoading(true);
      onCaptchaVerify();

      const appVerifier = window.recaptchaVerifier;
      const phoneNumber = `+${phone}`;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          toast.success(`OTP ${resent ? "Resent" : "Sent"} Successfully!`);
          window.confirmationResult = confirmationResult;
          setLoading(false);
          setShowOtp(true);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong! Please try again.");
          router.replace("/login");
          setLoading(false);
        });
    } else {
      toast.error("Please Enter Your Phone Number!");
    }
  };

  useEffect(() => {
    if (user && user.id) {
      router.replace("/checkout");
    }
  }, [user]);

  return (
    <>
      <section className={styles.loginSection}>
        <StarBackground />
        <div id="recaptcha-container" />
        <div className={styles.wrapper}>
          <h3>Login/Signup</h3>
          {showOtp ? (
            <OTPForm showOtp={true} sendOtp={sendOtp} />
          ) : (
            <PhoneForm
              phone={phone}
              setPhone={setPhone}
              sendOtp={sendOtp}
              loading={loading}
            />
          )}
        </div>
      </section>
      {/* <div className={styles.container}>
        <h2>Log In</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Log In
          </button>
        </form>
      </div> */}
    </>
  );
};
export default Login;
