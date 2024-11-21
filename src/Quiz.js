import React, { useState } from 'react';

const Quiz = ({ setScore, score, resetQuiz, onQuizComplete, background }) => {
  const questions = [
    {
      question: 'What was Shahrazad s clever plan to survive the king’s wrath?',
      options: ['A) To bribe the king', 'B) To tell him stories', 'C) To escape the palace', 'D) To show her beauty'],
      correct: 'B) To tell him stories',
    },
    {
      question: 'In the story of Ali Baba and the Forty Thieves, what was Kassim s tragic mistake?',
      options: ['A) He trusted the thieves', 'B) He took too much treasure', 'C) He forgot the magic words', 'D) He betrayed Ali Baba'],
      correct: 'B) He took too much treasure',
    },
    {
      question: 'How did the fisherman outsmart the jinni in "The Fisherman and the Jinni"?',
      options: ['A) He fought the jinni', 'B) He tricked the jinni into entering the jar again', 'C) He begged for mercy', 'D) He promised the jinni freedom'],
      correct: 'B) He tricked the jinni into entering the jar again',
    },
    {
      question: 'Who added the story of Aladdin to the "One Thousand and One Nights" collection?',
      options: ['A) Shahrazad', 'B) Antoine Galland', 'C) King Shahryar', 'D) A Syrian storyteller'],
      correct: 'B) Antoine Galland',
    },
    {
      question: 'What lesson does the story of Aladdin and the Magic Lamp teach?',
      options: ['A) Always trust others', 'B) Use wit and resourcefulness to overcome challenges', 'C) Greed will lead to success', 'D) Power comes from wealth'],
      correct: 'B) Use wit and resourcefulness to overcome challenges',
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      onQuizComplete(score + 1); // Passing the final score on quiz completion
    }
  };

  return (
    <div
      className="h-full flex justify-center items-center"
      style={{
        background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="w-full sm:max-w-md md:max-w-lg p-6 bg-white rounded-lg shadow-lg opacity-90">
        {!quizCompleted ? (
          <>
            <h2 className="text-xl sm:text-2xl mb-4">{questions[currentQuestion].question}</h2>
            <div className="flex flex-col space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl">Quiz Completed!</h2>
            <p>Your Score: {score} out of {questions.length}</p>
            <button
              onClick={resetQuiz}
              className="bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600 transition duration-300"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
