import Welcome from "./components/welcome";
import Category from "./components/Category";
import StartQuiz from "./components/StartQuiz";
import EndQuiz from "./components/EndQuiz";
import { QuizContext } from "./context/QuizContext";
import "./App.css";
import { useContext } from "react";

function App() {
  const [quizState] = useContext(QuizContext);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <Category />}
      {quizState.gameStage === "Jogando" && <StartQuiz />}
      {quizState.gameStage === "End" && <EndQuiz />}
    </div>
  );
}

export default App;
