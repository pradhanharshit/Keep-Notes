import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/themeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ToggleButton = () => {
  const { themeObject, theme } = useSelector((state) => state.theme);
  console.log(themeObject);

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
        <MoonIcon className="h-[40px] w-[40px] stroke-blue-400" />
      ) : (
        <SunIcon className="h-[40px] w-[40px] stroke-blue-400" />
      )}
    </button>
  );
};

export default ToggleButton;
