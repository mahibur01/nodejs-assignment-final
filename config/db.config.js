const mongoose = require("mongoose");

// Database Connection
async function connectDb() {
  mongoose.connect("mongodb+srv://w3engineers:w3engineers@w3engineers.0rpqgzf.mongodb.net/?retryWrites=true&w=majority");
}

module.exports = {
  connectDb: connectDb,
};


