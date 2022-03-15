import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";

const API_PATH = "http://localhost:9000";

export const signupThunk = createAsyncThunk(
  "POSTSignup/signupThunk",
  async ({ username, email, password }) => {
    console.log(username, email, password);
    const data = await fetch(`${API_PATH}/api/auth/register`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const jsonData = await data?.json();
    return jsonData;
  }
);

export const signinThunk = createAsyncThunk(
  "POSTSignin/signinThunk",
  async ({ email, password }) => {
    const response = await fetch(`${API_PATH}/login`, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });
    console.log(response);
    return response.json();
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: { signupData: {}, signinData: {} },
  reducer: {
    signup(state, action) {},
    signin(state, action) {},
  },
  extraReducers: {
    [signupThunk.pending]: (state, action) => {
      console.log("pending");
    },
    [signupThunk.fulfilled]: (state, action) => {
      return { ...state, signupData: action.payload };
    },
    [signupThunk.rejected]: (state, action) => {
      console.log("rejected");
    },
    [signinThunk.pending]: (state, action) => {
      console.log("pending");
    },
    [signinThunk.fulfilled]: (state, action) => {
      return { ...state, signinData: action.payload };
    },
    [signinThunk.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export default authSlice;
export const signupData = (state) => state?.authSlice?.signupData;
