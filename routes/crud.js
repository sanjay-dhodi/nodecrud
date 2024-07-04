const express = require("express");
const router = express.Router();
const crudContoller = require("../controllers/crud_controller");
const multer = require("multer")
const upload = multer({ dest: 'uploads/' })

router.post("/api/create", upload.single("image"), crudContoller.createContact);
router.get("/api/contacts", crudContoller.readContact);
router.get("/api/contacts/:id", crudContoller.getSingleContact);
router.delete("/api/contacts/delete/:id", crudContoller.deleteContact);
router.put("/api/contacts/update/:id", upload.single("image") ,crudContoller.updateContact);

module.exports = router;
