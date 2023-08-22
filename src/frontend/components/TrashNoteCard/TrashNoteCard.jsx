/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { ArrowPathIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  restoreTrashedNote,
  deleteTrashNote,
} from "../../../services/notesService";
import { renderTrashNote, renderNewNote } from "../../../store/notesSlice";
import { toast } from "react-toastify";

const TrashNoteCard = ({ data }) => {
  const { themeObject } = useSelector((state) => state.theme);
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="w-[25rem] rounded-2xl p-3 m-5"
        style={{
          color: themeObject.text,
          backgroundColor: themeObject.secondary,
        }}
      >
        <p className="font-bold text-xl">{data.title}</p>

        <div
          className="w-100% border-t-2 m-4"
          style={{ borderColor: themeObject.text }}
        ></div>

        <p>{data.body}</p>

        <div
          className="w-100% border-t-2 m-4"
          style={{ borderColor: themeObject.text }}
        ></div>

        <div className="w-[100%] flex justify-evenly">
          <span>Created on - {data.date.slice(0, 10)}</span>

          <ArrowPathIcon
            className="h-[30px] w-[30px] hover:scale-125"
            onClick={() => {
              restoreTrashedNote(data, authToken);
              dispatch(renderTrashNote());
              dispatch(renderNewNote());
              toast.success("Note restored!");
            }}
          />

          <TrashIcon
            className="h-[30px] w-[30px] hover:scale-125"
            onClick={() => {
              deleteTrashNote(data, authToken);
              dispatch(renderTrashNote());
              toast.success("Note deleted!");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TrashNoteCard;
