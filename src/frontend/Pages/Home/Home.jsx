import { useSelector, useDispatch } from "react-redux";
import NoteCard from "../../components/NoteCard/NoteCard";
import NewNoteCard from "../../components/NewNoteCard/NewNoteCard";
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
        <h1 className="text-3xl font-semibold text-blue-400 mb-2">My Notes</h1>
      </div>

      {filteredNotes.length === 0 ? (
        <div className="text-center">
          <p className="font-bold text-xl text-blue-400">
            Nothing here yet...!!
          </p>
        </div>
      ) : (
        <>
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
      )}
    </>
  );
};

export default Home;
