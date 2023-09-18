import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  console.log(user);
  const response = await axios.delete(`http://localhost:3001/users/${user.id}`);

  return user;
  //return response.data
});

export { removeUser };
