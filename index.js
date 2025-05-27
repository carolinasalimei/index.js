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
// archivo: routes/compras.js
const express = require('express');
const router = express.Router();

// Datos de ejemplo (esto luego se reemplaza por base de datos)
let compras = [
  { id: 1, producto: 'Tomates', cantidad: 10, proveedor: 'Mercado Central' },
  { id: 2, producto: 'Harina', cantidad: 5, proveedor: 'Distribuidora Norte' }
];

// Obtener todas las compras
router.get('/', (req, res) => {
  res.json(compras);
});

// Obtener una compra por ID
router.get('/:id', (req, res) => {
  const compra = compras.find(c => c.id === parseInt(req.params.id));
  if (!compra) return res.status(404).json({ mensaje: 'Compra no encontrada' });
  res.json(compra);
});

// Crear una nueva compra
router.post('/', (req, res) => {
  const nuevaCompra = {
    id: compras.length + 1,
    producto: req.body.producto,
    cantidad: req.body.cantidad,
    proveedor: req.body.proveedor
  };
  compras.push(nuevaCompra);
  res.status(201).json(nuevaCompra);
});

// Eliminar una compra
router.delete('/:id', (req, res) => {
  compras = compras.filter(c => c.id !== parseInt(req.params.id));
  res.status(204).send();
});

module.exports = router;
