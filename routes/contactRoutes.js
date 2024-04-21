const express = require("express");
const router = express.Router();
const {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
// READ All  --// CREATE
router.route("/").get(getContacts).post(createContact);
// READ One  --// UPDATE ---// DELETE
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
