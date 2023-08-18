/* eslint-disable react/prop-types */
import { ArrowPathIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  restoreArchivedNote,
  deleteArchiveNote,
} from "../../../services/notesService";
import { renderArchiveNote, renderNewNote } from "../../../store/notesSlice";
import { toast } from "react-toastify";

const Archives = ({ data }) => {
  const { themeObject } = useSelector((state) => state.theme);
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="w-[60%] rounded-2xl p-3 m-5"
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
          <span>created on - {data.date.slice(0, 9)}</span>

          <ArrowPathIcon
            className="h-[30px] w-[30px]"
            onClick={() => {
              restoreArchivedNote(data, authToken);
              dispatch(renderArchiveNote());
              dispatch(renderNewNote());
              toast.success("Note restored!");
            }}
          />

          <TrashIcon
            className="h-[30px] w-[30px]"
            onClick={() => {
              deleteArchiveNote(data, authToken);
              dispatch(renderArchiveNote());
              toast.success("Note deleted!");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Archives;
