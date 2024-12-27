const { getMonitor } = require("consulta-dolar-venezuela");
const db = require("better-sqlite3")("dolar.db");

class DolarDBService {
  constructor(db) {
    this.db = db;
    this.update = db.prepare(
      "UPDATE Monitors SET title = @title, price = @price, price_old = @price_old, type = @type, lastUpdate = @lastUpdate WHERE id = @id;"
    );
    this.insertHistory = db.prepare(
      "INSERT INTO PriceHistory (monitor_id, price, timestamp) VALUES (@id, @price, @lastUpdate)"
    );
  }

  batchUpdate(monitors) {
    const timestamp = new Date().toISOString();
    
    return this.db.transaction(() => {
      for (const [id, data] of Object.entries(monitors)) {
        const monitorData = {
          id,
          title: data.title,
          price: data.price,
          price_old: data.price_old,
          type: data.type,
          lastUpdate: timestamp
        };

        this.update.run(monitorData);
        this.insertHistory.run({
          id,
          price: data.price,
          lastUpdate: timestamp
        });
      }
    })();
  }
}

<<<<<<< HEAD
const dbService = new DolarDBService(db);

async function updateDolarPrices() {
  try {
    const monitors = await getMonitor("null");
    dbService.batchUpdate(monitors);
  } catch (error) {
    console.error('Error updating dolar prices:', error);
  }
}

updateDolarPrices();
=======
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
>>>>>>> parent of b655863 (♻️ refactor: change lastUpdate to new Date)
