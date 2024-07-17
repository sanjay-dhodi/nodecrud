const express = require("express");
const router = express.Router();
const crudContoller = require("../controllers/crud_controller");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

const upload = require("../utility/multer_filefilter")


const { body } = require("express-validator");
const validator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is empty")
    .isLength({ max: 12 })
    .withMessage("only max 12  charector long name allowed")
    .escape(),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("email is empty")
    .isEmail()
    .withMessage("please enter valid email"),
  body("mobile")
    .trim()
    .notEmpty()
    .withMessage("mobile is empty")
    .isNumeric()
    .withMessage("number field must be number")
    .isLength({ min: 5, max: 10 })
    .withMessage("please enter valid mobile number 5 to 10")
    .escape(),
  body("image").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("image field is empty");
    }
    return true;
  }),
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
  validator,

  crudContoller.updateContact
);

module.exports = router;
