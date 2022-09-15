// var postController = require("./controllers/admin/post.controller");
const { connectDb } = require("./config/db.config");
const adminRoutes = require("./routes/admin-routes")
const routes = require("./routes/routes")
const express = require('express');
var path = require('path');

const app = express();
app.use(express.urlencoded());
app.use(express.json());


connectDb();

app.set('view engine', 'ejs');
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/admin", adminRoutes)
app.use("/", routes)


app.listen(8080);
console.log('Server is listening on port 8080');