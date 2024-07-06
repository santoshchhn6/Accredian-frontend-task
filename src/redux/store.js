import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    app: appSlice.reducer,
  },
});

export default store;
