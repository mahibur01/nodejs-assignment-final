const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({ title: String, slug: String, image: String, details: String, categoryId: String, createdAt: Date });
const PostModel = mongoose.model("Post", postSchema);
module.exports = PostModel;