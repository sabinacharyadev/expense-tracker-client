import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import transactionReducer from "./redux/transaction/transactionSlice";

const store = configureStore({
  reducers: {
    user: userReducer,
    transaction: transactionReducer,
  },
});

export default store;
