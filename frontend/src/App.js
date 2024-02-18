import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/quiz`)
      .then((response) => {
        setQuiz(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="App">
        <div className="App-header">
          <div> Quiz:{quiz.length}</div>
        </div>
        {quiz.map((q) => (
          <div key={q.id}>
            <div {...q.question}></div>
            <div {...q.options}></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
