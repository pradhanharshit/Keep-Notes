import { useSelector } from "react-redux/es/hooks/useSelector";

const Footer = () => {
  const { themeObject } = useSelector((state) => state.theme);

  return (
    <div
      className="text-center p-5"
      style={{ backgroundColor: themeObject.primary, color: themeObject.text }}
    >
      Made by Harshit🚀🤘
    </div>
  );
};

export default Footer;
