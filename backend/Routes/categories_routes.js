const express = require("express");

const categoriesController = require("../controllers/categoriesController")

const router = express.Router();



router.route('/api/categories')
      .get(categoriesController.getAllCategories)
      .post(categoriesController.addCategory)


router.route('/api/categories/:catId')
      .delete(categoriesController.deleteCategory)
      .put(categoriesController.updateCategory)
      .get(categoriesController.getCategory)


module.exports = router; 