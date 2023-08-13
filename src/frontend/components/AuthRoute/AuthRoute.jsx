import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const { authToken } = useSelector((state) => state.auth);
  return authToken !== "" ? (
    <Navigate to="/landing" replace={true} />
  ) : (
    <Outlet />
  );
};

export default AuthRoute;
