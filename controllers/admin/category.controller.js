const CategoryModel = require("../../models/category.model");

async function saveCategory(req, res) {
  console.log(req.body);
  console.log(req.body.title);
  const catOne = new CategoryModel({ title: req.body.title, slug: req.body.slug, image: req.file.filename, createdAt: new Date() });
  await catOne.save().then(() => console.log("success"));
  res.render("pages/admin/create-category");
}

// All Categories
async function getAllCategories(req, res) {
  var categories = await CategoryModel.find();
  res.render("pages/admin/categories", { categories });
}

// Create Category
async function createCategory(req, res) {
  res.render("pages/admin/create-category");
}


module.exports = {
  saveCategory: saveCategory,
  getAllCategories: getAllCategories,
  createCategory: createCategory
};