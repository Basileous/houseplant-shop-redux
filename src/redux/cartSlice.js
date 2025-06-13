import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { ...plant, quantity: 1 };
        state.totalCount += 1;
        state.totalPrice += plant.price;
      }
    },
    increase: (state, action) => {
      const item = state.items[action.payload];
      item.quantity++;
      state.totalCount++;
      state.totalPrice += item.price;
    },
    decrease: (state, action) => {
      const item = state.items[action.payload];
      if (item.quantity > 1) {
        item.quantity--;
        state.totalCount--;
        state.totalPrice -= item.price;
      }
    },
    deleteItem: (state, action) => {
      const item = state.items[action.payload];
      state.totalCount -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      delete state.items[action.payload];
    }
  }
});

export const { addToCart, increase, decrease, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;