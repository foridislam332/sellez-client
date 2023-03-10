import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./features/product/productsSlice";
import { productsApi } from "../features/apiSlice";
import CartSlice from "../features/CartSlice.js";
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware).concat();
  },
});
