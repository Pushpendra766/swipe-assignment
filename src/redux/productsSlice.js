import { createSlice } from "@reduxjs/toolkit";
import productData from "../utils/productData";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: productData,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const { id, updatedObject } = action.payload;
      const index = state.products.findIndex((obj) => obj.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedObject };
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
