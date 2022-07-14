//Middleware
//Sono funzioni che vengono eseguitedurante la richiesta, tra la richiesta e la risposta.
//In genere i middleware sono moduli

const middlewareTest = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getMinutes();
  console.log("method", method);

  //l'url è "relativo"
  console.log("url", url);
  console.log("time", time);

  //next() è importante. Serve per passare allo "step" successivo
  //senza next() non passa oltre e rimane bloccato
  //potrei anche utilizzare res.send() ma a questo punto salto gli "step" successivi
  //ad ogni modo next() o res.send() servono
  next();
};

const auth = (req, res, next) => {
  const {user} = req.query;
  //http://localhost:3000/area?user=Luca
  if(user === 'Luca'){
    next()
  }else{
    res.status(401).send("Non autorizzato")
  }
  console.log('accesso effettuato')
  next();
};


module.exports = {middlewareTest, auth};
