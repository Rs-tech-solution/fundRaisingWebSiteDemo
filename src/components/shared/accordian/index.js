import React, { useState } from "react";
import "./Accordion.scss";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleIndex = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => toggleIndex(index)}>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            {activeIndices.includes(index) ? (
              <FaChevronDown size={28} color="rgba(151, 155, 167, 1)" />
            ) : (
              <FaChevronRight size={28} color="rgba(151, 155, 167, 1)" />
            )}
          </div>
          {activeIndices.includes(index) && (
            <div className="accordion-body">{item.component}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
