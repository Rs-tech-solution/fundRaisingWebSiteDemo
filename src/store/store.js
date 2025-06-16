import { configureStore } from "@reduxjs/toolkit";
import ngoSlice from "./slices/ngoSlice";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    ngo: ngoSlice,
    auth: authSlice,
    cart: cartSlice,
  },
});
