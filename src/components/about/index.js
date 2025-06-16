import React from "react";
import styles from "./about.module.scss";
import CarouselComponent from "../shared/swiperCrousel";

const AboutUs = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Our NGO</h1>
          <p>Empowering communities for a better tomorrow.</p>
        </div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.section}>
          <div className={styles.textSection}>
            <h2>Who We Are</h2>
            <p>
              We are a team of dedicated individuals committed to making the
              world a better place. Our mission is to support those in need and
              create lasting change in communities around the globe.
            </p>
            <p>
              Our team works tirelessly to provide resources, support, and hope
              to those who need it most. We believe in the power of community
              and the impact we can make together.
            </p>
          </div>
          <div className={styles.imageSection} />
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>12,280+</h2>
            <p>Projects Completed</p>
          </div>
          <div className={styles.stat}>
            <h2>1,825+</h2>
            <p>Team Members</p>
          </div>
          <div className={styles.stat}>
            <h2>37+</h2>
            <p>Awards Won</p>
          </div>
          <div className={styles.stat}>
            <h2>256,861</h2>
            <p>Volunteers</p>
          </div>
        </div>

        <div className={styles.missionSection}>
          <h2>Our Mission</h2>
          <p>
            To empower communities through education, healthcare, and
            sustainable development, ensuring a brighter future for all.
          </p>
          <a href="#donate" className={styles.button}>
            Make a Donation
          </a>
        </div>

        <div className={styles.volunteerSection}>
          <h2>Get Involved</h2>
          <div className={styles.volunteerOptions}>
            <div className={styles.volunteerOption}>
              <h3>Become A Volunteer</h3>
              <p>
                Join our team and make a difference in the lives of those in
                need.
              </p>
            </div>
            <div className={styles.volunteerOption}>
              <h3>Shelter for Homeless</h3>
              <p>
                Help us provide safe havens for the homeless and vulnerable.
              </p>
            </div>
            <div className={styles.volunteerOption}>
              <h3>Make the World Happier</h3>
              <p>
                Spread joy and positivity by supporting our global initiatives.
              </p>
            </div>
            <div className={styles.volunteerOption}>
              <h3>Rescue a Child</h3>
              <p>
                Provide essential resources to rescue and support children in
                need.
              </p>
            </div>
          </div>
          <div className={styles.centerContainer}>
            <a href="#donate" className={styles.button}>
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
