//conf archivo ruta
const express = require("express");

const repairController = require("./../controllers/repairs.controller");
const repairMeddleware = require("./../middlewares/repair.middleware");
const router = express.Router();

//3. definir el endpoint
router
  .route("/")
  .get(repairController.findAllRepair)
  .post(repairController.create);

router
  .use("/:id", repairMeddleware.existRepair)
  .route("/:id")
  .get(repairController.findRepair)
  .patch(repairController.update)
  .delete(repairController.delete);

module.exports = router;
