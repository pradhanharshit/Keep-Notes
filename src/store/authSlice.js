import { createSlice } from "@reduxjs/toolkit";
import { loginHandler, signupHandler } from "../services/authService";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
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
    builder.addCase(loginHandler.fulfilled, (state, action) => {
      state.user = {
        username: action.payload.foundUser.firstname,
        _id: action.payload.foundUser._id,
      };
      state.authToken = action.payload.encodedToken;
    });
    builder.addCase(signupHandler.fulfilled, (state, action) => {
      state.user = {
        username: action.payload.createdUser.firstname,
        _id: action.payload.createdUser._id,
      };
      state.authToken = action.payload.encodedToken;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
