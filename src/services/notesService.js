import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNoteHandler = async (note, authToken) => {
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

export const getAllNotes = async (authToken) => {
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

export const editNoteHandler = async (note, authToken) => {
  try {
    const response = await axios.post(
      `api/notes/${note._id}`,
      {
        note,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const archiveNoteHandler = async (note, authToken) => {
  try {
    // console.log;
    const response = await axios.post(
      `api/notes/archives/${note._id}`,
      {
        note,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    // console.log("arch res", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllArchivedNotes = async (authToken) => {
  try {
    const response = await axios.get("/api/archives", {
      headers: {
        authorization: authToken,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
