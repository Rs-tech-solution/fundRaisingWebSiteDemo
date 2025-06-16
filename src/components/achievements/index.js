import React from "react";
import styles from "./achievement.module.scss";

const AchieveMentSection = ({ achievements }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Our Achievements</h2>
      <div className={styles.container}>
        {achievements.map((achievement, index) => (
          <div className={styles.achievement} key={index}>
            <div className={styles.achievebg}>
              <img src={achievement.image} />
            </div>
            <h3>{achievement.achievement}</h3>
            <p>{achievement.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchieveMentSection;
