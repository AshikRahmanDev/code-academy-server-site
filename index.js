const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

const courses = require("./data/courses.json");
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("working on port", port);
});
