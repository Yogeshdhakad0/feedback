import React, { useContext } from "react";
import FeedbackContext from "../providers/feedbacks/FeedbackContext";

const AverageComponent = () => {
  const{feedbacks}=useContext(FeedbackContext);
  const total= feedbacks.length; 
  console.log(total)
  const avg=feedbacks.reduce((p,c)=>p+ parseInt(c.rating),0)/total
  return (
    <div className="my-3 d-flex align-items-center justify-content-between">
      <p>Total Reviews : {total}</p>
      <p>Avg Rating : {avg.toFixed(1.1)}</p>
    </div>
  );
};

export default AverageComponent;
