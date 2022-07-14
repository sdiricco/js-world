const { application } = require("express");
const express = require("express");
const app = express();
const {persone} = require('./persone');

app.get('/api/persone', (req, res)=>{
  res.status(200).json({success: true, data: persone})
})

//Prova da postman con:
//localhost:3000/api/persone/2
app.get('/api/persone/:id', (req, res)=>{
  const {id} = req.params
  const persona = persone.find(persona => persona.id === id)
  res.json({success: true, data: persona});
})

app.listen(3000);
