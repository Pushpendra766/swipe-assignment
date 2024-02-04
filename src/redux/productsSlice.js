import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        name: "Choco",
        sellingPrice: 30,
        buyingPrice: 25,
        quantityAvailable: 20,
      },
      {
        id: 2,
        name: "Water Bottle",
        sellingPrice: 20,
        buyingPrice: 15,
        quantityAvailable: 30,
      },
      {
        id: 3,
        name: "Toothbrush",
        sellingPrice: 25,
        buyingPrice: 20,
        quantityAvailable: 60,
      },
      {
        id: 4,
        name: "Textbook",
        sellingPrice: 50,
        buyingPrice: 45,
        quantityAvailable: 30,
      },
    ],
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
