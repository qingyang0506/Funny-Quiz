import React, { useState } from "react";
import QuestionCard from "./Components/QuestionCard";
import { fetchQuizQuestions, QuestionState } from "./API";
import { GlobalStyle, Wrapper } from "./App.style";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

interface table {
   [key: string]: number
}

const CategoryTable:table = {
     "film":11,
      "music":12,
      "video games":15,
      "computer":18,
      "mathematics":19,
      "sports":21,
      "animal":27,
}


function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState("film");
  const [totalQuestions, setTotalQuestions] = useState(0);
  
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      amount,
      difficulty,
      CategoryTable[category],
    );
    setQuestions(newQuestions);
    setTotalQuestions(amount);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setAmount(10);
    setDifficulty("easy");
    setCategory("film");
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(score + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers([...userAnswers, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === totalQuestions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Funny quiz</h1>
        {gameOver || userAnswers.length === totalQuestions ? (
          <div className="settings">
            <button className="start" onClick={startQuiz}>
              start
            </button>
            <div className="options">
              <select name="type" id="type" onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="film">film</option>
                <option value="music">music</option>
                <option value="video games">video games</option>
                <option value="computer">computer</option>
                <option value="mathematics">mathematics</option>
                <option value="sports">sports</option>
                <option value="animal">animal</option>
              </select>

              <select name="difficulties" id="diff" onChange={(e)=>{setDifficulty(e.target.value)}}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>

              <select name="amount" id="amount" onChange={(e)=>{setAmount(parseInt(e.target.value.trim()))}}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        ) : null}
        {!gameOver ? <p className="score">Score:{score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {(!loading && !gameOver) ? (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={totalQuestions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ):null}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== totalQuestions -1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
