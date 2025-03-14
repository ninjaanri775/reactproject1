import quizData from "../data/quizData";

const categoryImages = {
  HTML: "/images/Group 83.png",
  CSS: "/images/Group 82.png",
  JavaScript: "/images/Group 82 (1).png",
  Accessibility: "/images/Group 83 (1).png"
};


function StartPage({ selectCategory }) {
  return (
    <div className="start-page">
      <h1 className="start-welcome">Welcome to the <span className="welcome-2">Frontend Quiz!</span></h1>
      <p className="start-choose">Pick a subject to get started.</p>
      <div className="categories">
        {Object.keys(quizData).map((category) => (
          <button className="categories-button" key={category} onClick={() => selectCategory(category)}>
            <img src={categoryImages[category]} alt={category} className="category-icon" />
            <h3 className="button-word">{category}</h3>
          </button>
        ))}


      </div>
    </div>
  );
}

export default StartPage;
