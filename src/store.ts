import { configureStore } from "@reduxjs/toolkit";
import manwhaReducer from "./data/redux/manwhaSoloSlice";

export const store = configureStore({
  reducer: {
    manwha: manwhaReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
