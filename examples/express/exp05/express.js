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

//La seguente è una query
//http://localhost:3000/p1/search/?nome=Marta&cognome=Neri
app.get('/p1/search', (req, res) => { 
  console.log(req.query) //{ nome: 'Marta', cognome: 'Neri' }
  res.send('<h1>query</h1>')
})

//Faccio una ricerca per nome
//prova con:
//http://localhost:3000/p2/search/
//http://localhost:3000/p2/search/?query=Marta
//il primo caso ritorna tutti, il secondo ritorna solo quello con nome Marta.
//
//prova con
//http://localhost:3000/p2/search/?query=M
app.get('/p2/search', (req, res) => { 
  const {query, limit} = req.query
  let personeFiltered = [...persone];

  if(query){
    personeFiltered = personeFiltered.filter((persona) => {
      return persona.nome.startsWith(query)
    })
  }

  res.status(200).json(personeFiltered)
})

//Faccio una ricerca per nome e limite
//Il limite ti permette di ricevere n elementi tra quelli validi
//prova con:
//http://localhost:3000/p3/search/
//http://localhost:3000/p3/search/?limit=2
//http://localhost:3000/p3/search/?query=M&limit=2
// 
//Il primo caso manda a schermo tutti 
//Il secondo manda a schermo i primi 2
//Il terzo manda a schermo i primi due validi il cui nome inizia con M
app.get('/p3/search', (req, res) => { 
  const {query, limit} = req.query
  let personeFiltered = [...persone];

  if(query){
    personeFiltered = personeFiltered.filter((persona) => {
      return persona.nome.startsWith(query)
    })
  }

  if(limit){
    personeFiltered = personeFiltered.slice(0, Number(limit))
  }

  res.status(200).json(personeFiltered)
})


app.get('/p4/search', (req, res) => { 
  const {query, limit} = req.query
  let personeFiltered = [...persone];

  if(query){
    personeFiltered = personeFiltered.filter((persona) => {
      return persona.nome.startsWith(query)
    })
  }

  if(limit){
    personeFiltered = personeFiltered.slice(0, Number(limit))
  }

  if (!personeFiltered.length) {
    //In questo caso è necessario il return perchè altrimenti manda due risposte
    //c'è anche il res.status() sotto questo if
    return res.status(200).json({code: 200, data:[]})
  }

  res.status(200).json(personeFiltered)
})

app.listen(3000);
