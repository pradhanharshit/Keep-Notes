import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// Route Elements
import App from "../App";
import LandingPage from "../frontend/Pages/LandingPage/LandingPage";
import Login from "../frontend/Pages/Login/Login";
import SignUp from "../frontend/Pages/SignUp/SignUp";
import Home from "../frontend/Pages/Home/Home";
import Archive from "../frontend/Pages/Archive/Archive";
import Trash from "../frontend/Pages/Trash/Trash";
import Labels from "../frontend/Pages/Labels/Labels";
import PageNotFound from "../frontend/Pages/PageNotFound/PageNotFound";
import PrivateRoute from "../frontend/components/PrivateRoute/PrivateRoute";
import AuthRoute from "../frontend/components/AuthRoute/AuthRoute";
import { MockAPI } from "../frontend/Pages/Mockman/Mockman";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<PageNotFound />} />

        <Route element={<AuthRoute />}>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<App />}>
          <Route element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path="/mock" element={<MockAPI />} />
            <Route path="/archives" element={<Archive />} />
            <Route path="/labels" element={<Labels />} />
            <Route path="/trash" element={<Trash />} />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
