import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  return user?._id ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
