const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
router.post("/add", courseController.addCourse);
router.get("/get", courseController.getCourse);
router.delete("/delete/:id", courseController.deleteCourseById);
router.put("/edit/:id", courseController.editCourse);

module.exports = router;
