import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import StartPage from "./components/StartPage";
import Quiz from "./components/Quiz";

function App() {
  const [category, setCategory] = useState(null);

  return (
    <div className={`app ${localStorage.getItem("theme") === "dark" ? "dark-mode" : ""}`}>
      <div className="themetoggle">
           <ThemeToggle />
      </div>
   
      {category ? (
        <Quiz category={category} goBack={() => setCategory(null)} />
      ) : (
        <StartPage selectCategory={setCategory} />
      )}
    </div>
  );
}

export default App;