import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      const { payload } = action;
      state.transaction = payload;
    },
  },
});

const { reducer: transactionReducer, actions } = transactionSlice;
export const { setTransaction } = actions;

export default transactionReducer;
