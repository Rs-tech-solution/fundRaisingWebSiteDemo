// import React from "react";
// import styles from "./input.module.scss";

// const Input = ({
//   type = "text",
//   value,
//   name,
//   id,
//   label,
//   placeholder = "",
//   fieldClassName = "",
//   className = "",
//   labelClassName = "",
//   onInputChange = () => {},
//   onInputBlur = () => {},
//   isRequired = false,
//   ...otherProps
// }) => {
//   return (
//     <div className={`${styles.field} ${fieldClassName}`}>
//       <input
//         type={type}
//         className={`${styles.inputStyle} ${className}`}
//         id={id}
//         value={value}
//         name={name}
//         required={isRequired}
//         placeholder={placeholder || " "}
//         onChange={onInputChange}
//         onBlur={onInputBlur}
//         {...otherProps}
//         autoComplete="off"
//       />
//       {label && (
//         <label
//           htmlFor={id}
//           className={`${styles.inputsLabel} ${labelClassName}`}
//         >
//           {label}
//         </label>
//       )}
//     </div>
//   );
// };

// export default Input;
