const { application } = require("express");
const express = require("express");
const app = express();
const {persone} = require('./persone');

app.use(express.json())

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

//E' stata aggiunta una persona..
//Tuttavia non viene salvato nel file
//prova a fare un esercizion con un form
app.post('/api/persone', (req, res)=>{
  console.log(req.body);
  const persona = req.body;
  persone.push(persona);
  res.status(200).json({success:true, data:persone})

})
app.listen(3000);
