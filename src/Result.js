import React from 'react';

const Result = ({ score, resetQuiz, background }) => {
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
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Quiz Completed</h1>
        <p className="text-lg sm:text-xl mb-4">Your score: {score}</p>
        <button
          onClick={resetQuiz}
          className="bg-blue-500 text-white p-3 rounded-full w-full hover:bg-blue-600 transition duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Result;
