const express = require("express");
const router = express.Router();
const superAdminController = require("../controller/superAdminController");

router.get("/users", superAdminController.getUsers);

module.exports = router;
