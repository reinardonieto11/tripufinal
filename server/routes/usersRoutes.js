const express = require("express");
const usersController = require("../controllers/usersController");
const authMiddlewares = require("../middlewares/authMiddlewares");
const usersRouter = express.Router();

usersRouter.get("/", authMiddlewares.checkToken, usersController.getUsers);
usersRouter.post("/", authMiddlewares.checkUser, usersController.createUser);

module.exports = usersRouter;
