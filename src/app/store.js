import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice/authSlice";
import cartSlice from "../features/cartSlice/cartSlice";
import orderSlice from "../features/orderSlice/orderSlice";
import productSlice from "../features/productSlice";
import uiSlice from "../features/uiSlice/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    productSlice: productSlice,
    authSlice: authSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice,
  },
});
export default store;
