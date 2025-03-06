import { createUser, getAuthUser } from "../../axios/user/userAxios";
import { setUser } from "./userSlice";
import { toast } from "react-toastify";

export const signUpUser = (userObject) => async () => {
  const response = await createUser(userObject);

  if (response.status === "error") {
    return toast.error(response.message);
  }
  toast.success(response.message);
};

export const loginUser = (userObject) => async (dispatch) => {
  const response = await getAuthUser(userObject);
  if (response.status === "error") {
    return toast.error(response.message);
  }
  dispatch(setUser(response.data));
  toast.success(response.message);
};
