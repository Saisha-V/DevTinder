const express = require("express");

const app = express();

const { userAuth } = require("./middlewares/auth");

app.use("/admin", userAuth);

app.use("/user", (req, res) => {
  res.send("User exists");
});

app.get("/admin/getData", (req, res) => {
  res.send("Data sent");
});

app.get("/admin/deleteData", (req, res) => {
  res.send("User deleted");
});

app.listen(3000, () => {
  console.log("Server up and running!");
});
