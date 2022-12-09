import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "todaydeals",
  },
  reducers: {
    selectCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
