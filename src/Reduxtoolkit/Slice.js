import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "cartData",
  initialState: {
    cart: [],
    selectedAddress: null,
    brandData: [],
    sizeData: [],
    filterProduct: [],
  },
  reducers: {
    addCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      const indexToRemove = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.cart.splice(indexToRemove, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity -= 1;
        if (existingProduct.quantity < 1) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    setSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
    brandFilteredData: (state, action) => {
      state.brandData = action.payload;
    },
    sizeFilteredData: (state, action) => {
      state.sizeData = action.payload;
    },
    allFilteredData: (state, action) => {
      state.filterProduct = action.payload;
    },
  },
});

export const {
  addCart,
  removeCart,
  increaseQuantity,
  decreaseQuantity,
  setSelectedAddress,
  brandFilteredData,
  sizeFilteredData,
  allFilteredData,
} = counterSlice.actions;

export default counterSlice.reducer;
