import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import background from './background1.webp'; // Import background image

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startHandler = () => setStartQuiz(true);
  const resetHandler = () => {
    setScore(0);
    setQuizCompleted(false);
    setStartQuiz(false);
  };

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
    setQuizCompleted(true);
  };

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        background: `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full sm:max-w-md md:max-w-lg p-6 bg-white rounded-lg shadow-lg opacity-90">
        {!startQuiz && !quizCompleted ? (
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">React Quiz App</h1>
            <p className="text-lg sm:text-xl mb-6">Test your knowledge!</p>
            <button
              onClick={startHandler}
              className="bg-blue-500 text-white p-3 rounded-full w-full hover:bg-blue-600 transition duration-300"
            >
              Start Quiz
            </button>
          </div>
        ) : quizCompleted ? (
          <Result score={score} resetQuiz={resetHandler} background={background} />
        ) : (
          <Quiz
            setScore={setScore}
            score={score}
            resetQuiz={resetHandler}
            onQuizComplete={handleQuizCompletion}
            background={background}
          />
        )}
      </div>
    </div>
  );
};

export default App;
