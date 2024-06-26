import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const fishSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD: (state, action) => {
      state.cart.push(action.payload);
    },
    DELETE: (state, action) => {
      state.cart = state.cart.filter(item => item !== action.payload);
    }
  }
});

export const { ADD,DELETE } = fishSlice.actions;

export default fishSlice.reducer;
