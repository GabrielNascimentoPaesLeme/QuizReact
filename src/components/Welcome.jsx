import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  /* const {nome, setNome, quiz, setQuiz, value } = useContext(QuizContext) */

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="container-welcome">
      <h2>Bem-vindo/a!</h2>
      <p>Vamos começar o Quiz?! É só clicar no botão abaixo!</p>
      <div className="image-container">
        <button
          className="start-quiz-btn"
          onClick={() => dispatch({ type: "NEXT_STATE" })}
        >
          Iniciar Quiz
        </button>
        <img src={Quiz} alt="" />
      </div>
    </div>
  );
};

export default Welcome;

{
  /* <div className={`container-welcome ${quiz ? 'active' : ''}`}>
      <div className="image-container">
        <div className='start-quiz-btn'>
          <h2>Bem-vindo/a!</h2>
          <p>Vamos começar o Quiz?! É só clicar no botão abaixo!</p>
          <button  onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar Quiz</button>
        </div>
        <img src={Quiz} alt="" />
      </div>
    </div> */
}
