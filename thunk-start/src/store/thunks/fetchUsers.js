import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3001/users");
  // await pause(10000);
  return response.data;
});

//DEV Only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

//fetchUsers.pending === 'user/fetch/pending'
// fetchUsers.fulfilled
//fetchUsers.rejected

export { fetchUser };
