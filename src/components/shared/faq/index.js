import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Faq.module.scss";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.queAns}>
      <div
        className="d-flex justify-content-between align-items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <h5 className={styles.question}>{question}</h5>
        {isOpen ? (
          <FaMinus className={styles.icon} size={18} />
        ) : (
          <FaPlus className={styles.icon} size={18} />
        )}
      </div>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

const FAQSection = ({ faqs }) => {
  return (
    <div className={`${styles.container} container mt-5 mb-5`}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <p className={styles.text}>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat with our friendly team.
        </p>
      </div>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
