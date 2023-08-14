import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const addNoteHandler = createAsyncThunk("notes/add", async (note) => {
  const { authToken } = useSelector((state) => state.auth);
  try {
    const response = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return response.data;
    // setNewNoteRender(!newNoteRender);
  } catch (err) {
    console.log(err);
  }
});
