import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    mynotes: [],
    archivedNotes: [],
    addNote: false,
    newNoteRender: true,
    archiveNoteRender: true,
  },
  reducers: {
    addNote(state) {
      state.addNote = !state.addNote;
    },
    addNotesToArray(state, action) {
      state.mynotes = [...action.payload];
    },
    renderNewNote(state) {
      state.newNoteRender = !state.newNoteRender;
      // console.log("render new", state.mynotes);
    },
    renderArchiveNote(state) {
      state.archiveNoteRender = !state.archiveNoteRender;
    },
    addArchivesNotesToArray(state, action) {
      state.archivedNotes = [...action.payload];
      console.log(state.archivedNotes);
    },
  },
});

export const {
  addNote,
  renderNewNote,
  addNotesToArray,
  renderArchiveNote,
  addArchivesNotesToArray,
} = notesSlice.actions;
export default notesSlice.reducer;
