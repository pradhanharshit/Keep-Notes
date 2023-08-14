import { Link } from "react-router-dom";
import "./LandingPage.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const LandingPage = () => {
  const { themeObject } = useSelector((state) => state.theme);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("land", user);
  return (
    <div
      className="landing-display h-[100vh]"
      style={{ backgroundColor: themeObject.primary }}
    >
      <div className="landing-text w-[30vw]">
        <h1 className="title text-[40px] font-bold text-blue-400">
          Keep Notes
        </h1>
        <p
          className="about text-[30px] font-bold"
          style={{ color: themeObject.text }}
        >
          Capture Brilliance, Unleash Creativity, Elevate Your Productivity
        </p>
        <div className="m-5">
          <Link
            to="/login"
            className="login-button px-8 py-2 bg-blue-400 rounded-2xl"
            style={{ color: themeObject.text }}
          >
            Get Started
          </Link>
          <p className="text-lg mt-4" style={{ color: themeObject.text }}>
            Dont have a account?{" "}
            <Link to="/signup" className="text-blue-400">
              Signup
            </Link>
          </p>
        </div>
      </div>
      <img
        src="landingimage.png"
        alt="taking-notes"
        className="landing-image h-[40rem] w-[40rem]"
      />
    </div>
  );
};

export default LandingPage;
