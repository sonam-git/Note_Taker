// Import the Express library.
const express = require("express");

// grab routes/index.js
const routes = require("./routes");

// Initializing the express app.
const app = express();


const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.static('public'));
// creating req.body / Parse URL encoded & JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// use router variable from line 3,const routes = require("./routes");
app.use('/',routes);



// listen on port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);



