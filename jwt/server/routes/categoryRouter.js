const express = require("express");
const router = express.Router();

const categoryController = require("../controller/categoryController");
router.post("/add", categoryController.Addcategory);
router.get("/get", categoryController.getcategory);

module.exports = router;
