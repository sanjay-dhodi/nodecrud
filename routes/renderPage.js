const express = require("express");
const router = express.Router();
const renderPageController = require("../controllers/renderPageController");

router.get("/", renderPageController.renderIndexPage);
router.get("/createContact", renderPageController.renderCreateContactPage);
router.get("/updateContact/:id", renderPageController.renderUpdateContactPage);

module.exports = router;

