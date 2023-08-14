import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginHandler } from "../../../services/authService";

const Login = () => {
  const { themeObject } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [rememberMe, setRememberMe] = useState(false);

  const testLoginHandler = () => {
    setEmail("test@gmail.com");
    setPassword("test");
    setRememberMe(true);
  };

  return (
    <div
      className="h-[100vh] flex justify-center items-center"
      style={{ backgroundColor: themeObject.primary }}
    >
      <div
        className="login-container border-2 border-blue-400 p-10 text-center mr-7"
        style={{ backgroundColor: themeObject.secondary }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginHandler({ email, password, rememberMe }));
          }}
        >
          <p className="text-3xl text-blue-400 mb-5">Login</p>

          <input
            className="text-center border-2 border-blue-400 p-1 m-1 w-[250px] rounded-xl mb-3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
          />
          <br />
          <input
            className=" text-center border-2 border-blue-400 rounded-xl p-1  w-[250px] mb-2"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={passwordType}
            placeholder="Password"
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
          />
          <br />
          <input
            className="mr-1 mb-3"
            type="checkbox"
            onClick={() => {
              passwordType === "password"
                ? setPasswordType("text")
                : setPasswordType("password");
            }}
            id="passType"
          />
          <label
            className="text-sm"
            htmlFor="passType"
            style={{ color: themeObject.text }}
          >
            Show password
          </label>
          <br />

          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="rememberMe mb-3 mr-1"
          />
          <label
            className="text-sm"
            htmlFor="rememberMe"
            style={{ color: themeObject.text }}
          >
            Remember Me
          </label>
          <br />

          <button
            className="login-button px-8 py-2 bg-blue-400 rounded-2xl mb-2"
            style={{ color: themeObject.text }}
            onClick={() => {}}
          >
            Login
          </button>
          <br />
          <input
            style={{ color: themeObject.text }}
            type="submit"
            className="login__button px-6 py-2 bg-blue-400 rounded-2xl"
            value="Login with Test Credentials"
            onClick={testLoginHandler}
          />

          <p className="text-lg mt-4" style={{ color: themeObject.text }}>
            Dont have a account?{" "}
            <Link to="/signup" className="text-blue-400">
              Signup
            </Link>
          </p>
        </form>
      </div>
      <img
        src="loginimage.png"
        alt="taking-notes"
        className="login-image h-[25rem] w-[25rem]"
      />
    </div>
  );
};

export default Login;
