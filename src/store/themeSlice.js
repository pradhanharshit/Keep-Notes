import { createSlice } from "@reduxjs/toolkit";

let prefTheme = localStorage.getItem("theme");
if (prefTheme === "") {
  prefTheme = "light";
}

let prefThemeObject = {};
if (prefTheme === "light") {
  prefThemeObject = {
    primary: "var(--light)",
    text: "var(--text-light)",
    secondary: "var(--sec-light)",
  };
} else {
  prefThemeObject = {
    primary: "var(--dark)",
    text: "var(--text-dark)",
    secondary: "var(--sec-dark)",
  };
}

const initialState = {
  themeObject: prefThemeObject,
  theme: prefTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action) {
      if (action.payload === "light") {
        state.themeObject = {
          primary: "var(--light)",
          text: "var(--text-light)",
          secondary: "var(--sec-light)",
        };
        state.theme = "light";
      } else {
        state.themeObject = {
          primary: "var(--dark)",
          text: "var(--text-dark)",
          secondary: "var(--sec-dark)",
        };
        state.theme = "dark";
      }
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
