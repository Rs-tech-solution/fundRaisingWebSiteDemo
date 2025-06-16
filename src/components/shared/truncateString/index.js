import React, { useState } from "react";

const TruncateText = ({
  text,
  wordLimit = 20,
  readMoreBtnClassName,
  descClassName,
}) => {
  const words = text.trim().split(/\s+/);
  const isTruncated = words.length > wordLimit;

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const displayText = expanded
    ? text
    : words.slice(0, wordLimit).join(" ") + (isTruncated ? "..." : "");

  return (
    <div>
      <h5 className={`${descClassName}`}>
        {displayText}

        {isTruncated && (
          <span onClick={toggleExpanded} className={`${readMoreBtnClassName}`}>
            {expanded ? "Show Less" : "Read More"}
          </span>
        )}
      </h5>
    </div>
  );
};

export default TruncateText;
