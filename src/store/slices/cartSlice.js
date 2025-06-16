import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    campaignDetails: {},
    donationAmount: 0,
  },
  reducers: {
    // addToCart: (state, action) => {
    //   const { campaignCode, campaignTitle, campaignImage, campaignType } =
    //     action.payload;

    //   if (
    //     state.cart.length > 0 &&
    //     state.campaignDetails.campaignCode &&
    //     state.campaignDetails.campaignCode !== campaignCode
    //   ) {
    //     state.cart = [];
    //     state.totalQuantity = 0;
    //     state.totalPrice = 0;
    //     state.campaignDetails = {};
    //     state.donationAmount = 0;
    //   }

    //   state.campaignDetails = {
    //     campaignCode,
    //     campaignTitle,
    //     campaignImage,
    //     campaignType,
    //   };

    //   const existingItem = state.cart.find(
    //     (item) => item.id === action.payload.id
    //   );

    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //     existingItem.totalPrice += action.payload.price;
    //   } else {
    //     state.cart.push({
    //       ...action.payload,
    //       quantity: 1,
    //       totalPrice: action.payload.price,
    //     });
    //   }

    //   state.totalQuantity += 1;
    //   state.totalPrice += action.payload.price;
    // },
    addToCart: (state, action) => {
      const {
        id,
        price,
        available_quantity,
        campaignCode,
        campaignTitle,
        campaignImage,
        campaignType,
      } = action.payload;

      if (
        state.cart.length > 0 &&
        state.campaignDetails.campaignCode &&
        state.campaignDetails.campaignCode !== campaignCode
      ) {
        state.cart = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
        state.campaignDetails = {};
        state.donationAmount = 0;
      }

      state.campaignDetails = {
        campaignCode,
        campaignTitle,
        campaignImage,
        campaignType,
      };

      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity < available_quantity) {
          existingItem.quantity += 1;
          existingItem.totalPrice += price;
          state.totalQuantity += 1;
          state.totalPrice += price;
        } else {
          toast.warning("You can select only up to available quantity.");
        }
      } else {
        if (available_quantity > 0) {
          state.cart.push({
            ...action.payload,
            quantity: 1,
            totalPrice: price,
          });
          state.totalQuantity += 1;
          state.totalPrice += price;
        } else {
          toast.warning("This product is out of stock.");
        }
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= action.payload.price;
        } else {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        }

        state.totalQuantity -= 1;
        state.totalPrice -= action.payload.price;
      }
    },

    directDonationn: (state, action) => {
      const {
        campaignCode,
        campaignTitle,
        donationAmount,
        campaignType,
        campaignImage,
      } = action.payload;

      if (
        state.cart.length > 0 &&
        state.campaignDetails.campaignCode &&
        state.campaignDetails.campaignCode !== campaignCode
      ) {
        state.cart = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
        state.campaignDetails = {};
        state.donationAmount = 0;
      }

      state.campaignDetails = {
        campaignCode,
        campaignTitle,
        campaignImage,
        campaignType,
      };
      state.donationAmount = donationAmount;
      // state.totalPrice += donationAmount;
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.campaignDetails = {};
      state.donationAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, directDonationn } =
  cartSlice.actions;
export default cartSlice.reducer;
