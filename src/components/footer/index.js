"use client";
import styles from "./style.module.scss";
import { useResponsive } from "@/context/useResponsive";
import Link from "next/link";

import {
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaStopwatch20,
} from "react-icons/fa";
import MobileFooter from "./mobileFooter";
const Footer = () => {
  const { isSmScreen } = useResponsive();
  return (
    <div className={styles.wrapper}>
      <img src="/images/up.png" alt="" className={styles.cornerImg} />
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerItems}>
            <div className={styles.logo}>
              <div>
                <img src="/slidesImages/MainLogo3.png" alt="MainLogo3" />
              </div>{" "}
              <h4>Fundraising Platform</h4>
            </div>
            <div className={styles.footerText}>
              <h3>Set up to Protect Helpless</h3>
              <p>join hands with us to support those in need</p>
            </div>
            {!isSmScreen && (
              <div className={styles.socialIcons}>
                <ul>
                  <li>
                    <a href="#">
                      <FaEnvelope size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebook size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter size={30} />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className={`${styles.footerItems} ${styles.sectondryFooterItems}`}
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Cancellation policyy</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.footerItems} ${styles.sectondryFooterItems} ${styles.address}`}
          >
            <h3>Address</h3>
            <div>
              Global Bizz Services Pvt. Ltd. Unit No 203, 2nd Floor Suite
              No.549, SBR CV Towers, Sector-I,Sy No 64, HUDA Techno Enclave,
              Madhapur, Hyderabad - 500081
            </div>
            <div className={styles.footerContact}>
              <FaEnvelope size={18} /> <email>support@globalbizz.com</email>
            </div>
            <div className={styles.footerContact}>
              <FaPhone size={18} /> <div>+91 92565 85656</div>
            </div>
            <div className={styles.footerContact}>
              <FaStopwatch20 size={28} />{" "}
              <div>
                Monday - Thursday: 10:00AM - 6:00PM Friday - Saturday: 10:00AM -
                2:00PM
              </div>
            </div>

            {isSmScreen && (
              <div className={styles.socialIcons}>
                <ul>
                  <li>
                    <a href="#">
                      <FaEnvelope size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebook size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter size={30} />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div className={styles.copyright}>
          <p>Copyright © 2025 Global Bizz Services Pvt. Ltd. All right reserved</p>
        </div>
      </div>
      <img src="/images/down.png" alt="" className={styles.cornerImg} />
    </div>
  );
};

export default Footer;
