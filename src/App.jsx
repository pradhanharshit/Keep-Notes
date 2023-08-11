import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./store/themeSlice";
import { Outlet } from "react-router-dom";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Theme
  const { themeObject, theme } = useSelector((state) => state.theme);
  console.log(themeObject);

  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme === "light") {
      dispatch(toggleTheme("dark"));
    } else {
      dispatch(toggleTheme("light"));
    }
  };

  // Toast
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <Outlet />
      <div
        className="font-bold text-3xl"
        style={{
          backgroundColor: themeObject.primary,
          color: themeObject.text,
        }}
      >
        keeper notes app
      </div>
      <button style={{}} onClick={changeTheme}>
        Toggle
      </button>
      <div>
        <button onClick={showToastMessage}>Notify</button>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
