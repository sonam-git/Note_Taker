const router= require("express").Router();;
const path = require("path");

// Getting the path request and sending to file for response.
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router;