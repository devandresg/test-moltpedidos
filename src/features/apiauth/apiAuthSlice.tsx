import { createSlice } from "@reduxjs/toolkit";

const savedApiAuthState = localStorage.getItem("apiAuthState");

const apiAuthSlice = createSlice({
  name: "apiauth",
  initialState: savedApiAuthState || "",
  reducers: {
    setToken(_, action) {
      localStorage.setItem("apiAuthState", action.payload);
      return action.payload;
    },
    clearToken() {
      localStorage.setItem("apiAuthState", "");
      return "";
    },
  },
});

export const { setToken, clearToken } = apiAuthSlice.actions;
export default apiAuthSlice.reducer;
