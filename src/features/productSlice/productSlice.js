import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";
export const getProductThunk = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await commerce.products.list();
    console.log(data);
    return data;
  }
);

export const productSlice = createSlice({
  name: "getProduct",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    [getProductThunk.pending]: (state, { payload }) => {
      console.log("loading");
    },
    [getProductThunk.fulfilled]: (state, { payload }) => {
      console.log("done");
      return { ...state, products: payload };
    },
    [getProductThunk.rejected]: (state, { payload }) => {
      console.log("rejected");
    },
  },
});

export default productSlice.reducer;
export const getProductData = (state) => state?.getProduct?.products;
