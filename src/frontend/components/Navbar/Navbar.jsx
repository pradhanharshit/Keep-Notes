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

const Navbar = () => {
  const { themeObject } = useSelector((state) => state.theme);
  const [openFilter, setOpenFilter] = useState(false);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <navbar
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
        <PencilSquareIcon className="h-[35px] w-[35px] stroke-blue-400" />
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
                  className="absolute right-0 p-2 rounded-2xl"
                  style={{ backgroundColor: themeObject.secondary }}
                >
                  {/* <p style={{ color: themeObject.text }}>{user.username}</p> */}
                  <button
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
    </navbar>
  );
};

export default Navbar;
