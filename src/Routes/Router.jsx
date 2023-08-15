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
import Home from "../frontend/components/Home/Home";
import Archives from "../frontend/components/Archives/Archives";
import Trash from "../frontend/components/Trash/Trash";
import Labels from "../frontend/components/Labels/Labels";
import PageNotFound from "../frontend/Pages/PageNotFound/PageNotFound";
import PrivateRoute from "../frontend/components/PrivateRoute/PrivateRoute";
// import Layout from "../frontend/components/Layout/Layout";
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
        </Route>
        <Route path="/" element={<App />}>
          <Route element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path="/mock" element={<MockAPI />} />
            <Route path="/archives" element={<Archives />} />
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
