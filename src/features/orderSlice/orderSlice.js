import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { stat } from "fs/promises";

const API_PATH = "http://localhost:9000";

export const placeOrderThunk = createAsyncThunk(
  "POSTPlaceOrder/placeOrderThunk",
  async ({ address, cartData, totalToPay }) => {
    console.log(address, cartData, totalToPay);
    const response = await fetch(`${API_PATH}/api/order`, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        address,
        products: cartData,
        amount: totalToPay,
      }),
    });
    return response.json();
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: { emptorData: [] },
  reducers: {
  
  },
  extraReducers: {
    [placeOrderThunk.pending]: (state, action) => {
      console.log("pending");
    },
    [placeOrderThunk.fulfilled]: (state, action) => {
      return { emptorData: action.payload };
    },
    [placeOrderThunk.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});
export default orderSlice.reducer;
