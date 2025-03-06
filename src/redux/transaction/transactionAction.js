import {
  createTransaction,
  getTransactions,
} from "../../axios/transaction/transactionAxios";
import { toast } from "react-toastify";
import { setTransaction } from "./transactionSlice";

export const addTransaction = (transactionObject, userId) => async () => {
  const response = await createTransaction(transactionObject, userId);
  if (response.status === "error") {
    return toast.error(response.message);
  }
  toast.success(response.message);
};

export const showTransactions = (userId) => async (dispatch) => {
  const response = await getTransactions(userId);
  if (response.status === "error") {
    return toast.error(response.message);
  }
  dispatch(setTransaction(response.data));
};
