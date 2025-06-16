import React from "react";
import styles from "./fixedCarousel.module.scss";

const FixedCarousel = ({ className = "", children, iconSize = "2rem" }) => {
	return (
		<div className={`${styles.slider} ${className}`}>
			{React.Children.map(children, (child) => (
				<div style={{ fontSize: iconSize }}>{child}</div>
			))}
		</div>
	);
};

export default FixedCarousel;
