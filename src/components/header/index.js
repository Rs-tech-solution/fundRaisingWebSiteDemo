"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useResponsive } from "@/context/useResponsive";
import { logout, setUser } from "@/store/slices/authSlice";
import Sidebar from "./sidebar";
import logo from "../../../public/slidesImages/MainLogo.png";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/vedaAboutUs" },
    { name: "Term & Condition", href: "/vedaTermsAndConditions" },
    { name: "Category", href: "/categorypage" },
    { name: "MonthlyCampaign", href: "/monthlyCampaigns" },
    { name: "sevas", href: "/sevas/2" },
  ];

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const { isSmScreen } = useResponsive();
  const pathname = usePathname();

  useEffect(() => {
    let prevScroll = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScroll > currentScrollPos);
      prevScroll = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamBurgerClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    document.body.style.overflow = isSideBarOpen ? "hidden" : "";
  }, [isSideBarOpen]);

  return !isSmScreen ? (
    <>
      <header
        className={`${styles.headerWrapper} ${visible ? "" : styles.hide}`}
      >
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <img src="/slidesImages/MainLogo.png" alt="" />
          </div>
          <div className={styles.navList}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${isActive ? styles.activeLink : styles.navItem}`}
                >
                  {item.name}
                </Link>
              );
            })}
            <button className={styles.loginButton}>Login</button>
          </div>
        </nav>
      </header>
    </>
  ) : (
    <>
      {isSideBarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsSideBarOpen(false)}
        />
      )}

      <header
        className={`${styles.headerWrapper} ${visible ? "" : styles.hide}`}
      >
        <div className={styles.mobileHeaderWrapper}>
          <div className={styles.hamBurger}>
            <FaBars onClick={handleHamBurgerClick} size={24} />
          </div>
          <div className={styles.logoContainer}>
            <img src="/slidesImages/MainLogo.png" alt="" />
          </div>
          <div className={styles.profileLogo}>
            <FaUser onClick={handleHamBurgerClick} size={24} />
          </div>

          {isSideBarOpen && (
            <Sidebar
              isOpen={isSideBarOpen}
              setIsSideBarOpen={setIsSideBarOpen}
              handleClose={() => setIsSideBarOpen(false)}
              navList={navItems}
              pathname={pathname}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

//  <div className={styles.navItem}>
//               <Link href="/">Home</Link>
//             </div>
//             <div className={styles.navItem}>
//               <Link href="/about">About Us</Link>
//             </div>
//             <div className={styles.navItem}>
//               <Link href="/contact">Contact</Link>
//             </div>
//             <div className={styles.navItem}>
//               <Link href="/campaigns">Contribute</Link>
//             </div>
//             <div className={styles.navItem}>
//               <Link href="/policy">Policy</Link>
//             </div>
//             <div className={styles.navItem}>
//               <Link href="/impact">Impact</Link>
//             </div>{" "}
//             <div className={styles.navItem}>
//               <Link href="/cart">cart</Link>
//             </div>
//             <div className={styles.navItem}>
//               <Link href={user ? "/checkout" : "/login"}>Checkout</Link>
//             </div>
{
  /* <li className={styles.navItem}>
              {user ? (
                <>
                  <span>{user.email}</span>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li> */
}
