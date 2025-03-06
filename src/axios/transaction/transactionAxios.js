import axios from "axios";

const BASE_URL = import.meta.env.PROD ? "" : import.meta.env.VITE_BASE_API_URL;
const TRANSACTION_ENDPOINT = "/api/transaction";

const API_URL = `${BASE_URL}${TRANSACTION_ENDPOINT}`;

// CREATE transaction | POST
export const createTransaction = (transactionObject, userId) => {
  const response = axios
    .post(`${API_URL}`, transactionObject, {
      headers: {
        authorization: userId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};
