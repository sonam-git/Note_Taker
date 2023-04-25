// a router-level middleware
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');


// see /api and take it to the /apiRoutes/index.js
// this line prepends "/api" to every route declared inside "apiRoutes"

router.use('./api', apiRoutes);




module.exports = router;