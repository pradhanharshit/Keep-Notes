import { useSelector } from "react-redux";
import ToggleButton from "../ToggleButton/ToggleButton";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import "./Navbar.css";

const Navbar = () => {
  const { themeObject } = useSelector((state) => state.theme);

  return (
    <navbar
      className="flex p-5 justify-around"
      style={{
        backgroundColor: themeObject.primary,
        color: themeObject.text,
        boxShadow: `0px 5px 3px ${themeObject.text}`,
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
        <UserIcon className="h-[35px] w-[35px] stroke-blue-400" />
      </div>
    </navbar>
  );
};

export default Navbar;
