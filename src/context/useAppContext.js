"use client";
import { createContext, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "@/store/provider";
import { ResponsiveProvider } from "./useResponsive";
import "../app/globals.scss";

const AppContext = createContext({});

export const AppWrapper = ({ children }) => {
  const [state, setState] = useState({
    index: 0,
  });

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      <ResponsiveProvider>
        <StoreProvider>{children}</StoreProvider>
      </ResponsiveProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
