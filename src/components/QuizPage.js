// QuizPage.js

import React, { useState } from 'react';

const QuizPage = ({ questions, onQuizSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: option,
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className='text-center' style={{color:"black",fontSize:"2vw"}}>
      <h2>Quiz</h2>
      {currentQuestionIndex < questions.length && (
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <p>{questions[currentQuestionIndex].text}</p>
          {questions[currentQuestionIndex].options.map((option) => (
            <button
              key={option}
              className={`option-label m-2 btn ${selectedOptions[questions[currentQuestionIndex].id] === option ? 'btn-success' : 'btn-secondary'} col-6 p-3 text-white`}
              onClick={() => handleOptionChange(questions[currentQuestionIndex].id, option)}
            >
              {option}
            </button>
          ))}
          <button type="button" className='btn btn-success mt-4' onClick={handleNextQuestion}>
            {isLastQuestion ? 'Submit' : 'Next'}
          </button>
        </div>
      )}
      {currentQuestionIndex === questions.length && (
        <form onSubmit={(e) => onQuizSubmit(e, selectedOptions)}>
          <button className='btn btn-success' type="submit">Submit the Quiz</button>
        </form>
      )}
    </div>
  );
};

export default QuizPage;
