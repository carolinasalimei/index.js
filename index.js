const express = require('express');
const app = express();

// Usá solamente process.env.PORT sin ningún número fijo
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Restoproyect');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
