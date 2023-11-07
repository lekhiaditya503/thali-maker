import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  // cartTotal:0,
};

const odersSlice = createSlice({
  name: 'oders',
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items.push({
        ...newItem,
        quantity: 1,
      });
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.filter((item) => item.id !== id);
      state.items = existingItems;
     
    },
    clearCart(state) {
       state.items = []
       state.totalQuantity = 0;
      
     
    },
  },
});


export const odersActions = odersSlice.actions;
export default odersSlice;
