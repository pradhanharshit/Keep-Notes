import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const { authToken } = useSelector((state) => state.auth);
  // console.log(authToken);
  return authToken !== null ? <Outlet /> : <Navigate to="/landing" />;
};

export default PrivateRoute;
