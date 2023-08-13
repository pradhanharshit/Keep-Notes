import { useSelector } from "react-redux";
import NoteCard from "../NoteCard/NoteCard";
// import samplenotes from "../../../samplenotes";

const Home = () => {
  const { themeObject } = useSelector((state) => state.theme);

  return (
    <>
      <div
        className="home text-center"
        style={{
          color: themeObject.text,
        }}
      >
        <h1 className="text-3xl font-semibold text-blue-400">My Notes</h1>
      </div>

      <div className="flex flex-col items-center m-5">
        <NoteCard />
      </div>
    </>
  );
};

export default Home;
