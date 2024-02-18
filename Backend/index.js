import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Node JS Server is ready to serve request");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is serving on http://localhost:${port}`);
});
