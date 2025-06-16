import React from "react";
import styles from "./styles.module.scss";

const Table = ({ customClass = "", tableHeadings, tableData }) => {
  return (
    <div className={`${styles.defaultTable} ${customClass}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            {tableHeadings?.map((head, index) => (
              <th key={index + 1 + "hygygs"}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((element, idx) => (
            <tr key={1 + idx + "wrtyw"}>
              {element?.data?.map((itm, ind) => (
                <td key={"aghgha" + ind + 2}>{itm}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
