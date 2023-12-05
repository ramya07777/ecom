import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice";
import contactsReducer from "./Address";

export const store = configureStore({
  reducer: {
    cartData: cartReducer,
    address: contactsReducer,
  },
});
