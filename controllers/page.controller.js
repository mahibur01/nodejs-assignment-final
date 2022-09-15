const CategoryModel = require("../models/category.model");
const PostModel = require("../models/post.model");

// Home Page Render
async function homePage(req, res) {
  var categories = await CategoryModel.find();
  var posts = await PostModel.find();
  // var categoryPosts = await PostModel.find({ categoryId: 454 });
  var categoryPosts = await PostModel.findById(req.query.id);
  res.render("pages/index", { categories, posts, categoryPosts });
}

// Category Page Render
async function categoryPage(req, res) {
  var categories = await CategoryModel.find();
  res.render("pages/all-categories", { categories });
}

// Single Post Page Render
async function singlePostPage(req, res) {
  var post = await PostModel.findById(req.query.id);
  res.render("pages/single-post", { post });
}

// Admin Dashboard Render
async function adminDashboard(req, res) {
  res.render("pages/admin/dashboard");
}


module.exports = {
  homePage: homePage,
  categoryPage: categoryPage,
  singlePostPage: singlePostPage,
  adminDashboard: adminDashboard,
  
};