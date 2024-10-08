import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

import "./Category.css";

const Category = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategory = (category) => {
    dispatch({ type: "NEW_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  };
  return (
    <div id="category-container">
      {quizState.data.map((question, index) => (
        <button onClick={() => chooseCategory(question.category)} key={index}>
          {question.category}
        </button>
      ))}
    </div>
  );
};

export default Category;
