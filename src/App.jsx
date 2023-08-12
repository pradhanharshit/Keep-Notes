import "./App.css";
import { Outlet } from "react-router-dom";

// Toastify
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./frontend/components/Layout/Layout";
// import Layout from "./frontend/components/Layout/Layout";

function App() {
  // const showToastMessage = () => {
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  return (
    <>
      {/* <Layout>
        <div className="min-h-[80vh]">
          <div>
            <button onClick={showToastMessage}>Notify</button>
            <ToastContainer />
          </div>
        </div>
      </Layout> */}
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
