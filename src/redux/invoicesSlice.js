import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      const { id, updatedInvoice } = action.payload;
      const index = state.findIndex((invoice) => invoice.id === Number(id));
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedInvoice };
      }
    },
    updateInvoiceItem: (state, action) => {
      const { productId, updatedItem } = action.payload;
      state.forEach((invoice, idx) => {
        if (
          invoice.items.some(
            (item) => String(item.itemId) === String(productId)
          )
        ) {
          const index = invoice.items.findIndex(
            (item) => item.itemId === productId
          );
          state[idx].items[index] = {
            ...state[idx].items[index],
            ...updatedItem,
          };
        }
      });
    },
  },
});

export const { addInvoice, deleteInvoice, updateInvoice, updateInvoiceItem } =
  invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
