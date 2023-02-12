import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "song toan ",
    age: "27",
    about: "software ",
    avaUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/224.jpg",
    themeColor: "#00ff00",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      console.log("state:", state);
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
