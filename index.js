const express = require("express");
const helmet = require("helmet");
const {
  getAllMonitors,
  getMonitorById,
  getMonitorByUid,
  getHistoryById,
} = require("./queries/index.js");
const app = express();
const PORT = process.env.PORT || 3000;

// Usa Helmet para agregar seguridad HTTP headers
app.use(helmet());
// Use this middleware in your Express.js app to handle CORS

//TODO: REMOVE THIS, ONLY FOR TESTING A FEATURE
app.use((req, res, next) => {
  // Replace 'http://localhost:4321' with your actual origin
  const allowedOrigins = ["https://dollar-frontend-api.vercel.app"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/get-all-currency", async (req, res) => {
  const data = await getAllMonitors();
  res.json(data);
});

app.get("/get-uid-currency/:uid", async (req, res) => {
  const data = await getMonitorByUid(req.params.uid);
  res.json(data);
});

app.get("/get-id-currency/:id", async (req, res) => {
  const data = await getMonitorById(req.params.id);
  res.json(data);
});
app.get("/get-history-id/:id", async (req, res) => {
  const data = await getHistoryById(req.params.id);
  res.json(data);
});

app.listen(PORT, () => {
  console.log("Aplicación escuchando en el puerto  3000");
});
