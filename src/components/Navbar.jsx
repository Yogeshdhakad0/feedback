import React, { useContext } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import FeedbackContext from "../providers/feedbacks/FeedbackContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
const {sortt,Preview,clear}=useContext(FeedbackContext);

  return (
    <nav className={theme ? "navbar bg-dark" : "navbar bg-warning"}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">Feedback App</span>
        <button className="btn btn-sm btn-primary" onClick={()=>sortt()}>sort</button>
        <button className="btn btn-sm btn-primary" onClick={()=>clear()}>clear</button>
        <button className="btn btn-sm btn-primary" onClick={()=>Preview()}>Preview</button>
      </div>
    </nav>
  );
};

export default Navbar;
