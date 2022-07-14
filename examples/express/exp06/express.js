const express = require("express");
const app = express();
const { persone } = require("./persone");

//Middleware
//Sono funzioni che vengono eseguitedurante la richiesta, tra la richiesta e la risposta.
//In genere i middleware sono moduli

const middlewareTest = (req, res, next)=>{
  const {method, url} = req;
  const time = new Date().getMinutes()
  console.log("method", method)
  console.log("url", url)
  console.log("time",time)

  //next() è importante. Serve per passare allo "step" successivo
  //senza next() non passa oltre e rimane bloccato
  //potrei anche utilizzare res.send() ma a questo punto salto gli "step" successivi
  //ad ogni modo next() o res.send() servono
  next()
}

app.get('/', middlewareTest, (req, res) => {
  res.send("Homepage")
})


app.get('/about', middlewareTest, (req, res) => {
  res.send("About")
})

app.listen(3000);
