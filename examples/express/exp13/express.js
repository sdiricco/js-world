const express = require("express");
const personeRouter = require('./routs/persone')
const prodottiRouter = require('./routs/prodotti')

const app = express();

app.use(express.json())

app.use('/api/persone', personeRouter)
app.use('/api/prodotti', prodottiRouter)

app.listen(3000);
