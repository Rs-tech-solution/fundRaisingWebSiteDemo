import Image from "next/image";
import OIP from "../../../public/OIP.jpg";
import styles from "./contact.module.scss";

const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={OIP}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.navigation}>
          <a href="/" className={styles.navigationLink}>
            Home
          </a>

          <a href="/contact" className={styles.navigationLink}>
            Contact
          </a>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p>
          <span>Address:</span> 198 West 21th bdkkjdhkjwehdkeh kjehkjedk
          ekjdjdkwje wenst nagar tirupati west MG road hdkjwkjkdhkhStreet, Suite
          721 New York NY 10016
        </p>
        <p>
          <span>Phone:</span> +9135 2355 98
        </p>
        <p>
          <span>Email:</span> info@yoursite.com
        </p>
        <p>
          <span>Website:</span> <a href="#">yoursite.com</a>
        </p>
      </div>
      <div className={styles.questionForm}>
        <h4>Do you have any questions?</h4>
        <input
          type="text"
          className={styles.formControl}
          placeholder="Your Name"
        />
        <input
          type="text"
          className={styles.formControl}
          placeholder="Your Email"
        />
        <input
          type="text"
          className={styles.formControl}
          placeholder="Subject"
        />
        <textarea
          className={styles.textarea}
          placeholder="Enter your message"
        ></textarea>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.017040534503!2d77.70995267412026!3d12.970761314898617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13cad98987d9%3A0x4e4d0a51b0c7d2f3!2sThe%20Rameshwaram%20Cafe%20%40%20Brookfield!5e0!3m2!1sen!2sin!4v1715708848443!5m2!1sen!2sin"
          width="100%"
          height="455"
          className={styles.mapFrame}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
