const express = require("express");
const app = express();

//homepage
app.get('/', (req, res) => {
    res.send(`<h1>Home</h1>`)
})

//about
app.get('/about', (req, res) => {
    res.send(`<h1>About</h1>`)
})

//contatti
app.get('/contatti', (req, res) => {
    res.send(`<h1>Contatti</h1>`)
})

app.all('*', (req, res)=>{
    res.send(`<h1>Risorsa non trovata</h1>`)
})

app.listen(3000);