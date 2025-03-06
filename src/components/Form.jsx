import React, { useContext, useState,useEffect } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import FeedbackContext from "../providers/feedbacks/FeedbackContext";

const Form = () => {
  const { theme } = useContext(ThemeContext);
  const{addFeedback ,editfeedback,updatefeedback}=useContext(FeedbackContext)
    const[Rating,setRating]=useState(1)
     const [Text,setText]=useState('')
 const headlar=(e)=>{
    e.preventDefault()
    editfeedback.isedit === false ? addFeedback(parseInt(Rating),Text) : updatefeedback({id:editfeedback.feedback.id,rating:parseInt(Rating),review:Text})
    // console.log(addFeedback(Rating,Text))
    // console.log(addFeedback(parseInt(Rating),Text))
    setRating('')
    setText('')
  }
  useEffect(() => {
    setRating(editfeedback.feedback.rating)
    setText(editfeedback.feedback.review)
  }, [editfeedback])





  return (
    <div className={theme ? "card p-3 bg-dark" : "card p-3"}>
      <form className="form-control" onSubmit={(e)=>headlar(e)}>
        <select className="form-select"       
        onChange={(e)=>setRating(e.target.value)}
        value={Rating}
        required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          className="form-control my-3"
          placeholder="Enter Review"
          onChange={(e)=>setText(e.target.value)}
          value={Text}
          required
        ></textarea>
        <button className="btn btn-success w-100">Submit Review</button>
      </form>
    </div>
  );
};

export default Form;
