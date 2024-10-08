import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

import Welldone from "../img/welldone.svg";

import "./EndQuiz.css";

const EndQuiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const score = quizState.score;
  const totalQuestions = quizState.data.length;

  return (
    <div className="container-end">
      <h2>Fim do Jogo!</h2>
      <p>Pontuação: {score}</p>
      <p>
        Você acertou {score} de {totalQuestions} questões
      </p>
      <img src={Welldone} alt="" />
      <div className="button-container">
        <button onClick={() => dispatch({ type: "REINICIAR" })}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default EndQuiz;
