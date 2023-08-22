import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginHandler = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberme }) => {
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      if (rememberme) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: res.data.foundUser.username,
            _id: res.data.foundUser._id,
          })
        );
        localStorage.setItem("token", res.data.encodedToken);
      }
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const signupHandler = createAsyncThunk(
  "auth/signup",
  async ({ email, password, firstName, lastName }) => {
    console.log("try");
    try {
      const res = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log("yha");
      console.log(err);
    }
  }
);
