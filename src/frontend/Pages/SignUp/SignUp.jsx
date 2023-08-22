import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupHandler } from "../../../services/authService";

const SignUp = () => {
  const { themeObject } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
            dispatch(signupHandler({ email, password, firstName, lastName }));
          }}
        >
          <p className="text-3xl text-blue-400 mb-5">SignUp</p>
          <input
            className="text-center border-2 border-blue-400 p-1 m-1 w-[250px] rounded-xl mb-3"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            placeholder="First Name"
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
          />{" "}
          <br />
          <input
            className="text-center border-2 border-blue-400 p-1 m-1 w-[250px] rounded-xl mb-3"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder="Last Name"
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
          />{" "}
          <br />
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
            style={{ color: themeObject.text }}
            type="submit"
            className="login__button px-6 py-2 bg-blue-400 rounded-2xl"
            value="Sign Up"
            disabled={
              email === "" ||
              password === "" ||
              firstName === "" ||
              lastName === ""
            }
          />
          <br />
          <p className="text-lg mt-4" style={{ color: themeObject.text }}>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
