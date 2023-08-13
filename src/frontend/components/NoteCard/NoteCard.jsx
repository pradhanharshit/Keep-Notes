import "./NoteCard.css";
import { useSelector } from "react-redux";
import {
  PaperClipIcon,
  PencilIcon,
  ExclamationCircleIcon,
  TrashIcon,
  BookmarkIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import notes from "../../../samplenotes";

const NoteCard = () => {
  const { themeObject } = useSelector((state) => state.theme);

  const mynotes = notes.map((note) => {
    return (
      <div key={note.id}>
        <div
          className="rounded-2xl w-[30rem] p-5 m-5"
          style={{
            backgroundColor: themeObject.secondary,
            color: themeObject.text,
          }}
        >
          <div>
            <header className="flex justify-between">
              <p className="font-bold text-xl">{note.title}</p>
              <PaperClipIcon className="h-[25px] w-[25px]" />
            </header>
            <div
              className="w-100% border-t-2 m-4"
              style={{ borderColor: themeObject.text }}
            ></div>
            <main>
              <p>{note.content}</p>
            </main>
            <div
              className="w-100% border-t-2 m-4"
              style={{ borderColor: themeObject.text }}
            ></div>
            <footer>
              <div className="flex justify-around">
                <p>created at-</p>
                <PencilIcon className="h-[25px] w-[25px]" />
                <ExclamationCircleIcon className="h-[25px] w-[25px]" />
                <ArchiveBoxIcon className="h-[25px] w-[25px]" />
                <BookmarkIcon className="h-[25px] w-[25px]" />
                <TrashIcon className="h-[25px] w-[25px]" />
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  });

  return <div className="flex flex-col">{mynotes}</div>;
};

export default NoteCard;
