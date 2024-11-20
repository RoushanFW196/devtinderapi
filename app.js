const express = require("express");

const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("hello world from server!");
});








console.log("hello world");
app.listen(port, (req, res) => {
  console.log(`listening on the ${port}`);
});
