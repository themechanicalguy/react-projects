import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reudcers: {},
});

export const userReducers = usersSlice.reducer;
