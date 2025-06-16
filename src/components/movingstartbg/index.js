import React, { useEffect, useState } from "react";
import "./StarBackground.scss"; // Import SCSS file

const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const starCount = 50; // Number of stars
        const newStars = [];

        for (let i = 0; i < starCount; i++) {
            newStars.push({
                id: i,
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
                x1: Math.random() * 100 - 50 + "px",
                y1: Math.random() * 100 - 50 + "px",
                x2: Math.random() * 200 - 100 + "px",
                y2: Math.random() * 200 - 100 + "px",
                x3: Math.random() * 150 - 75 + "px",
                y3: Math.random() * 150 - 75 + "px",
                duration: Math.random() * 3 + 3 + "s", // Random animation duration
            });
        }

        setStars(newStars);
    }, []);

    return (
        <div className="stars-container">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: star.left,
                        top: star.top,
                        "--x1": star.x1,
                        "--y1": star.y1,
                        "--x2": star.x2,
                        "--y2": star.y2,
                        "--x3": star.x3,
                        "--y3": star.y3,
                        animationDuration: star.duration,
                    }}
                />
            ))}
        </div>
    );
};

export default StarBackground;
