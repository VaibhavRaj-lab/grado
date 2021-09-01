const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");
router.post("/add", blogController.Addblog);
router.get("/get", blogController.getblog);
router.get("/get/:id", blogController.getBlogById);
router.delete("/delete/:id", blogController.deleteBlogById);
router.put("/edit/:id", blogController.editBlog);
module.exports = router;
