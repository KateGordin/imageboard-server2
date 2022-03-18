const { Router } = require("express");
const images = require("../models").image;
const imageRouter = new Router();

imageRouter.get("/", async (req, res) => {
  const allImages = await images.findAll();
  res.send(allImages);
});

//In router/image.js, add a POST / endpoint that
//creates a new image in the database.
imageRouter.post("/create", async (req, res) => {
  const newimage = await images.create(req.body);
  res.json(newimage);
});

module.exports = imageRouter;
