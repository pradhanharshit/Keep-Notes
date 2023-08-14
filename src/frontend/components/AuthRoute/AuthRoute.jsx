import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const { authToken } = useSelector((state) => state.auth);
  return authToken !== null ? <Navigate to="/" replace={true} /> : <Outlet />;
};

export default AuthRoute;
