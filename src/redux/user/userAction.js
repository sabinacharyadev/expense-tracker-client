import { createUser } from "../../axios/user/userAxios";
import { setUser } from "./userSlice";
import { toast } from "react-toastify";

export const signUpUser = (userObject) => async (dispatch) => {
  const response = await createUser(userObject);

  if (response.status === "error") {
    return toast.error(response.message);
  }
  dispatch(setUser(response.data));
  toast.success(response.message);
};
