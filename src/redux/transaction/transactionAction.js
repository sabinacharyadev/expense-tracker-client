import { createTransaction } from "../../axios/transaction/transactionAxios";
import { toast } from "react-toastify";

export const addTransaction = (transactionObject, userId) => async () => {
  const response = await createTransaction(transactionObject, userId);
  if (response.status === "error") {
    return toast.error(response.message);
  }
  toast.success(response.message);
};
