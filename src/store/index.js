import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import categorySlice from "./category-slice";

//

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
