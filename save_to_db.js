const { getMonitor } = require("consulta-dolar-venezuela");
const db = require("better-sqlite3")("dolar.db");

const update = db.prepare(
  "UPDATE Monitors SET title = @title, price = @price, price_old = @price_old, type = @type,lastUpdate = @lastUpdate WHERE id = @id;"
);

const insertHistory = db.prepare(
  "INSERT INTO PriceHistory ( monitor_id, price, timestamp) VALUES (@id, @price, @lastUpdate)"
);

const insertMany = db.transaction((monitors) => {
  for (const monitor of monitors) update.run(monitor);
});

getMonitor("null").then(($) => {
  Object.entries($).forEach((key) => {
    update.run({
      id: key[0],
      title: key[1].title,
      price: key[1].price,
      price_old: key[1].price_old,
      type: key[1].type,
      lastUpdate: key[1].lastUpdate,
    });

    insertHistory.run({
      id: key[0],
      price: key[1].price,
      lastUpdate: key[1].lastUpdate,
    });
  });
});
