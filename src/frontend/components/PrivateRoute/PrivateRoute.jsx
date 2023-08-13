import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const { authToken } = useSelector((state) => state.auth);
  return authToken !== "" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
