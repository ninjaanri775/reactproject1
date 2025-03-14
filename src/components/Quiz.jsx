import { useState } from "react";
import quizData from "../data/quizData";
import Results from "./Results";

const categoryImages = {
  HTML: "/images/Group 83.png",
  CSS: "/images/Group 82.png",
  JavaScript: "/images/Group 82 (1).png",
  Accessibility: "/images/Group 83 (1).png",
};

const answerLabels = ["A", "B", "C", "D"];

function Quiz({ category, goBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hover state

  const question = quizData[category][currentQuestion];

  function handleAnswerClick(index) {
    setSelectedAnswerIndex(index);
  }

  function submitAnswer() {
    if (selectedAnswerIndex !== null) {
      if (question.answers[selectedAnswerIndex].isCorrect) {
        setScore(score + 1);
      }
      setSubmitted(true);
    }
  }

  function nextQuestion() {
    if (currentQuestion + 1 < quizData[category].length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswerIndex(null);
      setSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  }

  if (quizFinished) {
    return <Results category={category} score={score} totalQuestions={quizData[category].length} restartQuiz={goBack} />;
  }

  return (
    <div className="quiz">
      <div className="category-div4">
        <div className="quiz-header">
        <img src={categoryImages[category]} alt={category} className="quiz-image" />
        <h2 className="quiz-category"> {category} </h2>
      </div>
      <div className="question-div">
      <p className="count">Question {currentQuestion + 1} of {quizData[category].length}</p>
      <h3 className="question">{question.question}</h3>  
      </div>

      </div>

    <div className="many-buttons">
      <div className="answers">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className={`answer-button
              ${submitted ? (answer.isCorrect ? "correct" : selectedAnswerIndex === index ? "wrong" : "") : ""}
              ${!submitted && selectedAnswerIndex === index ? "selected" : ""}
            `}
            onClick={() => handleAnswerClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            disabled={submitted}
          >
            <div 
              className={`answer-label 
                ${selectedAnswerIndex === index ? "selected-label" : ""}
              `}
            >
              <span className={hoveredIndex === index ? "hovered-text" : ""}>
                {answerLabels[index]}
              </span>
            </div>
            <h3 className="answer-text">{answer.text}</h3>
          </button>
        ))}
      </div>

      {!submitted ? (
        <button className="submit" onClick={submitAnswer} disabled={selectedAnswerIndex === null}>Submit</button>
      ) : (
        <button className="next" onClick={nextQuestion}>
          {currentQuestion + 1 < quizData[category].length ? "Next" : "Finish"}
        </button>
      )}
    </div>
    </div>
      
  );
}

export default Quiz;
