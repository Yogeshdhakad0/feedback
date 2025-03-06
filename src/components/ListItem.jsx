import React, { useContext } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import FeedbackContext from "../providers/feedbacks/FeedbackContext";

const ListItem = ({ feedback }) => {
  const { theme } = useContext(ThemeContext);
  const { removeFeedback,editbtn } = useContext(FeedbackContext);

  return (
    <li
      className={
        theme ? "list-group-item bg-dark text-light" : "list-group-item"
      }
    >
      <h1 className="display-6">Rating : {feedback.rating}</h1>
      <p>{feedback.review}</p>
      <span className="float-end">
        <button className="btn btn-sm btn-warning mx-1"
onClick={()=>editbtn(feedback)}

        >Edit</button>
        <button
          className="btn btn-sm btn-danger mx-1"
          onClick={() => removeFeedback(feedback.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
