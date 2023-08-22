import { createSlice } from "@reduxjs/toolkit";
import { loginHandler, signupHandler } from "../services/authService";

const initialState = {
  user: {},
  username: "",
  authToken: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.user = null;
      state.authToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginHandler.fulfilled, (state, action) => {
        state.user = action.payload.foundUser;
        state.username = state.user.firstName + " " + state.user.lastName;
        state.authToken = action.payload.encodedToken;
      })
      .addCase(loginHandler.pending, () => {
        console.log("Invalid username or password");
      });
    builder
      .addCase(signupHandler.fulfilled, (state, action) => {
        state.user = {
          username: action.payload.createdUser.firstname,
          _id: action.payload.createdUser._id,
        };
        state.authToken = action.payload.encodedToken;
      })
      .addCase(signupHandler.pending, () => {
        console.log("User already exists");
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
