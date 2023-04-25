const router = require('express').Router();
const {getNotes, createNotes,deleteNotes} = require("../../../controller/userController");
// if we ever hit this router
// it means the user has hit "/api/users" in the url
router.route('/')
.get(getNotes)
.post(createNotes)
router.route('/:id')
.delete(deleteNotes)

  module.exports = router;
  
