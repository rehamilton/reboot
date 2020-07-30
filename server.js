const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes')

//add additional reuires - AUTH
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


//add additional usage - AUTH
app.use(express.json())
app.use(cors())


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Set up routes middleware 
app.use('/api', apiRoutes)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


//setup mongoose 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books101", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/books101';

mongoose.connect(MONGODB_URI)

