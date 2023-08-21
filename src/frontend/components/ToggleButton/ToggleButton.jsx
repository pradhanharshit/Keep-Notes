import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/themeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ToggleButton = () => {
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme === "light") {
      dispatch(toggleTheme("dark"));
    } else {
      dispatch(toggleTheme("light"));
    }
  };
  return (
    <button style={{}} onClick={changeTheme}>
      {theme === "light" ? (
        <MoonIcon className="h-[35px] w-[35px] stroke-blue-400" />
      ) : (
        <SunIcon className="h-[35px] w-[35px] stroke-blue-400" />
      )}
    </button>
  );
};

export default ToggleButton;
