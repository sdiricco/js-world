const express = require("express");
const app = express();
const {persone} = require('./persone')

app.get("/", (req, res) => {
  res.json(persone);
});

app.listen(3000);
