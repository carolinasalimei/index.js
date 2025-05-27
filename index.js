const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Restoproyect');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
