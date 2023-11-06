import { configureStore } from "@reduxjs/toolkit";

import odersSlice from "./oders/oderstReducer";

const store = configureStore({
  reducer: { orders: odersSlice.reducer },
});

export default store;
