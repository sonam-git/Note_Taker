const router = require('express').Router();
const {getUsers, createUsers} = require("../../../controller/userController");
// if we ever hit this router
// it means the user has hit "/api/users" in the url
router.get('/', getUsers);
router.post('/', createUsers);
// router.delete('/:id',deleteUser);

  module.exports = router;
  
