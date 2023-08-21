/* eslint-disable react/prop-types */
import Navbar from "../src/frontend/components/NavBar/Navbar";
import Footer from "../src/frontend/components/Footer/Footer";
import Sidebar from "../src/frontend/components/Sidebar/Sidebar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { themeObject } = useSelector((state) => state.theme);
  // const { authToken } = useSelector((state) => state.auth);
  const authToken = localStorage.getItem("token");
  console.log("app", authToken);
  return (
    <div className="layout-navbar">
      <Navbar />
      <div
        className="flex h-[80vh]"
        style={{ backgroundColor: themeObject.primary }}
      >
        <Sidebar />
        <div className="layout-mid-left w-4/5">
          <Outlet />
        </div>
      </div>
      <div className="layout-footer">
        <Footer />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;
