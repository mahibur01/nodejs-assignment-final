const categoryController = require("../controllers/admin/category.controller");
const postController = require("../controllers/admin/post.controller");
const multer = require('multer')
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const pageController = require("../controllers/page.controller");


// File Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    var fileName = uuidv4() + "." + file.originalname.split(".")[1];
    cb(null, fileName)
  }
})

const upload = multer({ storage: storage })

router.post('/posts', upload.single('post_image'), postController.save);
router.get("/posts", postController.getAll);
router.get("/create-post", postController.createPost);
router.post('/categories', upload.single('cat_image'), categoryController.saveCategory);
router.get("/categories", categoryController.getAllCategories);
router.get("/create-category", categoryController.createCategory);
router.get("/dashboard", pageController.adminDashboard);

module.exports = router;