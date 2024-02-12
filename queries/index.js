const db = require("better-sqlite3")("dolar.db");

const getMonitorByUid = (uid) => {
  return db.prepare("SELECT * FROM Monitors WHERE uid = ?").get(uid);
};
const getMonitorById = (id) => {
  return db.prepare("SELECT * FROM Monitors WHERE id = ?").all(id);
};

const getHistoryById = (id) => {
  return db.prepare("SELECT * FROM PriceHistory WHERE monitor_id = ?").all(id);
};
const getAllMonitors = () => {
  return db.prepare("SELECT * FROM Monitors").all();
};

module.exports = {
  getMonitorById,
  getAllMonitors,
  getMonitorByUid,
  getHistoryById,
};
