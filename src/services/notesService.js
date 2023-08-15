import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNoteHandler = async (note, authToken) => {
  console.log(note);
  // const { authToken } = useSelector((state) => state.auth);
  // console.log("trying");
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
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getAllNotes = async (note, authToken) => {
  // const { authToken } = useSelector((state) => state.auth);
  // console.log(note);
  // console.log("getnotes authtoken", authToken);
  // console.log("getallnotes called");
  try {
    const response = await axios.get("/api/notes", {
      headers: {
        authorization: authToken,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
