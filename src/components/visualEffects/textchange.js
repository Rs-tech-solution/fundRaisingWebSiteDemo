"use client";
import React, { useState, useEffect } from "react";
import styles from "./textChange.module.scss";

const ChangeText = () => {
	const sentences = [
		"Welcome to Our Website",
		"Discover Our Mission",
		"Join Our Cause",
		"Make a Difference Today",
	];

	const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSentenceIndex(
				(prevIndex) => (prevIndex + 1) % sentences.length
			);
		}, 2000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className={styles.containers}>
			<div className={`${styles.content} ${styles.show}`}>
				<h1>{sentences[currentSentenceIndex]}</h1>
				<p>Explore and discover what you can offer.</p>
			</div>
		</div>
	);
};

export default ChangeText;
