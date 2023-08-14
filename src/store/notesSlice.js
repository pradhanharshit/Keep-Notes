import { createSlice } from "@reduxjs/toolkit";
import { addNoteHandler } from "../services/notesService";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    addNote: false,
  },
  reducers: {
    addNote(state) {
      state.addNote = !state.addNote;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNoteHandler.fulfilled, (state, action) => {
      state.notes = action.payload;
      console.log(state.notes);
    });
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
