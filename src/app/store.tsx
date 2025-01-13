import { configureStore } from "@reduxjs/toolkit";
import apiAuthReducer from "../features/apiauth/apiAuthSlice";

export const store = configureStore({
  reducer: {
    apiauth: apiAuthReducer,
  },
});
