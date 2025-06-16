import { createSlice } from "@reduxjs/toolkit";

export const ngoSlice = createSlice({
  name: "ngo",
  initialState: {
    ngo: {},
  },
  reducers: {
    setNgo: (state, action) => {
      state.ngo = action.payload;
    },
  },
});

export const { setNgo } = ngoSlice.actions;

export default ngoSlice.reducer;
