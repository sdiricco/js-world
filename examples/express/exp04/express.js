const express = require("express");
const app = express();
const { persone } = require("./persone");

app.get("/", (req, res) => {
  res.send('<h1>Homepage</h1><a href="/persone">vai su persone</a>')
});

app.get('/persone', (req, res) => {
  const __persone = persone.map((persona) => {
    const {nome, cognome, eta} = persona;
    return {nome, cognome, eta}
  })
  res.json(__persone);
});

//Posso inserire parametri a piacere attraverso l'operatore ":"
//Attenzione ai tipi!! Meglio usare stringhe visto che poi è il modo con cui possiamo interrogare i db
app.get('/persone/:id', (req, res) => {
  console.log(req.params)
  const {id} = req.params;
  const persona = persone.find((persona) => persona.id === id)
  
  //Gestione dell'errore
  if (!persona) {
    return res.status(404).send({messaggio: "non trovato", code: 404})
  }

  res.json(persona);
})

app.listen(3000);
