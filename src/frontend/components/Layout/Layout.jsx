/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
