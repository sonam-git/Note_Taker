// a router-level middleware
const router = require("express").Router();
const noteRoutes = require('./noteRoutes');


// if /api/notes is hit then forward to noteRoutes/index
 // prepends "/api/notes" to every route declared in "noteRoutes"
router.use('/notes', noteRoutes);



module.exports = router;
