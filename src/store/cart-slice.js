import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCartHandler(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.totalQuantity++;
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: Number(newItem.price.slice(1)),
          title: newItem.title,
        });
      } else {
        state.totalQuantity++;
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.totalPrice + Number(newItem.price.slice(1));
      }
    },
    removeItemFromCartHandler(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          existingItem.totalPrice - Number(existingItem.price.slice(1));
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
