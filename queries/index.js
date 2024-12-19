const db = require("better-sqlite3")("dolar.db");
const logger = require("../src/utils/logger");

const getMonitorByUid = (uid) => {
  try {
    const monitor = db.prepare("SELECT * FROM Monitors WHERE uid = ?").get(uid) || {};
    logger.info(`getMonitorByUID: ${JSON.stringify(monitor)}`);
    return  monitor;
  } catch (error) {
    logger.error(`Error fetching monitor by UID: ${error.message}`);
    return {};
  }
};

const getMonitorById = (id) => {
  try {
    const monitor = db.prepare("SELECT * FROM Monitors WHERE id = ?").all(id) || [];
    logger.info(`getMonitorById: ${JSON.stringify(monitor)}`);
    return  monitor[0];
  } catch (error) {
    logger.error(`Error fetching monitor by ID: ${error.message}`);
    return [];
  }
};

const getHistoryById = (id) => {
  try {
    const history =  db.prepare("SELECT * FROM PriceHistory WHERE monitor_id = ?").all(id) || [];

    logger.info(`getHistoryById: ${JSON.stringify(history)}`);
    return history;
  } catch (error) {
    logger.error(`Error fetching history by ID: ${error.message}`);
    return [];
  }
};

const getAllMonitors = () => {
  try {
    const allMonitors = db.prepare("SELECT * FROM Monitors").all() || [];

    logger.info(`getAllMonitors: ${JSON.stringify(allMonitors)}`);
    return allMonitors;
  } catch (error) {
    logger.error(`Error fetching all monitors: ${error.message}`);
    return [];
  }
};

module.exports = {
  getMonitorById,
  getAllMonitors,
  getMonitorByUid,
  getHistoryById,
};

