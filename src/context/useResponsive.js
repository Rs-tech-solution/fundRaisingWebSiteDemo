"use client";
import React, { useState, useEffect, createContext } from "react";

const userAgent =
  typeof window !== "undefined" ? window.navigator.userAgent : "";

const isMobileDevice = {
  Android: function () {
    return userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return userAgent.match(/IEMobile/i) || userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return (
      isMobileDevice.Android() ||
      isMobileDevice.BlackBerry() ||
      isMobileDevice.iOS() ||
      isMobileDevice.Opera() ||
      isMobileDevice.Windows()
    );
  },
};

const predefinedScreenSizes = [
  {
    width: 359,
    size: "xxs",
  },
  {
    width: 575,
    size: "xs",
  },
  {
    width: 767,
    size: "sm",
  },
  {
    width: 991,
    size: "md",
  },
  {
    width: 1199,
    size: "lg",
  },
  {
    width: 1365,
    size: "xl",
  },
];

const responsiveContext = createContext({});

export const ResponsiveProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenResolution, setScreenResolution] = useState({});
  const [screenSize, setScreenSize] = useState("sm");
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(
        isMobileDevice.any() || window.innerWidth <= 767 ? true : false
      );
      setScreenResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      let currentScreenSize = "xl";
      for (let i in predefinedScreenSizes) {
        if (window.innerWidth <= predefinedScreenSizes[i].width) {
          currentScreenSize = predefinedScreenSizes[i].size;
          break;
        }
      }
      setScreenSize(currentScreenSize);
      setIsSmScreen(window.innerWidth <= 767);
      setIsLgScreen(window.innerWidth >= 992);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <responsiveContext.Provider
      value={{
        isMobile,
        screenResolution,
        screenSize,
        isSmScreen,
        isLgScreen,
      }}
    >
      {children}
    </responsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const { isMobile, screenResolution, screenSize, isSmScreen, isLgScreen } =
    React.useContext(responsiveContext);
  return {
    isMobile,
    screenResolution,
    screenSize,
    isSmScreen,
    isLgScreen,
  };
};
