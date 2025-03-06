import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import AverageComponent from "./components/AverageComponent";
import ListGroup from "./components/ListGroup";
import ThemeContext from "./providers/theme/ThemeContext";
import ThemeButton from "./components/ThemeButton";
import { FeedbackProvider } from "./providers/feedbacks/FeedbackContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FeedbackProvider>
      <Navbar />
      <div
        id="container"
        className={
          theme ? "container-fluid p-5 bg-secondary" : "container-fluid p-5"
        }
      >
        <Form />
        <AverageComponent />
        <ListGroup />
        <ThemeButton />
      </div>
    </FeedbackProvider>
  );
};

export default App;
