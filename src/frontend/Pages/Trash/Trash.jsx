import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTrashedNotes } from "../../../services/notesService";
import { addTrashedNotesToArray } from "../../../store/notesSlice";
import TrashNoteCard from "../../components/TrashNoteCard/TrashNoteCard";

const Trash = () => {
  const { trashNoteRender, trashedNotes } = useSelector((state) => state.notes);
  const { authToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const getTrashNotes = async () => {
    const response = await getAllTrashedNotes(authToken);
    // console.log(response.data);
    dispatch(addTrashedNotesToArray(response.data.trash));
    // console.log(trashedNotes);
  };

  useEffect(() => {
    getTrashNotes();
  }, [trashNoteRender]);

  return (
    <>
      <p className="text-3xl font-semibold text-blue-400 text-center mb-2">
        Trashed Notes
      </p>
      {trashedNotes.length === 0 ? (
        <div className="text-center">
          <p className="font-bold text-xl text-blue-400">
            Nothing here yet...!!
          </p>
        </div>
      ) : (
        <>
          {trashedNotes.map((trashNote) => {
            return <TrashNoteCard key={trashNote._id} data={trashNote} />;
          })}
        </>
      )}
    </>
  );
};

export default Trash;
