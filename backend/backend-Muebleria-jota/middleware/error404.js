// routes/error404.js

const createError = require('http-errors');

/**
 * Middleware que intercepta cualquier petición que no haya sido manejada
 * por las rutas anteriores, generando un error 404.
 */
function error404Handler(req, res, next) {
    next(createError(404));
}

module.exports = error404Handler;