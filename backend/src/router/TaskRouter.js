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

router.get("/filter/all/:macaddress", MacadrressValidation, TaskController.all);
router.get("/filter/late/:macaddress", MacadrressValidation, TaskController.late);
router.get("/filter/today/:macaddress", MacadrressValidation, TaskController.today);
router.get("/filter/week/:macaddress", MacadrressValidation, TaskController.week);
router.get("/filter/month/:macaddress", MacadrressValidation, TaskController.month);
router.get("/filter/year/:macaddress", MacadrressValidation, TaskController.year);

module.exports = router;