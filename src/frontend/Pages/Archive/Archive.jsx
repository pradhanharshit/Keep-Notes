import { useEffect } from "react";
import ArchivedNoteCard from "../../components/ArchivedNoteCard/ArchivedNoteCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllArchivedNotes } from "../../../services/notesService";
import { addArchivesNotesToArray } from "../../../store/notesSlice";

const Archive = () => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const { archiveNoteRender, archivedNotes } = useSelector(
    (state) => state.notes
  );
  // console.log(archiveNoteRender);
  const getArchives = async () => {
    const response = await getAllArchivedNotes(authToken);
    // console.log("response", response.data.archives);
    dispatch(addArchivesNotesToArray(response.data.archives));
  };
  useEffect(() => {
    getArchives();
  }, [archiveNoteRender]);
  return (
    <div className="home text-center">
      <h1 className="text-3xl font-semibold text-blue-400 mb-2">
        Archived Notes
      </h1>
      {archivedNotes.length === 0 ? (
        <div className="text-center">
          <p className="font-bold text-xl text-blue-400">
            Nothing here yet...!!
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center m-4">
            {archivedNotes.map((archivenote) => {
              return (
                <ArchivedNoteCard key={archivenote._id} data={archivenote} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Archive;
