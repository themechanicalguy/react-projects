import { createSlice } from "@reduxjs/toolkit";

const charSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(10, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = charSlice.actions;
export default charSlice.reducer;
