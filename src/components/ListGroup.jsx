import React, { useContext } from "react";
import ListItem from "./ListItem";
import FeedbackContext from "../providers/feedbacks/FeedbackContext";

const ListGroup = () => {
  const { feedbacks } = useContext(FeedbackContext);

  return (
    <ul className="my-3 list-group">
      {feedbacks.map((feedback) => (
        <ListItem key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};

export default ListGroup;
