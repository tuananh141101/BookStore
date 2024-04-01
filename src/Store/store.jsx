import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./api/products";
import commentsSlice from "./api/comments";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    comments: commentsSlice,
  },
});
