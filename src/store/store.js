import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import authSlice from "./authSlice";
import notesSlice from "./notesSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
    notes: notesSlice,
  },
});

export default store;
