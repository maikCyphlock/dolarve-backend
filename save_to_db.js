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
