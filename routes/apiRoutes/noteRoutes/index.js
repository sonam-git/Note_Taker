const router = require("express").Router();
// importing the required function from the userController.js inside the controller directory
const {
  getNotes,
  createNotes,
  deleteNotes,
} = require("../../../controller/userController");
// if we ever hit this router
// it means the user has hit "/api/users" in the url
router
  .route("/")
  // get the note
  .get(getNotes)
  // create the note
  .post(createNotes);
// delete the note
router.route("/:id").delete(deleteNotes);

module.exports = router;
