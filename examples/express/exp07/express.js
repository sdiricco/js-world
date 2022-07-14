const express = require("express");
const app = express();
const { persone } = require("./persone");
const {middlewareTest, auth} = require("./middlewareTest")

//con app.use posso usare il middleware su tutti
// app.use(middlewareTest)

//in questo modo applico il middleware solo ai percorsi che derivano da '/persone'
// app.use('/persone',middlewareTest)

//applico multipli middleware in cascata
// app.use([middlewareTest, auth])

//posso applicare i middleware a uno specifico rout passanodo un array ..

app.use(middlewareTest)

app.get('/', (req, res) => {
  res.send("Homepage")
})

app.get('/about', (req, res) => {
  res.send("About")
})

app.get('/area', [middlewareTest, auth], (req, res) => {
  res.send("Area privata")
})

app.get('/persone', (req, res) => {
  res.send("Persone")
})

app.get('/persone/ricche', (req, res) => {
  res.send("Persone ricche")
})

app.get('/persone/povere', (req, res) => {
  res.send("Persone povere")
})

app.listen(3000);
