const express = require('express');
const router = express.Router();

// iporto los productis del archivo JSON
const productos = require('../data/productos.json');

// Ruta GET /api/productos, devuelve todos los productos
router.get('/', (req, res) => {
    console.log('Solicitud GET recibida para /api/productos');
    res.json(productos); // Envía el array de productos
});

//GET /api/productos/:id, devuelve un producto específico por ID
router.get('/:id', (req, res) => {
    const idProducto = parseInt(req.params.id);

    const producto = productos.find(p => p.id === idProducto);

    if (producto) {
        
        res.json(producto);
    } else {
        console.log(`Producto con ID ${idProducto} no encontrado.`);
        res.status(404).send({ error: 'Producto no encontrado' });
    }
});

module.exports = router;