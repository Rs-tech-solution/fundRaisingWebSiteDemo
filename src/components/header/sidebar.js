import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimesCircle } from "react-icons/fa";
import logo from "../../../public/ngologo.png";
import styles from "./sidebar.module.scss";

const Sidebar = ({
  user,
  isOpen,
  setIsSideBarOpen,
  handleClose,
  navList,
  pathname,
}) => {
  return (
    <nav>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.content}>
          <div className={styles.navList}>
            {navList.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${isActive ? styles.activeLink : styles.navItem}`}
                  onClick={() => setIsSideBarOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <FaTimesCircle
          onClick={handleClose}
          className={styles.closeButton}
          size={24}
        />
      </div>
    </nav>
  );
};

export default Sidebar;

//  <li className={styles.navItem}>
//               <Link href="/">Home</Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link href="/about">About Us</Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link href="/contact">Contact</Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link href="/campaigns">Contribute</Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link href="/impact">Impact</Link>
//             </li>
