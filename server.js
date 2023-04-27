// Import the Express library.
const express = require("express");

// grab routes/index.js
const routes = require("./routes");

// Initializing the express app.
const app = express();

const PORT = process.env.PORT || 3001;

// Express middleware will always run the operation in the order from top to bottom "order matters"
// creating req.body / Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// forward all request with a pattern of "/" to router in routes folder
app.use("/", routes);

// listen on port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
