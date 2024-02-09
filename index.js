const express = require("express");
const helmet = require("helmet");
const {
  getAllMonitors,
  getMonitorById,
  getMonitorByUid,
} = require("./queries/index.js");
const app = express();
const PORT = process.env.PORT || 3000;

// Usa Helmet para agregar seguridad HTTP headers
app.use(helmet());

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
app.listen(PORT, () => {
  console.log("Aplicación escuchando en el puerto  3000");
});
