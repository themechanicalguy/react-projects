import { configureStore } from "@reduxjs/toolkit";

import { userReducers } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducers,
  },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
