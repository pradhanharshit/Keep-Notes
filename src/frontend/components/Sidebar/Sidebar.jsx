import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ArchiveBoxIcon,
  BookmarkIcon,
  TrashIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import "./Sidebar.css";

const Sidebar = () => {
  const { themeObject } = useSelector((state) => state.theme);
  return (
    <div className="w-1/5 flex flex-col mt-20 items-center">
      <div className="flex flex-col" style={{ color: themeObject.text }}>
        <NavLink to="/" className="flex space-x-3 items-center mb-10">
          <HomeIcon className="heroicon-outline h-[30px] w-[30px] fill-none"></HomeIcon>
          <p className="ressp text-xl">Home</p>
        </NavLink>

        <NavLink to="/archives" className="flex space-x-3 items-center mb-10">
          <ArchiveBoxIcon className="heroicon-outline h-[30px] w-[30px] fill-none"></ArchiveBoxIcon>
          <p className="ressp text-xl">Archive</p>
        </NavLink>

        <NavLink to="/labels" className="flex space-x-3 items-center mb-10">
          <TagIcon className="heroicon-outline h-[30px] w-[30px] fill-none"></TagIcon>
          <p className="ressp text-xl">Labels</p>
        </NavLink>

        <NavLink to="/trash" className="flex space-x-3 items-center mb-10">
          <TrashIcon className="heroicon-outline h-[30px] w-[30px] fill-none"></TrashIcon>
          <p className="ressp text-xl">Trash</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
