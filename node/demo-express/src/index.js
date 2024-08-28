const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("hello world");
});

app.listen(3006, () => {
  console.log(`server：http://127.0.0.1:3006`);
});
