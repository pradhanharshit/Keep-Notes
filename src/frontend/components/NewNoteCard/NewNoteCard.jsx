import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addNote } from "../../../store/notesSlice";
import { addNoteHandler } from "../../../services/notesService";

const NewNoteCard = () => {
  const { themeObject } = useSelector((state) => state.theme);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const [labelArray, setLabelArray] = useState([]);

  const dispatch = useDispatch();
  const discardHandler = () => {
    setContent("");
    setTitle("");
    setLabel("");
    dispatch(addNote());
  };

  const addNewNoteHandler = async () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    await addNoteHandler({
      title: title,
      body: content,
      label: labelArray.concat(label),
      priority: "",
      pinned: false,
      date: `${day}/${month}/${year}`,
    });
    toast.success("New note added");
    discardHandler();
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-blue-400">Add Note</h1>
      </div>
      <div
        className="rounded-2xl w-[30rem] p-5 m-5 text-center"
        style={{
          backgroundColor: themeObject.secondary,
        }}
      >
        <div>
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />{" "}
          <br />
          <textarea
            className="p-3 w-[90%] rounded-xl mb-3"
            type="text"
            id="content"
            placeholder="Content"
            style={{
              backgroundColor: themeObject.primary,
              color: themeObject.text,
            }}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            rows="4"
            cols="50"
          ></textarea>{" "}
          <br />
          <input
            className="p-3 w-[90%] rounded-xl mb-3"
            type="text"
            name=""
            id="label"
            placeholder="Label"
            style={{
              backgroundColor: themeObject.primary,
              color: themeObject.text,
            }}
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
            }}
          />{" "}
          <br />
          <button
            className="w-[30%] py-2 bg-blue-400 rounded-2xl mb-3"
            style={{ color: themeObject.text }}
            onClick={() => {
              if (title === "" || content === "" || label === "") {
                toast.warning("All fields required !");
              } else {
                setLabelArray(labelArray.concat(label));
                addNewNoteHandler();
              }
            }}
          >
            Save
          </button>{" "}
          <br />
          <button
            className="w-[30%] py-2 bg-blue-400 rounded-2xl"
            style={{ color: themeObject.text }}
            onClick={() => {
              toast.success("Note Discarded !");
              discardHandler();
            }}
          >
            Discard
          </button>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default NewNoteCard;
