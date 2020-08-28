const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middleware/TaskValidation');
const MacadrressValidation = require('../middleware/MacaddressValidation');

router.post("/", TaskValidation, TaskController.create);
router.put("/:id", TaskValidation, TaskController.update);
router.get("/:id", TaskController.show);
router.delete("/:id", TaskController.delete);
router.put("/:id/:done", TaskController.done );

router.get("/filter/all", MacadrressValidation, TaskController.all);
router.get("/filter/late", MacadrressValidation, TaskController.late);
router.get("/filter/today", MacadrressValidation, TaskController.today);
router.get("/filter/week", MacadrressValidation, TaskController.week);
router.get("/filter/month", MacadrressValidation, TaskController.month);

module.exports = router;