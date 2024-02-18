import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Node JS Server is ready to serve request");
});

app.get("/api/quiz", (req, res) => {
  const quiz = [
    {
      id: 1,
      question: "Q : 1) JavaScript is an__________ language?",
      options: ["Object-Oriented", "Object-Based", "Functional"],
    },
    {
      id: 2,
      question:
        "Q : 2) Which Following methods can be used to display data in some form using JavaScript?",
      options: ["document.write()", "console.log()", "window.alert()"],
    },
    {
      id: 3,
      question: "Q : 3) Which JavaScript framework is for backend?",
      options: ["ReactJS", "VueJS", "NodeJS"],
    },
    {
      id: 4,
      question: "Q : 4) Which JavaScript engin is used by Chrome Browser?",
      options: ["V8", "SpiderMonkey", "Nitro"],
    },
  ];

  res.send(quiz);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is serving on http://localhost:${port}`);
});
