import React from "react";
import styles from "./style.module.scss";

const OrderListComponent = ({
  items,
  parentIndex = "",
  olClassName,
  nestedListClassName,
  titleClassName,
  conditionClassName,
  unOrderListClassName,
}) => {
  return (
    <ol className={`${olClassName} ${styles.olList}`}>
      {items.map((item, idx) => {
        const currentIndex = parentIndex
          ? `${parentIndex}.${idx + 1}`
          : `${idx + 1}`;
        const hasChildren = item.children && item.children.length > 0;
        const hasUnorderedChildren =
          item.unorderedChildren && item.unorderedChildren.length > 0;

        return (
          <li key={currentIndex}>
            <strong className={`${titleClassName} ${styles.title}`}>
              {item.title && `${item.title}`}
            </strong>
            <div className={`${conditionClassName} ${styles.condition}`}>
              {item.description}
            </div>

            {hasUnorderedChildren && (
              <ul className={`${unOrderListClassName} ${styles.unOrderList}`}>
                {item.unorderedChildren.map((child, childIdx) => {
                  const childIndex = `${currentIndex}.${childIdx + 1}`;
                  return (
                    <li key={childIndex}>
                      <div className={styles.condition}>
                        {child.description}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}

            {hasChildren && (
              <ol className={`${nestedListClassName} ${styles.nestedList}`}>
                {item.children.map((child, childIdx) => {
                  const childIndex = `${currentIndex}.${childIdx + 1}`;
                  return (
                    <li key={childIndex}>
                      <div className={styles.condition}>
                        <span>{`${currentIndex}.${childIdx + 1}`}</span>{" "}
                        {child.description}
                      </div>
                    </li>
                  );
                })}
              </ol>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default OrderListComponent;
