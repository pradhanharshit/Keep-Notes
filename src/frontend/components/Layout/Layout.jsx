/* eslint-disable react/prop-types */
// import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Layout = ({ children }) => {
  const { themeObject } = useSelector((state) => state.theme);
  return (
    <div>
      <Navbar />
      <div
        className="flex h-[80vh]"
        style={{ backgroundColor: themeObject.primary }}
      >
        <Sidebar />
        <div>{children}</div>
        {/* <Outlet /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
