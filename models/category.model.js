const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({ title: String, slug: String, image: String, createdAt: Date });
const CategoryModel = mongoose.model("Category", categorySchema);
module.exports = CategoryModel;