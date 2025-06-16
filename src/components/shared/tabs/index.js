"use client";

const TabButton = ({
  label,
  icon,
  activeTab,
  sectionRef,
  scrollToSection,
  tabClassName,
  activeClassName,
  tabLabelClassName,
}) => {
  return (
    <button
      className={`${
        activeTab === label ? activeClassName : ""
      } ${tabClassName}`}
      onClick={() => scrollToSection(sectionRef, label)}
    >
      <div className={`${tabLabelClassName}`}>
        <img src={icon} />
        <span>{label}</span>
      </div>
    </button>
  );
};

export default TabButton;
