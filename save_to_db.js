const { getMonitor } = require("consulta-dolar-venezuela");
const db = require("better-sqlite3")("dolar.db");

const insert = db.prepare(
  "INSERT INTO Monitors (id, title, price, price_old, type, lastUpdate) VALUES (@id, @title, @price, @price_old, @type, @lastUpdate)"
);

const insertMany = db.transaction((monitors) => {
  for (const monitor of monitors) insert.run(monitor);
});

getMonitor("null").then(($) => {
  Object.entries($).forEach((key) => {
    insert.run({
      id: key[0],
      title: key[1].title,
      price: key[1].price,
      price_old: key[1].price_old,
      type: key[1].type,
      lastUpdate: key[1].lastUpdate,
    });
  });
});
