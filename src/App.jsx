import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "./store/themeSlice";
import { Outlet } from "react-router-dom";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./frontend/components/Layout/Layout";

function App() {
  // Theme
  // const { themeObject, theme } = useSelector((state) => state.theme);
  // console.log(themeObject);

  // const dispatch = useDispatch();

  // const changeTheme = () => {
  //   if (theme === "light") {
  //     dispatch(toggleTheme("dark"));
  //   } else {
  //     dispatch(toggleTheme("light"));
  //   }
  // };

  // Toast
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <Layout>
        <div className="h-[85vh]">
          <div>
            <button onClick={showToastMessage}>Notify</button>
            <ToastContainer />
          </div>
        </div>
      </Layout>
      <Outlet />
    </>
  );
}

export default App;
