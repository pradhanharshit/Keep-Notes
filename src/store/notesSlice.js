import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    mynotes: [],
    filteredNotes: [],
    archivedNotes: [],
    trashedNotes: [],
    labelsArray: [],
    addNote: false,
    newNoteRender: true,
    noteAdded: true,
    archiveNoteRender: true,
    trashNoteRender: true,
    dateSort: "",
    priorityFilter: "",
    searchFilter: "",
    labelFilter: "",
  },
  reducers: {
    addNote(state) {
      state.addNote = !state.addNote;
    },
    addNotesToArray(state, action) {
      state.mynotes = [...action.payload];
      state.noteAdded = !state.noteAdded;
    },
    renderNewNote(state) {
      state.newNoteRender = !state.newNoteRender;
    },
    renderArchiveNote(state) {
      state.archiveNoteRender = !state.archiveNoteRender;
    },
    renderTrashNote(state) {
      state.trashNoteRender = !state.trashNoteRender;
    },
    addArchivesNotesToArray(state, action) {
      state.archivedNotes = [...action.payload];
    },
    addTrashedNotesToArray(state, action) {
      state.trashedNotes = [...action.payload];
    },
    changeLabelsArray(state) {
      state.labelsArray.length = 0;
      for (let i = 0; i < state.mynotes.length; i++) {
        const note = state.mynotes[i];
        for (let j = 0; j < note.tags.length; j++) {
          const tag = note.tags[j];
          state.labelsArray.push(tag);
        }
      }
      state.labelsArray = state.labelsArray.filter(
        (item, index) => state.labelsArray.indexOf(item) === index
      );
    },
    addFilteredNotes(state, action) {
      state.filteredNotes = action.payload;
    },
    setDateSort(state, action) {
      state.dateSort = action.payload;
    },
    setPriorityFilter(state, action) {
      state.priorityFilter = action.payload;
    },
    setlabelFilter(state, action) {
      state.labelFilter = action.payload;
    },
    setSearchFilter(state, action) {
      state.searchFilter = action.payload;
    },
  },
});

export const {
  addNote,
  renderNewNote,
  addNotesToArray,
  renderArchiveNote,
  addArchivesNotesToArray,
  changeLabelsArray,
  addTrashedNotesToArray,
  renderTrashNote,
  addFilteredNotes,
  setDateSort,
  setPriorityFilter,
  setSearchFilter,
  setlabelFilter,
} = notesSlice.actions;
export default notesSlice.reducer;
