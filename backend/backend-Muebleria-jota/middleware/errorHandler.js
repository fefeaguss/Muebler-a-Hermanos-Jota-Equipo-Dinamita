/**
 * Middleware central para el manejo de errores.
 * Siempre debe tener 4 parámetros: (err, req, res, next).
 */
function generalErrorHandler(err, req, res, next) {
    const status = err.status || 500;
    res.status(status);

    const errorResponse = {
        status: status,
        message: err.message || 'Error interno del servidor',
    };

    if (req.app.get('env') === 'development') {
        errorResponse.stack = err.stack;
    }
    console.error(`Error ${status}: ${err.message}`);
    res.json(errorResponse);
}

module.exports = generalErrorHandler;