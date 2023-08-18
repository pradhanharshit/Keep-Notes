import { useDispatch, useSelector } from "react-redux";
import ToggleButton from "../ToggleButton/ToggleButton";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import "./Navbar.css";
import { useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import { logout } from "../../../store/authSlice";
// import { useNavigate } from "react-router-dom";
import { addNote } from "../../../store/notesSlice";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const { themeObject } = useSelector((state) => state.theme);
  const { username } = useSelector((state) => state.auth);
  const [openFilter, setOpenFilter] = useState(false);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // const userName = localStorage.getItem(JSON.parse("user")).f;

  return (
    <div
      className="flex p-5 justify-around"
      style={{
        backgroundColor: themeObject.primary,
        color: themeObject.text,
      }}
    >
      <h1 className="font-bold text-3xl text-blue-400">Keep Notes</h1>
      <div className="search-container w-[21.5rem]">
        <MagnifyingGlassIcon className="stroke-blue-400 search-icon h-[20px] w-[20px]" />
        <input
          type="text"
          className="search-input rounded-3xl w-[100%]"
          placeholder="Search..."
          style={{ backgroundColor: themeObject.secondary }}
        />
      </div>
      <div className="flex space-x-6">
        <PencilSquareIcon
          className="h-[35px] w-[35px] stroke-blue-400"
          onClick={() => {
            <Navigate to="/" />;
            dispatch(addNote());
            // console.log("called");
          }}
        />
        <ToggleButton />
        <div>
          <UserIcon
            className="h-[35px] w-[35px] stroke-blue-400"
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
          />
          <ClickOutHandler onClickOut={() => setOpenFilter(false)}>
            <div className="relative">
              {openFilter && (
                <div
                  className="absolute right-0 p-2 rounded-2xl w-fit text-center border-2 border-blue-400"
                  style={{ backgroundColor: themeObject.secondary }}
                >
                  <p style={{ color: themeObject.text }}>Hello!!</p>
                  <p className="font-bold" style={{ color: themeObject.text }}>
                    {username}
                  </p>
                  <button
                    className="py-1 px-2 bg-blue-400 m-2 rounded-xl"
                    onClick={() => dispatch(logout())}
                    style={{ color: themeObject.text }}
                  >
                    logout
                  </button>
                </div>
              )}
            </div>
          </ClickOutHandler>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
