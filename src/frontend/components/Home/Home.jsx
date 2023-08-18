import { useSelector, useDispatch } from "react-redux";
import NoteCard from "../NoteCard/NoteCard";
import NewNoteCard from "../NewNoteCard/NewNoteCard";
import { getAllNotes } from "../../../services/notesService";
import { useEffect } from "react";
import { addNotesToArray } from "../../../store/notesSlice";

const Home = () => {
  const { themeObject } = useSelector((state) => state.theme);
  const { addNote, newNoteRender, mynotes } = useSelector(
    (state) => state.notes
  );
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getNotes = async () => {
    const response = await getAllNotes(authToken);
    // console.log(response.data);
    // if (response.data.notes.length !== 0) {
    dispatch(addNotesToArray(response.data.notes));
    // }
    // console.log("mynotes updated");
    // console.log("getnotes res", response.data.notes);
    return response.data;
  };

  useEffect(() => {
    getNotes();
  }, [newNoteRender]);

  // console.log("mynotes", mynotes);

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

      <div className="flex flex-col items-center m-5">
        {mynotes.map((note) => {
          return (
            <div key={note._id}>
              <NoteCard key={note._id} data={note} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
