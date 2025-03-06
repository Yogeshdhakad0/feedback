import { createContext, useState } from "react";

const FeedbackContext = createContext();

// Provider
export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    // { id: 1, rating: 5, review: "Very Nice Product" },
    // { id: 2, rating: 5, review: "Very Nice Product" },
  ]);

  //   Remove Feedback
  const removeFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };


   const addFeedback=(rating,text)=>{
  
   setFeedbacks([{id:crypto.randomUUID(), rating:rating, review:text} , ...feedbacks], )
   }

   const[editfeedback, seteditfeedback]=useState(
    {feedback:{},isedit:false}
   )

 const editbtn=(feedback)=>{
seteditfeedback({ feedback:feedback,isedit:true})
// console.log(seteditfeedback)
 }

 const updatefeedback=(updatefeedback)=>{
  console.log(updatefeedback)
setFeedbacks(feedbacks.map((item)=>
  item.id===updatefeedback.id ?  updatefeedback:item))

seteditfeedback({ feedback:{},isedit:false})
 }


 const [preview,setpreview]=useState('')
 const clear=()=>{
  setpreview(feedbacks)
  setFeedbacks([])
 }
 const Preview=()=>{
   setFeedbacks(preview)
 }
 








const sortt=()=>{
 
    const sorted = [...feedbacks].sort((a, b) => a.rating - b.rating);
    console.log(sorted)
    setFeedbacks(sorted);
  };




  return (
    <FeedbackContext.Provider value={{ feedbacks, removeFeedback,addFeedback,editfeedback ,editbtn,sortt,clear,Preview,
    updatefeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
