import { configureStore } from "@reduxjs/toolkit";
import totalReducer from "../features/totalSlice/totalSlice";
export const store = configureStore({
  reducer: {
    total: totalReducer,
  },
});
