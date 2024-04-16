import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/products";
import commentsSlice from "./slice/comments";
import categoriesSlice from "./slice/categories";
import cartSlice from "./slice/cart";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    comments: commentsSlice,
    categories: categoriesSlice,
    carts: cartSlice,
  },
});
