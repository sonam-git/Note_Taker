// a router-level middleware
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require("./htmlRoutes");


// see /api and take it to the /apiRoutes/index.js
// this line prepends "/api" to every route declared inside "apiRoutes"

router.use('/api', apiRoutes);
router.use( htmlRoutes);




module.exports = router;