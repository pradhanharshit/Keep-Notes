import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotesToArray, changeLabelsArray } from "../../../store/notesSlice";
import { getAllNotes } from "../../../services/notesService";
import NoteCard from "../../components/NoteCard/NoteCard";

const Labels = () => {
  const { labelsArray, newNoteRender, mynotes } = useSelector(
    (state) => state.notes
  );
  const { authToken } = useSelector((state) => state.auth);
  const { themeObject } = useSelector((state) => state.theme);
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
  }, [newNoteRender]);

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-blue-400">Labels</h1>
      </div>
      <div>
        {labelsArray.length === 0 ? (
          <div className="text-center">
            <p className="font-bold text-xl text-blue-400">
              Nothing here yet...!!
            </p>
          </div>
        ) : (
          <div>
            {labelsArray.map((label, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-[20%] text-center p-1 rounded-2xl border-2 border-blue-400"
                    style={{ backgroundColor: themeObject.secondary }}
                  >
                    <p className="font-bold text-2xl text-blue-400">{label}</p>
                  </div>
                  <div className="flex flex-wrap space-2">
                    {mynotes
                      .filter((notes) => notes.tags.includes(label))
                      .map((note) => {
                        return <NoteCard key={Node._id} data={note} />;
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Labels;
