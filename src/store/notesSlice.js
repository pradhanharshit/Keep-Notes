import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    mynotes: [],
    addNote: false,
  },
  reducers: {
    addNote(state) {
      state.addNote = !state.addNote;
    },
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
