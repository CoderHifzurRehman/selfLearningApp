// App.js

import React, { useState } from 'react';
import SubjectList from './components/SubjectList';
import TutorialPage from './components/TutorialPage';
import QuizPage from './components/QuizPage';
import QuizResult from './components/QuizResult';
import subjectsData from './data/subjects';
import questionsData from './data/questions'; // Import your questions data
import Header from './components/Header';

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };

  const handleQuizSubmit = (event, selectedOptions) => {
    event.preventDefault();

    // Assuming you have a questions array with correctAnswer property
    const correctAnswers = questionsData.map((question) => question.correctAnswer);

    // Calculate the number of correct answers
    const correctCount = Object.keys(selectedOptions).reduce(
      (count, questionId) => (selectedOptions[questionId] === correctAnswers[questionId - 1] ? count + 1 : count),
      0
    );

    // Calculate the percentage
    const result = (correctCount / questionsData.length) * 100;

    // Set the result using setQuizResult
    setQuizResult(result);
  };

  return (
    <div className="app-container">
      <Header/>
      {!selectedSubject && (
        <SubjectList subjects={subjectsData} onSelectSubject={handleSelectSubject} />
      )}
      {selectedSubject && <TutorialPage selectedSubject={selectedSubject} />}
      {selectedSubject && (
        <QuizPage
          questions={questionsData} // Pass your questions data here
          onQuizSubmit={handleQuizSubmit}
        />
      )}
      {quizResult && <QuizResult result={quizResult} />}
    </div>
  );
};

export default App;
