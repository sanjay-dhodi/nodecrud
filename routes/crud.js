const express = require("express");
const router = express.Router();
const crudContoller = require("../controllers/crud_controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { body } = require("express-validator");
const validator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ max: 8 })
    .withMessage("only max 8 charector long name allowed")
    .escape(),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("please enter valid email")
    .escape(),
  body("mobile")
    .notEmpty()
    .withMessage("mobile is required")
    .isNumeric()
    .withMessage("number field must be number")
    .length({ max: 10, min: 10 })
    .escape(),

  // pending image field validation
  // body("image").custom();
];

router.post(
  "/api/create",
  upload.single("image"),
  validator,
  crudContoller.createContact
);
router.get("/api/contacts", crudContoller.readContact);
router.get("/api/contacts/:id", crudContoller.getSingleContact);
router.delete("/api/contacts/delete/:id", crudContoller.deleteContact);
router.put(
  "/api/contacts/update/:id",
  upload.single("image"),
  crudContoller.updateContact
);

module.exports = router;
