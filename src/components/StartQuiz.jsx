import React, { useState } from "react";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

import "./StartQuiz.css";

const StartQuiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const [opcao, setOpcao] = useState(null);

  const handleOption = (index) => {
    setOpcao(index);
  };

  const nextQuestion = () => {
    if (quizState.questaoAtual <= quizState.data.length - 1) {
      dispatch({ type: "NEXT_QUESTION" });
      setOpcao(null);
      dispatch({ type: "RESET_ANSWER" });
    }
  };

  const prevQuestion = () => {
    dispatch({ type: "REINICIAR" });
  };

  if (
    !quizState.data ||
    quizState.data.length === 0 ||
    !quizState.data[quizState.questaoAtual]
  ) {
    return <p>Carregando Perguntas</p>;
  }

  const questaoAtual = quizState.data[quizState.questaoAtual];
  const question = questaoAtual.question;
  const options = questaoAtual.options;

  const selectOption = (option) => {
    if (!quizState.answerSelected) {
      dispatch({
        type: "CHECK-ANSWER",
        payload: { answer: questaoAtual.answer, option },
      });
    }
  };

  const handleDica = () => {
    dispatch({
      type: "CHECK_TIP",
    });
  };

  const eliminaQuestion = () => {
    dispatch({
      type: "ELIMINE",
    });
  };
  return (
    <div id="quiz-container">
      <div className="question-info">
        <p>
          pergunta {quizState.questaoAtual + 1} de {quizState.data.length}
        </p>
        <h2>{question}</h2>
      </div>

      <div id="option-container">
        {options.map((option, index) => (
          <label
            className={`options ${quizState.answerSelected && option === questaoAtual.answer ? "correct" : ""} ${quizState.answerSelected && option !== questaoAtual.answer ? "wrong" : ""}`}
            key={index}
            onClick={() => selectOption(option)}
          >
            <input
              type="radio"
              name="question"
              value={index}
              required
              checked={opcao === index}
              onChange={() => handleOption(index)}
            />
            <p>{option}</p>
          </label>
        ))}
      </div>

      <div className={`button-help ${quizState.qtdDica >= 3 ? "inative" : ""}`}>
        {!quizState.answerSelected &&
        (
          <div>
            <button onClick={() => handleDica()}>Dica</button>
            <button onClick={() => eliminaQuestion()}>Eliminar uma</button>
          </div>
          
        )}
      </div>

      <div className={`${quizState.dica ? "" : "inative"}`}>
        <p>{questaoAtual.tip}</p>
      </div>

      <div className="button-container">
        {quizState.questaoAtual === quizState.data.length - 1 &&
        quizState.answerSelected ? (
          <button onClick={() => nextQuestion()}>Enviar</button>
        ) : (
          quizState.answerSelected && (
            <button onClick={() => nextQuestion()}>continuar</button>
          )
        )}
      </div>
    </div>
  );
};

export default StartQuiz;

/* ${quiz ? '' : 'active'} */
