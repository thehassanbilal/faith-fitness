import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_PATH = 'http://localhost:1337';

export const placeOrderThunk = createAsyncThunk(
  'POSTPlaceOrder/placeOrderThunk',
  async ({
    name,
    email,
    contact,
    postalCode,
    address,
    cartData,
    totalToPay,
  }) => {
    console.log(
      name,
      email,
      contact,
      postalCode,
      address,
      cartData,
      totalToPay
    );
    const response = await fetch(`${API_PATH}/new-orders`, {
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        contact: contact,
        postalCode: postalCode,
        address: address,
        products: cartData,
        total_to_pay: totalToPay,
      }),
    });
    const data = await response?.json();
    console.log(data);
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: { emptorData: [] },
  reducers: [],
  extraReducers: {
    [placeOrderThunk.pending]: (state, action) => {
      console.log('pending');
    },
    [placeOrderThunk.fulfilled]: (state, action) => {
      return { ...state, emptorData: action.payload };
    },
    [placeOrderThunk.rejected]: (state, action) => {
      console.log('rejected');
    },
  },
});
