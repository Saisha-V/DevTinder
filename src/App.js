const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Yellooo <3");
});

app.use("/test", (req, res) => {
  res.send("I love you 3000 <3");
});

app.listen(3000, () => {
  console.log("Server up and running!");
});
