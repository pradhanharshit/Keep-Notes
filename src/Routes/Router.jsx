import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// Route Elements
import App from "../App";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<App />}></Route>)
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
