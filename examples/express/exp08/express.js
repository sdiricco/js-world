const express = require("express");
const app = express();

//postman -> permette di testare richieste http. 
//Se apri postman e fai una get con localhost:3000/ vedrai che ti restituirà il risultato che hai del browser

//questo è un middleware che ci permette di leggere un json in entrata
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Homepage")
})

app.get('/utente', (req, res) => {
  res.json({nome: "Luca", cognome: "Rossi"})
})

app.post('/', (req, res)=>{
  console.log(req.body);
  res.send('ok post')
})

app.put('/', (req, res)=>{
  console.log(req.body);
  res.send('ok put')
})

app.delete('/', (req, res)=>{
  res.send('ok delete')
})



app.listen(3000);
