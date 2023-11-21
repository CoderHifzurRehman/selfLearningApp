import React from 'react';

const QuizResult = ({ result }) => {
  return (
    <div className='text-center mt-3'>
      <h2 style={{fontSize:"4vw"}}>You scored: {result}%</h2>
    </div>
  );
};

export default QuizResult;
