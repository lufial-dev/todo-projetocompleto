const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middleware/TaskValidation');
const MacadrressValidation = require('../middleware/MacaddressValidation');

router.post("/", TaskValidation, TaskController.create);
router.put("/:id", TaskValidation, TaskController.update);
router.get("/:id", TaskController.show);
router.get("/filter/all", MacadrressValidation, TaskController.all);

module.exports = router;