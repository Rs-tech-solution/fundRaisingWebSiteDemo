import styles from "./index.module.scss";

const Dropdown = ({
    label,
    options,
    selectedValue,
    setSelectedValue,
    dropdownContainerStyle = "",
    dropdownStyle = "",
    dropdownLabelStyle = "",
}) => (
    <div className={`${styles.dropdownContainer} ${dropdownContainerStyle}`}>
        <label
            htmlFor={label}
            className={`${styles.dropdownLabel} ${dropdownLabelStyle}`}
        >
            {label}:
        </label>
        <select
            id={label}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            className={`${styles.dropdown} ${dropdownStyle}`}
        >
            <option value="">
                default {label.toLowerCase()}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default Dropdown;
