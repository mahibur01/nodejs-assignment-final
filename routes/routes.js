const router = require("express").Router();
const pageController = require("../controllers/page.controller");

// Basic Routers
router.get("/", pageController.homePage);
router.get("/all-categories", pageController.categoryPage);
router.get("/single-post", pageController.singlePostPage);
router.get("/category-posts", pageController.singlePostPage);


module.exports = router;