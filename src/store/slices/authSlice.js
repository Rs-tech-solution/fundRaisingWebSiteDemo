import { createSlice } from "@reduxjs/toolkit";
import { getStorageItem, setStorageItem } from "@/components/shared/utility";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getStorageItem("user") || null,
  },
  reducers: {
    setUser: (state, action) => {
      setStorageItem("user", action.payload);
      state.user = action.payload;
    },
    logout: (state, action) => {
      setStorageItem("user", null);
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
