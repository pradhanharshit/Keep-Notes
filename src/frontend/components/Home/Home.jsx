import { useSelector } from "react-redux";

const Home = () => {
  const { themeObject } = useSelector((state) => state.theme);
  return (
    <div
      style={{
        color: themeObject.text,
      }}
    >
      Home
    </div>
  );
};

export default Home;
