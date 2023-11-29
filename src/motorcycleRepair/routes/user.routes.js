const express = require("express");
const userController = require("./../controllers/user.controller");
const userMiddleware = require("./../middlewares/user.middleware");
const router = express.Router();

router
  .route("/")
  .get(userController.findAllUsers)
  .post(userController.createUser);

//router.post('/login', userMiddleware.existUserEmail, userController.login);

router

  //.use(userMiddleware.existUser)
  .route("/:id")
  .get(userController.findUser)
  .patch(userController.update)
  .delete(userController.delete);

module.exports = router;
