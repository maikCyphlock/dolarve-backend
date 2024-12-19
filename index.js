const { createLogger, format, transports } = require('winston');
const express = require("express");
const helmet = require("helmet");
const monitorRoutes = require("./src/routes/monitorRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

// Logger
const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp(),
    format.colorize(),
    format.simple()
  ),
  transports: [
    new transports.Console()
  ]
});

// Usa Helmet para agregar seguridad HTTP headers
app.use(helmet());

// Middleware para manejar CORS
app.use((req, res, next) => {
  const allowedOrigins = ["https://dollar-frontend-api.vercel.app"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Middleware para loguear errores
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Rutas
app.use("/api/v1/monitors", monitorRoutes);

app.listen(PORT, () => {
  logger.info(`Aplicación escuchando en el puerto ${PORT}`);
});

