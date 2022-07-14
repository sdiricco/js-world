const express = require("express");
const app = express();

app.use(express.static('public'));

//homepage
app.get('/', (req, res) => {
    res.sendFile("homepage.html", {root: __dirname + "/public"})
})

//about
app.get('/about', (req, res) => {
    res.sendFile("about.html", {root: __dirname + "/public"})
})

//contatti
app.get('/contatti', (req, res) => {
    res.sendFile("contatti.html", {root: __dirname + "/public"})
})

app.all('*', (req, res)=>{
    res.sendFile("404.html", {root: __dirname + "/public"})
})

app.listen(3000);