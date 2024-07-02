const express = require("express");
const router = express.Router();
const crudContoller = require("../controllers/crud_controller");

router.post("/api/create", crudContoller.createContact);
router.get("/api/contacts", crudContoller.readContact);
router.get("/api/contacts/:id", crudContoller.getSingleContact);
router.delete("/api/contacts/delete/:id", crudContoller.deleteContact);
router.put("/api/contacts/update/:id", crudContoller.updateContact);

module.exports = router;
