/* eslint-disable react/prop-types */
import "./NoteCard.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  PaperClipIcon,
  PencilIcon,
  ExclamationCircleIcon,
  TrashIcon,
  TagIcon,
  ArchiveBoxIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { ClickOutHandler } from "react-clickout-ts";
import {
  editNoteHandler,
  archiveNoteHandler,
  trashNoteHandler,
} from "../../../services/notesService";
import { renderNewNote, renderArchiveNote } from "../../../store/notesSlice";
import { toast } from "react-toastify";

const NoteCard = ({ data }) => {
  const dispatch = useDispatch();

  const { themeObject } = useSelector((state) => state.theme);
  const { authToken } = useSelector((state) => state.auth);

  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(data.title);
  const [editContent, setEditContent] = useState(data.body);

  const [priorityBoxOpen, setPriorityBoxOpen] = useState(false);
  const [priorityValue, setPriorityValue] = useState("");

  const [addTagOpen, setaddTagOpen] = useState(false);
  const [addTag, setAddTag] = useState("");

  const removeTag = (tag) => {
    // console.log("tag", tag);
    const removedTagArray = data.tags.filter((t) => t !== tag);
    // console.log("removedTagArray", removedTagArray);
    return removedTagArray;
  };

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
            <PaperClipIcon className="h-[25px] w-[25px] hover:scale-125 cursor-pointer" />
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
              className="bg-blue-400 py-2 px-4 rounded-xl mb-2
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
            style={{ borderColor: themeObject.text }}
          ></div>

          {edit === false && (
            <div className="flex space-x-2 flex-wrap mb-4">
              {data.tags.map((tag, index) => {
                return (
                  <div
                    className="p-2 rounded-xl flex space-x-2 items-center"
                    key={index}
                    style={{ backgroundColor: themeObject.primary }}
                  >
                    <p
                      className="font-bold"
                      style={{ color: themeObject.text }}
                    >
                      {tag}
                    </p>
                    <XCircleIcon
                      className="h-[25px] w-[25px] cursor-pointer"
                      onClick={() => {
                        const getTagArray = removeTag(tag);
                        editNoteHandler(
                          {
                            ...data,
                            tags: [...getTagArray],
                          },
                          authToken
                        );
                        dispatch(renderNewNote());
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}

          <footer>
            <div className="flex justify-around">
              <p>Created on - {data.date.slice(0, 10)}</p>
              <PencilIcon
                className="h-[25px] w-[25px] hover:scale-125 cursor-pointer"
                onClick={() => setEdit(!edit)}
              />

              <div className="relative">
                <ExclamationCircleIcon
                  className="h-[25px] w-[25px] hover:scale-125 cursor-pointer"
                  onClick={() => {
                    if (edit === false) {
                      setPriorityBoxOpen(!priorityBoxOpen);
                    } else {
                      toast.warning("You are in edit note mode!");
                    }
                  }}
                />

                <ClickOutHandler
                  onClickOut={() => {
                    setPriorityBoxOpen(false);
                  }}
                >
                  <div>
                    {priorityBoxOpen && (
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
                            checked={priorityValue === "medium-priority"}
                          />
                          <label
                            className="priority__label"
                            htmlFor="medium-priority"
                            style={{ color: themeObject.text }}
                            onClick={() => setPriorityValue("medium-priority")}
                          >
                            Medium Priority
                          </label>
                        </div>

                        <div>
                          <input
                            className="priority"
                            type="radio"
                            name="priority"
                            id="low-priority"
                            value="low-priority"
                            checked={priorityValue === "low-priority"}
                            onChange={(e) => setPriorityValue(e.target.value)}
                          />
                          <label
                            className="priority__label"
                            htmlFor="ligh-priority"
                            style={{ color: themeObject.text }}
                            onClick={() => setPriorityValue("low-priority")}
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
                className="h-[25px] w-[25px] hover:scale-125 cursor-pointer"
                onClick={() => {
                  if (edit === false) {
                    archiveNoteHandler(data, authToken);
                    dispatch(renderArchiveNote());
                    dispatch(renderNewNote());
                    toast.success("Note Archived !");
                  } else {
                    toast.warning("You are in edit note mode!");
                  }
                }}
              />

              <div className="relative">
                <TagIcon
                  className="h-[25px] w-[25px] hover:scale-125 cursor-pointer"
                  onClick={() => {
                    setaddTagOpen(!addTagOpen);
                  }}
                />
                <ClickOutHandler
                  onClickOut={() => {
                    setaddTagOpen(false);
                  }}
                >
                  <div>
                    {addTagOpen && (
                      <div
                        className="absolute p-3 border-2 border-blue-400 rounded-2xl text-center"
                        style={{ backgroundColor: themeObject.secondary }}
                      >
                        <input
                          className="rounded-xl p-2"
                          type="text"
                          value={addTag}
                          placeholder="Add label"
                          style={{ backgroundColor: themeObject.primary }}
                          onChange={(e) => {
                            setAddTag(e.target.value);
                          }}
                        />
                        <button
                          className="bg-blue-400 px-2 py-1 rounded-xl mt-2"
                          onClick={() => {
                            editNoteHandler(
                              {
                                ...data,
                                tags: [...data.tags, addTag],
                              },
                              authToken
                            );

                            dispatch(renderNewNote());
                            toast.success("Tag Added !");
                            setaddTagOpen(false);
                            setAddTag("");
                          }}
                          style={{
                            color: themeObject.text,
                          }}
                        >
                          Add
                        </button>
                      </div>
                    )}
                  </div>
                </ClickOutHandler>
              </div>
              <TrashIcon
                className="h-[25px] w-[25px] hover:scale-125 cursor-pointer"
                onClick={() => {
                  if (edit === false) {
                    trashNoteHandler(data, authToken);
                    // dispatch(renderArchiveNote());
                    dispatch(renderNewNote());
                    toast.success("Note Trashed !");
                  } else {
                    toast.warning("You are in edit note mode!");
                  }
                }}
              />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
