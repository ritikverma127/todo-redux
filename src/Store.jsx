import { configureStore } from "@reduxjs/toolkit";
import fishReducer from "./Fish";

const store = configureStore({
  reducer: {
    user: fishReducer 
  }
});

export default store;
