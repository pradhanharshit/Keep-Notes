/* eslint-disable react/prop-types */
import "./NoteCard.css";
import { useSelector, useDispatch } from "react-redux";
import {
  PaperClipIcon,
  PencilIcon,
  ExclamationCircleIcon,
  TrashIcon,
  TagIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  editNoteHandler,
  archiveNoteHandler,
} from "../../../services/notesService";
import { renderNewNote, renderArchiveNote } from "../../../store/notesSlice";
import { toast } from "react-toastify";
import { ClickOutHandler } from "react-clickout-ts";

const NoteCard = ({ data }) => {
  const { themeObject } = useSelector((state) => state.theme);
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(data.title);
  const [editContent, setEditContent] = useState(data.body);
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);

  const [priorityBoxOpen, setPriorityBoxOpen] = useState(false);
  const [priorityValue, setPriorityValue] = useState("");

  return (
    <div key={data.id}>
      <div
        className="rounded-2xl w-[30rem] p-5 m-5"
        style={{
          backgroundColor: themeObject.secondary,
          color: themeObject.text,
        }}
      >
        <div>
          <header className="flex justify-between">
            {edit === true ? (
              <input
                className="p-3 w-[90%] rounded-xl mb-3"
                type="text"
                name=""
                id="title"
                placeholder="Title"
                style={{
                  backgroundColor: themeObject.primary,
                  color: themeObject.text,
                }}
                value={editTitle}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                }}
              />
            ) : (
              <div className="flex">
                <p className="font-bold text-xl">{data.title}</p>
                <div>
                  {data.priority !== "" ? (
                    <div
                      className="p-4 rounded-full h-3.5 w-3.5 ml-2"
                      style={{
                        backgroundColor:
                          data.priority === "high-priority"
                            ? "red"
                            : data.priority === "medium-priority"
                            ? "yellow"
                            : "green",
                      }}
                    ></div>
                  ) : null}
                </div>
              </div>
            )}
            <PaperClipIcon className="h-[25px] w-[25px]" />
          </header>
          <div
            className="w-100% border-t-2 m-4"
            style={{ borderColor: themeObject.text }}
          ></div>
          {edit === true ? (
            <textarea
              className="p-3 w-[90%] rounded-xl mb-3"
              type="text"
              id="content"
              placeholder="Content"
              style={{
                backgroundColor: themeObject.primary,
                color: themeObject.text,
              }}
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
              rows="4"
              cols="50"
            ></textarea>
          ) : (
            <main>
              <p>{data.body}</p>
            </main>
          )}
          {edit === true ? (
            <button
              className="bg-blue-400 py-2 px-4 rounded-xl
              "
              style={{ color: themeObject.color }}
              onClick={() => {
                if (editTitle !== "" && editContent !== "") {
                  editNoteHandler(
                    {
                      ...data,
                      title: editTitle,
                      body: editContent,
                    },
                    authToken
                  );
                  dispatch(renderNewNote());
                  setEdit(!edit);
                  toast.success("Note edited !");
                } else {
                  toast.warning("Title and Body can't be empty");
                }
              }}
            >
              Save
            </button>
          ) : null}
          <div
            className="w-100% border-t-2 m-4"
            style={{ color: themeObject.text }}
          ></div>
          <footer>
            <div className="flex justify-around">
              <p>created at - {data.date.slice(0, 9)}</p>
              <PencilIcon
                className="h-[25px] w-[25px]"
                onClick={() => setEdit(!edit)}
              />

              <div className="relative">
                <ExclamationCircleIcon
                  className="h-[25px] w-[25px]"
                  onClick={() => {
                    setPriorityBoxOpen(!priorityBoxOpen);
                  }}
                />

                <ClickOutHandler
                  onClickOut={() => {
                    console.log("called");
                    setPriorityBoxOpen(false);
                  }}
                >
                  <div>
                    {priorityBoxOpen && edit === false && (
                      <div
                        className="flex flex-col space-y-3 absolute w-max mt-2 p-4 rounded-2xl border-2 border-blue-400"
                        style={{ backgroundColor: themeObject.secondary }}
                      >
                        <div>
                          <input
                            className="priority mb-2"
                            type="radio"
                            name="priority"
                            id="high-priority"
                            value="high-priority"
                            onChange={(e) => setPriorityValue(e.target.value)}
                            checked={priorityValue === "high-priority"}
                          />
                          <label
                            className="priority__label"
                            htmlFor="high-priority"
                            style={{ color: themeObject.text }}
                            onClick={() => setPriorityValue("high-priority")}
                          >
                            High Priority
                          </label>
                        </div>

                        <div>
                          <input
                            className="priority mb-2"
                            type="radio"
                            name="priority"
                            id="medium-priority"
                            value="medium-priority"
                            onChange={(e) => setPriorityValue(e.target.value)}
                          />
                          <label
                            className="priority__label mb-4"
                            htmlFor="high-priority"
                            style={{ color: themeObject.text }}
                            onClick={() => setPriorityValue("high-priority")}
                          >
                            Medium Priority
                          </label>
                        </div>

                        <div>
                          <input
                            className="priority"
                            type="radio"
                            name="priority"
                            id="Low-priority"
                            value="Low-priority"
                            onChange={(e) => setPriorityValue(e.target.value)}
                          />
                          <label
                            className="priority__label"
                            htmlFor="high-priority"
                            style={{ color: themeObject.text }}
                            onClick={() => setPriorityValue("high-priority")}
                          >
                            Low Priority
                          </label>
                        </div>
                        <button
                          className="bg-blue-400 px-2 py-1 rounded-xl"
                          onClick={() => {
                            editNoteHandler(
                              {
                                ...data,
                                priority: priorityValue,
                              },
                              authToken
                            );
                            dispatch(renderNewNote());
                            toast.success("Priority set!");
                            setPriorityBoxOpen(false);
                          }}
                        >
                          Confirm
                        </button>
                      </div>
                    )}
                  </div>
                </ClickOutHandler>
              </div>

              <ArchiveBoxIcon
                className="h-[25px] w-[25px]"
                onClick={() => {
                  archiveNoteHandler(data, authToken);
                  dispatch(renderArchiveNote());
                  dispatch(renderNewNote());
                  toast.success("Note Archived !");
                }}
              />

              <TagIcon className="h-[25px] w-[25px]" />
              <TrashIcon className="h-[25px] w-[25px]" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
