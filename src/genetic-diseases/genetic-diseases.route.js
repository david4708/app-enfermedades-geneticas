//conf archivo ruta
const express = require("express");
//const route = require("../app");

const geneticConttroller = require("./genetic-controller");
const midlewareSaludos = require("./genetic-middleware");

const router = express.Router();

//3. definir el endpoint
router
  .get(
    "/genetic-diseases",
    midlewareSaludos.Saludo1,
    geneticConttroller.findAll
  )

  .post(
    "/genetic-diseases",

    geneticConttroller.create
  )

  .get("/genetic-diseases/:id", geneticConttroller.findOne)
  .patch(
    "/genetic-diseases/:id",
    midlewareSaludos.Saludo2,
    geneticConttroller.update
  )

  .delete(
    "/genetic-diseases/:id",
    midlewareSaludos.Saludo2,
    geneticConttroller.DELETE
  );

module.exports = router;
