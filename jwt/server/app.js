const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
const superAdminRouter = require("./routes/superAdminRoutes");
const blogRouter = require("./routes/blogRouter");
const categoryRouter = require("./routes/categoryRouter");
const { authUser } = require("./controller/authController");
const courseRouter = require("./routes/courseRoute");
require("dotenv").config();
const app = express();
const option = { useNewUrlParser: true, useUnifiedTopology: true };
app.use(express.json());
app.use(cors({ origin: true }));

mongoose
  .connect(
    "mongodb+srv://grade:kYeTcVAvw76nl5Od@cluster0.rk1ef.mongodb.net/grade?retryWrites=true&w=majority",
    option
  )
  .then(() => {
    console.log("database connected");
    app.listen(3001, () => {
      console.log("server connected");
    });
  });
app.use("/blogs", blogRouter);
app.use("/category", categoryRouter);
app.use("/course", courseRouter);
app.use("/superadmin", authUser, superAdminRouter);
app.use("/user", userRoute);
