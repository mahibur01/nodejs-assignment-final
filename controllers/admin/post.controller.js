const PostModel = require("../../models/post.model");
async function save(req, res) {

  var fileName = req.file.filename;

  const postOne = new PostModel({ title: req.body.title, slug: req.body.slug, image: fileName, details: req.body.details, categoryId: req.body.categoryId, createdAt: new Date() });
  await postOne.save().then(() => console.log("success"));
  res.render("pages/admin/create-post");
}

// Get all posts
async function getAll(req, res) {
  var posts = await PostModel.find();
  res.render("pages/admin/posts", { posts });
}

// Create Posts
async function createPost(req, res) {
  res.render("pages/admin/create-post");
}


module.exports = {
  save: save,
  getAll: getAll,
  createPost: createPost
};