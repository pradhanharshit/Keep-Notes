import { useSelector, useDispatch } from "react-redux";
import NoteCard from "../NoteCard/NoteCard";
import NewNoteCard from "../NewNoteCard/NewNoteCard";
import { getAllNotes } from "../../../services/notesService";
import { useEffect } from "react";
import { addNotesToArray, changeLabelsArray } from "../../../store/notesSlice";

const Home = () => {
  const { themeObject } = useSelector((state) => state.theme);
  const { addNote, newNoteRender, filteredNotes } = useSelector(
    (state) => state.notes
  );
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getNotes = async () => {
    const response = await getAllNotes(authToken);
    dispatch(addNotesToArray(response.data.notes));
    return response.data;
  };

  const updateLabels = async () => {
    await getNotes();
    dispatch(changeLabelsArray());
  };

  useEffect(() => {
    updateLabels();
    // console.log("changed");
  }, [newNoteRender]);

  return (
    <>
      {/* addnote */}
      <div
        className="w-[100%]"
        style={{ display: addNote ? "flex" : "none", justifyContent: "center" }}
      >
        <NewNoteCard />
      </div>
      <div
        className="home text-center"
        style={{
          color: themeObject.text,
        }}
      >
        <h1 className="text-3xl font-semibold text-blue-400">My Notes</h1>
      </div>

      <div
        style={{
          display:
            filteredNotes.filter((note) => note.pinned === true).length > 0
              ? "block"
              : "none",
        }}
      >
        <p className="text-xl text-blue-400 text-center">Pinned Notes</p>
        <div className="flex space-x-1 flex-wrap items-center m-5">
          {filteredNotes
            .filter((note) => note.pinned === true)
            .map((note) => {
              return (
                <div key={note._id}>
                  <NoteCard data={note} />
                </div>
              );
            })}
        </div>
      </div>

      <div
        style={{
          display:
            filteredNotes.filter((note) => note.pinned === false).length > 0
              ? "block"
              : "none",
        }}
      >
        <p className="text-xl text-blue-400 text-center">Unpinned Notes</p>
        <div className="flex space-x-1 flex-wrap items-center m-5">
          {filteredNotes
            .filter((note) => note.pinned === false)
            .map((note) => {
              return (
                <div key={note._id}>
                  <NoteCard data={note} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
