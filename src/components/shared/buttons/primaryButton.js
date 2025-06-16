import React from "react";
import styles from "./primaryButton.module.scss";

const PrimaryButton = ({
  type = "button",
  onClick,
  className = "",
  children,
  disabled = false,

  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.btnPrimary} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
