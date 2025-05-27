const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json()); // para poder leer JSON en POST

const rutasCompras = require('./routes/compras');
app.use('/api/compras', rutasCompras);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Restoproyect');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
