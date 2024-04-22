import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import products from "./products";

export const fetchProducts = createAsyncThunk(
  "products/fetchListProducts",
  async () => {
    const res = await axios.get("https://websitebook-api.vercel.app/products");
    return res.data;
  }
);

const initialState = {
  products: [],
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  isCheckOut: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    gotoCheckOut: (state, action) => {
      state.isCheckOut = action.payload;
    },
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { gotoCheckOut, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
