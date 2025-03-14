import quizData from "../data/quizData";

const categoryImages = {
  HTML: "/images/Group 83.png",
  CSS: "/images/Group 82.png",
  JavaScript: "/images/Group 82 (1).png",
  Accessibility: "/images/Group 83 (1).png",
};

function Results({ category, score, totalQuestions, restartQuiz }) {
  return (
    <div className="results">
      <div className="category-divs category-divs1">
      <img src={categoryImages[category]} alt={category} className="result-image" />
      <h2 className="result-category">{category} </h2>        
      </div>

      <h2 className="complete">Quiz Completed <span className="scored">You scored...</span></h2>

      <div className="score-div">
        <div className="category-divs category-divs2">
      <img src={categoryImages[category]} alt={category} className="result-image div-image" />
      <h2 className="result-category div-category">{category} </h2>          
        </div>

     
      <p className="scores"> <span className="score-score">{score} </span>out of {totalQuestions}</p>
      </div>

      <button className="restart" onClick={restartQuiz}>Play Again</button>
    </div>
  );
}

export default Results;
