import React from "react";
import styles from "./styles.mobileFooter.module.scss";
import {
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const MobileFooter = () => {
  return (
    <footer>
      <div className={styles.footerSocialMedia}>
        <div className={styles.socialIcons}>
          <ul>
            <li>
              <a href="#">
                <FaYoutube size={30} />
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
      </div>

      <>
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <ul className={styles.footerContact}>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>{" "}
            <ul className={styles.footerLinks}>
              <li>Blogs</li>
              <li>Impact</li>
              <li>partnerships</li>
            </ul>
            <div className={styles.footerContact}>
              <p>Email: example@example.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
          </div>
        </div>
      </>
    </footer>
  );
};

export default MobileFooter;
