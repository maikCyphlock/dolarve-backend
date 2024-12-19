const  logger  = require("../utils/logger");
const monitorService = require("../services/monitorService");

const getAllMonitors = async (req, res) => {
  logger.info("Get all monitors");
  const data = await monitorService.getAllMonitors();
  res.json(data);
};

const getMonitorByUid = async (req, res) => {
  logger.info(`Get monitor by uid: ${req.params.uid}`);
  const data = await monitorService.getMonitorByUid(req.params.uid);
  res.json(data);
};

const getMonitorById = async (req, res) => {
  logger.info(`Get monitor by id: ${req.params.id}`);
  const data = await monitorService.getMonitorById(req.params.id);
  res.json(data[0]);
};

const getHistoryById = async (req, res) => {
  logger.info(`Get history by id: ${req.params.id}`);
  const data = await monitorService.getHistoryById(req.params.id);
  res.json(data);
};

module.exports = {
  getAllMonitors,
  getMonitorByUid,
  getMonitorById,
  getHistoryById,
};
