import { useState } from "react";

/* Importação dos components necessários */
import { createContext, useReducer } from "react";

/* Importação dos dados */
import data from "../data/questions_complete";

const STAGES = ["Start", "Category", "Jogando", "End"];

const initialState = {
  gameStage: STAGES[0],
  data,
  questaoAtual: 0,
  answerSelected: false,
  score: 0,
  qtdDica: 0,
  dica: false,
  elimina: 0,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "NEW_GAME":
      let quizQuestions = null;

      const category = action.payload;

      state.data.forEach((question) => {
        if (question.category === category) {
          quizQuestions = question.questions;
        }
      });
      return {
        ...state,
        data: quizQuestions,
        gameStage: STAGES[2],
      };

    case "PREVIEW_QUESTION":
      return {
        ...state,
      };

    case "NEXT_QUESTION":
      let endGame = false;
      console.log(state.data);
      console.log(state.questaoAtual);

      if (!state.data[state.questaoAtual + 1]) {
        endGame = true;
        console.log(state.data[state.questaoAtual + 1]);
      }
      return {
        ...state,
        questaoAtual: state.questaoAtual + 1,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        dica: false,
      };

    case "REORDER_QUESTIONS":
      const reordered = state.data.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        data: reordered,
      };

    case "REINICIAR":
      return initialState;

    case "CHECK-ANSWER":
      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: true,
      };

    case "CHECK_TIP":
      return {
        ...state,
        qtdDica: 1,
        dica: true,
      };

    case "RESET_ANSWER":
      return {
        ...state,
        answerSelected: false, // Resetar para permitir nova seleção
      };

    case "ELIMINE":
      const currentQuestion = state.data[state.questaoAtual];

      const filteredWrongQuestions = currentQuestion.options.filter(
        (option) => option !== currentQuestion.answer,
      );

      const optionToRemove =
        filteredWrongQuestions[
          Math.floor(Math.random() * filteredWrongQuestions.length)
        ];

      const newOptions = currentQuestion.options.filter(
        (option) => option !== optionToRemove,
      );

      const newData = state.data.map((question, index) =>
        index === state.questaoAtual
          ? { ...question, options: newOptions }
          : question,
      );

      return {
        ...state,
        data: newData,
        elimina: 1,
      };

    default:
      return state;
  }
};

/* Exportação do createContext usando a constante QuizContext
    - A constante vai criar todo o contexto GERAL, no qual os dados são compartilhados entre diferentes componentes dentro da minha variável 'children' => *(Provider abaixo)*
*/
export const QuizContext = createContext();

/* Passando o Provider, que é o componente que permite que outros componentes acessem e assinalem mudanças no contexto geral
    - Deve ser passada uma função anônima recebendo um parâmetro 'children' que será tudo que utilizara desse contexto (No caso, tudo dentro do html do App.jsx)
    - Value são exatamente os valores/dados a serem utilizados pelos componentes
*/
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
