const { Router } = require("express");
const users = require("../models").user;
const userRouter = new Router();

userRouter.get("/", async (req, res) => {
  const allUsers = await users.findAll();
  res.send(allUsers);
});

module.exports = userRouter;
