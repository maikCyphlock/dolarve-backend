const express = require("express");
const router = express.Router();
const monitorController = require("../controllers/monitorController");

router.get("/get-all-currency", monitorController.getAllMonitors);
router.get("/get-uid-currency/:uid", monitorController.getMonitorByUid);
router.get("/get-id-currency/:id", monitorController.getMonitorById);
router.get("/get-history-id/:id", monitorController.getHistoryById);

module.exports = router;