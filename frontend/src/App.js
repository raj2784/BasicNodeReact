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

          {quiz.map((q) => (
            <div key={q.id}>
              <h3>{q.question}</h3>
              <p>1 : {q.options[0]}</p>
              <p>2 : {q.options[1]}</p>
              <p>3 : {q.options[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
