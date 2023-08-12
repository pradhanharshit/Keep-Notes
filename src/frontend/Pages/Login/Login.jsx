import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { themeObject } = useSelector((state) => state.theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  return (
    <div
      className="h-[100vh] flex justify-center items-center"
      style={{ backgroundColor: themeObject.primary }}
    >
      <div
        className="login-container border-2 border-blue-400 p-10 text-center mr-7"
        style={{ backgroundColor: themeObject.secondary }}
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
          className="mr-1 mb-6"
          type="checkbox"
          onClick={() => {
            passwordType === "password"
              ? setPasswordType("text")
              : setPasswordType("password");
          }}
          id="passType"
        />
        <label
          className="text-sm "
          htmlFor="passType"
          style={{ color: themeObject.text }}
        >
          Show password
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
        <button
          className="login-button px-8 py-2 bg-blue-400 rounded-2xl"
          style={{ color: themeObject.text }}
          onClick={() => {}}
        >
          Test Login
        </button>

        <p className="text-lg mt-4" style={{ color: themeObject.text }}>
          Dont have a account?{" "}
          <Link to="/signup" className="text-blue-400">
            Signup
          </Link>
        </p>
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
