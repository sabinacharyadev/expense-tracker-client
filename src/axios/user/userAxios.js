import axios from "axios";

const BASE_URL = import.meta.env.PROD ? "" : import.meta.env.VITE_BASE_API_URL;

const USER_ENDPOINT = "/api/user";

const API_BASE_URL = `${BASE_URL}${USER_ENDPOINT}`;

export const createUser = (userObject) => {
  const response = axios
    .post(`${API_BASE_URL}/signup`, userObject)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};
