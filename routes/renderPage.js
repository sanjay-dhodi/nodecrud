const express = require("express");
const router = express.Router();
const renderPageController = require("../controllers/renderPageController");

router.get("/", renderPageController.renderIndexPage);
router.get("/createContact", renderPageController.renderCreateContactPage);

module.exports = router;
