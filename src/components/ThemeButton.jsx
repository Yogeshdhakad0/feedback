import React, { useContext } from "react";
import { FaRegSun, FaMoon } from "react-icons/fa";
import ThemeContext from "../providers/theme/ThemeContext";

const ThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={changeTheme}
      id="themeBtn"
      className={theme ? "btn btn-warning" : "btn btn-dark"}
    >
      {theme ? <FaRegSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeButton;
