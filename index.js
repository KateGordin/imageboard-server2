const express = require("express");
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");
const app = express();
const port = process.env.PORT || 4000;
// app.use(router);

app.use("/images", imageRouter);
app.use("/users", userRouter);

app.listen(port);
