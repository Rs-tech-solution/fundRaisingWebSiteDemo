import React from "react";

const StorySection = ({ story, className, ...props }) => {
  return (
    <div className={`${className}`}>
      <h2>Story</h2>
      <div>{story}</div>
    </div>
  );
};

export default StorySection;
